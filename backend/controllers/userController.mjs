import User from "../models/User.mjs";

//create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({ success: true, message: "Successfuly created", data: savedUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to create, try again" });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Successfuly updated", data: updatedUser });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to update, try again" });
  }
};

//delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to delete, try again" });
  }
};

//getSingle User (affichage)
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found", error: err.message });
  }
};

//getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, message: "Successful", data: users });
  } catch (err) {
    res.status(404).json({ success: false, message: "not found" });
  }
};

export default {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
};
