import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/home", homeController.getHomePage);
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  // user
  router.post("/api/login", userController.handleLogin);
  router.post("/api/register", userController.handleRegister);
  router.put("/api/update-user", userController.updateUserInfor);

  // food
  router.post("/api/create-food", userController.createFood);
  router.get("/api/get-food", userController.getFoods);
  router.delete("/api/delete-food", userController.deleteFood);
  router.put("/api/update-food", userController.updateFood);
  // order

  router.post("/api/create-order", userController.createOrder);
  router.get("/api/get-order", userController.getAllOrders);
  router.delete("/api/delete-order", userController.deleteOrder);
  // router.put("/api/update-order", userController.updateOrder);

  // cart
  // router.get("/api/cart/:userId", userController.getCartByUserId);
  // router.post("/api/cart", userController.saveCart);

  return app.use("/", router);
};

module.exports = initWebRoutes;
