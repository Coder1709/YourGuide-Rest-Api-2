//import express

import express from "express";

//importing controllers
import {
  getAllUsers,
  getUserByEmail,
  getUserByPhoneNumber,
  createUser,
  updateUserPhoneNumber,
  updateUserEducation,
  updateUserHobby,
  deleteUserByEmail,
  deleteUserByPhoneNumber,
} from "../controllers/userController.js";

const router = express.Router();

// GET: /user/get
router.get("/get", getAllUsers);

// GET: /user/get?emailId=abc@gmail.com
router.get("/get", getUserByEmail);

// GET: /user/get?phoneNumber=657895233
router.get("/get", getUserByPhoneNumber);

// POST: /user/create
router.post("/create", createUser);

// POST: /user/update/phoneNumber
router.post("/update/phoneNumber", updateUserPhoneNumber);

// POST: /user/update/education
router.post("/update/education", updateUserEducation);

// POST: /user/update/hobby
router.post("/update/hobby", updateUserHobby);

// DELETE: /user/delete?emailId=abc@gmail.com
router.delete("/delete", deleteUserByEmail);

// DELETE: /user/delete?phoneNumber=456263335
router.delete("/delete", deleteUserByPhoneNumber);

router.get("/get", controller.getAllUser);

//export router

export default router;
