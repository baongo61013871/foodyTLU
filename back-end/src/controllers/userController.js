import userService from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing email or password!",
    });
  }
  // check email exist
  // compare password
  // return userInfor
  // access_token: JWT json webtoken
  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleRegister = async (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(400).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }

  try {
    let data = await userService.handleUserRegister(email, password);
    if (data) {
      return res.status(200).json(data);
    }
  } catch (e) {
    return res.status(500).json({
      errCode: 2,
      message: "Error from server",
    });
  }
};

let updateUserInfor = async (req, res) => {
  try {
    let data = req.body;
    if (!data.id) {
      return res
        .status(400)
        .json({ message: "User ID is required for updating.", errCode: 1 });
    }
    let user = await userService.updateUserInforService(data);

    return res.json({ errCode: 0, message: "Ok", data: user });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error updating", error: e.message });
  }
};
const createFood = async (req, res) => {
  try {
    let foodItem = req.body;
    console.log(foodItem);
    const food = await userService.createNewFood(foodItem);
    return res
      .status(201)
      .json({ message: "Food created successfully", data: food });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating food", error: error.message });
  }
};

const getFoods = async (req, res) => {
  try {
    const foods = await userService.getAllFoods();
    return res.status(200).json({ data: foods });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving foods", error: error.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const { id } = req.body;
    let check = await userService.deleteFoodById(id);
    if (check) {
      return res.status(200).json({ message: "Food deleted successfully" });
    } else {
      return res.status(301).json({ message: "Error Deleting" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting food", error: error.message });
  }
};

const updateFood = async (req, res) => {
  try {
    // Lấy thông tin đồ ăn từ request body
    const foodData = req.body; // { id: 1, name: 'Pizza', price: 100, ... }

    // Kiểm tra xem ID có được cung cấp không
    if (!foodData.id) {
      return res
        .status(400)
        .json({ message: "Food ID is required for updating." });
    }

    // Danh sách các trường bắt buộc
    const requiredFields = ["id", "name", "price"]; // Thêm các trường khác nếu cần

    // Kiểm tra xem các trường bắt buộc có bị thiếu không
    const missingFields = requiredFields.filter((field) => !foodData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Gọi hàm service để cập nhật thông tin đồ ăn
    const updatedFood = await userService.updateFoodService(foodData);

    // Kiểm tra xem món ăn có tồn tại và được cập nhật không
    if (!updatedFood) {
      return res
        .status(404)
        .json({ message: "Food not found or not updated." });
    }

    // Trả về kết quả thành công với thông tin món ăn đã được cập nhật
    return res
      .status(200)
      .json({ message: "Food updated successfully.", data: updatedFood });
  } catch (error) {
    // Xử lý lỗi và trả về lỗi
    return res
      .status(500)
      .json({ message: `Error updating food: ${error.message}` });
  }
};
// Order

const createOrder = async (req, res) => {
  const { userId, filterCartItems, paymentMethod, shippingAddress } = req.body;

  const data = await userService.createNewOrder(
    userId,
    filterCartItems,
    paymentMethod,
    shippingAddress
  );
  if (data.errCode === 0) {
    res.status(201).json({
      message: data.message,
      order: data,
      errCode: data.errCode,
    });
  } else {
    res.status(500).json({
      message: data.message,
      errCode: data.errCode,
    });
  }
};

const getAllOrders = async (req, res) => {
  const data = await userService.getAllOrdersService();

  console.log(data);
  if (data.errCode === 0) {
    res.status(201).json({
      message: data.message,
      order: data.orders,
      errCode: data.errCode,
    });
  } else {
    res.status(500).json({
      message: data.message,
      errCode: data.errCode,
    });
  }
};

// API Xóa đơn hàng
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.body; // Lấy ID đơn hàng từ request body
    const check = await userService.deleteOrderById(id); // Gọi hàm dịch vụ để xóa đơn hàng
    if (check) {
      return res.status(200).json({ message: "Order deleted successfully" }); // Trả về phản hồi thành công nếu xóa thành công
    } else {
      return res.status(404).json({ message: "Error deleting order" }); // Trả về phản hồi lỗi nếu xóa thất bại
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting order", error: error.message }); // Trả về phản hồi lỗi nếu có
  }
};

// API Cập nhật đơn hàng
const updateOrder = async (req, res) => {
  try {
    const orderData = req.body; // Lấy dữ liệu đơn hàng từ request body

    if (!orderData.id) {
      return res
        .status(400)
        .json({ message: "Order ID is required for updating." }); // Kiểm tra nếu không có ID đơn hàng
    }

    const requiredFields = ["id", "customerName", "totalPrice"]; // Các trường cần thiết

    const missingFields = requiredFields.filter((field) => !orderData[field]); // Kiểm tra trường bị thiếu

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}`, // Trả về thông báo lỗi nếu thiếu trường
      });
    }

    const updatedOrder = await userService.updateOrderService(orderData); // Gọi hàm dịch vụ để cập nhật đơn hàng

    if (!updatedOrder) {
      return res
        .status(404)
        .json({ message: "Order not found or not updated." }); // Trả về thông báo lỗi nếu đơn hàng không tồn tại
    }

    return res
      .status(200)
      .json({ message: "Order updated successfully.", data: updatedOrder }); // Trả về phản hồi thành công với thông tin đơn hàng đã được cập nhật
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error updating order: ${error.message}` }); // Trả về phản hồi lỗi nếu có
  }
};

// Cart

// const getCart = async (req, res) => {
//   const userId = req.query.userId;
//   try {
//     const cart = await getCartFromService(userId);
//     return res.status(200).json({ data: cart, errCode: 0, errMessage: "ok" });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ errCode: 1, errMessage: "Error retriving cart", error });
//   }
// };

// const addtoCart = async (req,res) => {
//   const {}
// }
module.exports = {
  handleLogin,
  handleRegister,
  updateUserInfor,
  createFood,
  getFoods,
  deleteFood,
  updateFood,
  updateOrder,
  getAllOrders,
  deleteOrder,
  createOrder,
  // getCart,
};
