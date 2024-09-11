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
          attributes: ["email", "roleId", "password", "firstName", "lastName"],
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
  console.log(email, password);
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

const createNewOrder = async (orderData) => {
  try {
    const newOrder = await db.Order.create({
      user_id: orderData.user_id,
      status: orderData.status,
      shipping_address: orderData.shipping_address,
      total: orderData.total,
      orderDate: orderData.orderDate,
    });
    return newOrder;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllOrders = async () => {
  // Thực hiện logic để lấy tất cả đơn hàng từ cơ sở dữ liệu
  return await db.Order.findAll();
};

const deleteOrderById = async (orderId) => {
  // Thực hiện logic để xóa đơn hàng theo ID
  const result = await db.Order.destroy({ where: { id: orderId } });
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
module.exports = {
  handleUserLogin,
  handleUserRegister,
  createNewFood,
  getAllFoods,
  deleteFoodById,
  updateFoodService,
  createNewOrder,
  updateOrderService,
  getAllOrders,
  deleteOrderById,
};
