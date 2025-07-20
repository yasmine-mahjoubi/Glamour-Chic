import express from "express";
import {
  createUser,
  deleteUser,
  updateUser,
  getSingleUser,
  getAllUser,
} from "../controllers/userController.mjs";

const router = express.Router();

//create new User
router.post("/", createUser);

//delete User
router.delete("/:id", deleteUser);

//update User
router.put("/:id", updateUser);

//get Single User
router.get("/:id", getSingleUser);

//get All User
router.get("/", getAllUser);

export default router;
