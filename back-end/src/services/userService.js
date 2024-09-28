import { raw } from "body-parser";
import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // user already exist
        // compare password
        // bcrypt.compareSync("B4c0/\/", hash); // true
        let user = await db.User.findOne({
          attributes: [
            "address",
            "phonenumber",
            "gender",
            "email",
            "birth",
            "roleId",
            "password",
            "firstName",
            "lastName",
            "image",
            "id",
          ],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password); // false
          if (check) {
            userData.errCode = 0;
            (userData.errMessage = "Ok"), delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User not found`;
        }
      } else {
        // return error
        userData.errCode = 1;
        userData.errMessage = `Your's email isn't exist in your system. Plz try other email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserRegister = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        // email already exists
        userData.errCode = 1;
        userData.errMessage = "Email already exists";
      } else {
        // hash the password
        let hashedPassword = await hashUserPassword(password);

        // create new user
        await db.User.create({
          email: email,
          password: hashedPassword,
          roleId: "R1", // or any default role
        });

        userData.errCode = 0;
        userData.errMessage = "User created successfully";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

const changePasswordService = async (userId, oldPassword, newPassword) => {
  try {
    // Lấy thông tin người dùng từ DB
    const user = await db.User.findByPk(userId);

    if (!user) {
      return {
        errCode: 1,
        message: "User not found!",
      };
    }

    // Kiểm tra mật khẩu cũ(password, user.password);
    const isMatch = await bcrypt.compareSync(oldPassword, user.password);
    if (!isMatch) {
      return {
        errCode: 2,
        message: "Old password is incorrect. Please try again.",
      };
    }

    // Cập nhật mật khẩu mới
    const hashedNewPassword = await hashUserPassword(newPassword);
    user.password = hashedNewPassword;
    await user.save();

    return {
      errCode: 0,
      message: "Password changed successfully!",
    };
  } catch (error) {
    console.error(error);
    return {
      errCode: 3,
      message: "Internal server error",
    };
  }
};
let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let updateUserInforService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          gender: data.gender,
          birth: data.birthDate,
          password: data.password,
          image: data.image,
        },
        {
          where: { id: data.id },
        }
        // update user sau khi cap nhat
      );
      const updatedUser = await db.User.findOne({
        attributes: [
          "address",
          "phonenumber",
          "gender",
          "email",
          "birth",
          "roleId",
          "password",
          "firstName",
          "lastName",
          "image",
          "id",
        ],
        where: { id: data.id },
        raw: true,
      });
      if (updatedUser) {
        delete updatedUser.password;
      }
      resolve(updatedUser);
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUsersService = async () => {
  try {
    const users = await db.User.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "email",
        "phonenumber",
        "address",
        "gender",
        "roleId",
      ],

      raw: true,
    });
    return {
      errCode: 0,
      message: "get all user succeed!!",
      users,
    };
  } catch (e) {
    console.log(e);
    return { errCode: 1, message: "get all user failed!!" };
  }
};
const deleteUserbyIdService = async (userId) => {
  try {
    await db.User.destroy({ where: { id: userId } });
    return true;
  } catch (error) {
    throw new Error(error);
  }
};
const createNewFood = async (data) => {
  try {
    const newFood = await db.Product.create({
      name: data.name,
      type: data.type,
      price: data.price,
      rating: data.rating,
      time: data.time,
      description: data.description,
      imageUrl: data.imageUrl,
    });
    return newFood;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllFoods = async () => {
  try {
    const foods = await db.Product.findAll();
    if (foods) return foods;
    else return [];
  } catch (error) {
    throw new Error(error);
  }
};

const deleteFoodById = async (id) => {
  try {
    await db.Product.destroy({ where: { id: id } });
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

const updateFoodService = async (foodData) => {
  try {
    if (!foodData.id) {
      throw new Error("Food ID is required for updating.");
    }

    await db.Product.update(
      {
        name: foodData.name,
        price: foodData.price,
        description: foodData.description,
        type: foodData.type,
        time: foodData.time,
        imageUrl: foodData.imageUrl,
        rating: foodData.rating,
      },
      {
        where: { id: foodData.id },
      }
    );

    // Lấy lại thông tin món ăn sau khi cập nhật
    const updatedFood = await db.Product.findByPk(foodData.id);
    return updatedFood; // Trả về thông tin đã được cập nhật
  } catch (error) {
    throw new Error(`Error updating food: ${error.message}`);
  }
};

const createNewOrder = async (
  userId,
  filterCartItems,
  paymentMethod,
  shippingAddress
) => {
  try {
    // Tính tổng tiền của đơn hàng
    const totalPrice = filterCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Tạo đơn hàng
    const order = await db.Order.create({
      userId,
      totalPrice,
      paymentMethod,
      shippingAddress,
      status: "pending_confirmation",
    });
    const newOrder = await db.Order.findOne({
      where: {
        id: order.id,
      },
      raw: true,
    });
    const orderDetails = filterCartItems.map((item) => ({
      orderId: newOrder.id, // Sử dụng order.id trả về
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    await db.OrderDetail.bulkCreate(orderDetails);
    return { message: "Order created successfully", errCode: 0, newOrder };
  } catch (error) {
    console.error(error);
    return { message: "Failed to create order", errCode: 1 };
  }
};

const getAllOrdersService = async () => {
  try {
    const orders = await db.Order.findAll({
      include: [
        {
          model: db.User,
          as: "user",
          attributes: ["firstName", "lastName", "email"],
        },
        {
          model: db.OrderDetail,
          as: "orderDetails",
          attributes: ["quantity", "price"],
          include: [
            {
              model: db.Product,
              attributes: ["id", "name", "description", "price", "imageUrl"],
            },
          ],
        },
      ],
    });

    // Xử lý thủ công để nhóm các orderDetails lại thành một mảng cho mỗi order
    const formattedOrders = orders.map((order) => {
      const orderObj = order.toJSON(); // Chuyển về object để dễ dàng thao tác
      orderObj.orderDetails = orderObj.orderDetails || [];
      return orderObj;
    });

    return {
      errCode: 0,
      message: "get all user succeed!!",
      orders: formattedOrders,
    };
  } catch (e) {
    console.log(e);
    return { errCode: 1, message: "get all user failed!!" };
  }
};

const deleteOrderById = async (orderId) => {
  // Thực hiện logic để xóa đơn hàng theo ID
  try {
    const result = await db.Order.destroy({ where: { id: orderId } });
    if (result) {
      const newOrder = await db.Order.findOne({
        where: {
          id: orderId,
        },
        raw: true,
      });
      return {
        message: "delete order succeed!",
        errCode: 0,
        newOrder,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      message: "delete order failed!",
      errCode: 1,
    };
  }

  return result > 0; // Trả về true nếu xóa thành công
};

const updateOrderService = async (orderData) => {
  // Thực hiện logic để cập nhật đơn hàng
  const order = await db.Order.findByPk(orderData.id);
  if (order) {
    return await order.update(orderData);
  }
  return null;
};

const confirmOrderService = async (orderId, status) => {
  try {
    // Tìm đơn hàng theo orderId
    const order = await db.Order.findByPk(orderId);
    if (!order) {
      return { errCode: 2, message: "Order not found" };
    }
    if (status === "in delivery") {
      if (order.status !== "pending_confirmation") {
        return { errCode: 3, message: "Order cannot be confirmed" };
      }

      // Cập nhật trạng thái thành 'in delivery'
      order.status = "in delivery";
      await order.save();
    }
    // Kiểm tra trạng thái đơn hàng
    if (status === "delivered") {
      if (order.status !== "in delivery") {
        return { errCode: 3, message: "Order cannot be confirmed" };
      }

      // Cập nhật trạng thái thành 'in delivery'
      order.status = "delivered";
      await order.save();
    }
    return {
      errCode: 0,
      message: "Order confirmed and now in delivery",
      order,
    };
  } catch (error) {
    console.error("Error confirming order:", error);
    return { errCode: 1, message: "Internal 500 from Server" };
  }
};

const getOrdersbyUserIdService = async (userId) => {
  try {
    const orders = await db.Order.findAll({
      where: { userId },
      include: [
        {
          model: db.OrderDetail,
          as: "orderDetails",
          attributes: ["quantity", "price"],
          include: [
            {
              model: db.Product,
              attributes: ["id", "name", "description", "price", "imageUrl"],
            },
          ],
        },
      ],
    });

    return {
      errCode: 0,
      message: "get order by userId succeed!",
      data: orders,
    };
  } catch (e) {
    console.log(e);
    return {
      errCode: 1,
      message: "Internal 500 from server",
    };
  }
};

//  Cart Service
// const getCartFromService = async (userId) => {
//   try {
//     const cart = await db.Cart.findOne({
//       where: { userId },
//       include: [{ model: CartItem }],
//     });
//     if (!cart) {
//       return { errCode: 3, errMessage: "Invaliable find your cart" };
//     }

//     return cart;
//   } catch (e) {
//     return { errCode: 4, errMessage: "Something wrong from server" };
//   }
// };
module.exports = {
  handleUserLogin,
  handleUserRegister,
  getAllUsersService,
  deleteUserbyIdService,
  createNewFood,
  getAllFoods,
  deleteFoodById,
  updateFoodService,
  createNewOrder,
  updateOrderService,
  getAllOrdersService,
  deleteOrderById,
  updateUserInforService,
  confirmOrderService,
  getOrdersbyUserIdService,
  changePasswordService,
  // getCartFromService,
};
