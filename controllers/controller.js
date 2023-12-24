import user from "../models/user.js";

//Api to get all the student list

const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    console.log("Error Fetching USer: ");
    res.status(500).json({ message: "Server Error" });
  }
};

//Api to get user by email

const getUserByEmail = async (req, res) => {
  try {
    const { emailId } = req.query;

    // Validation for emailId (consider using express-validator for more robust validation)
    if (!emailId || typeof emailId !== "string" || !emailId.includes("@")) {
      return res.status(400).json({ message: "Invalid emailId" });
    }

    const user = await user.findOne({ emailId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    console.error("Error Fetching User by Email:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET: /user/get?phoneNumber=657895233
const getUserByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.query;
  try {
    // Validate phoneNumber
    if (!phoneNumber || typeof phoneNumber !== "string") {
      return res.status(400).json({ message: "Missing mandatory parameters" });
    }

    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    console.error("Error fetching user by phoneNumber:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// POST: /user/create
const createUser = async (req, res) => {
  const userData = req.body;
  try {
    // Validate user data
    // Add additional validation checks based on your requirements

    const existingUser = await User.findOne({
      $or: [
        { emailId: userData.emailId },
        { phoneNumber: userData.phoneNumber },
      ],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({
          message: "User with the same emailId or phoneNumber already exists",
        });
    }

    const user = new User(userData);
    await user.save();

    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// POST: /user/update/phoneNumber
const updateUserPhoneNumber = async (req, res) => {
  const { emailId, phoneNumber } = req.body;
  try {
    // Validate emailId and phoneNumber
    // Add additional validation checks based on your requirements

    const user = await User.findOneAndUpdate(
      { emailId },
      { $set: { phoneNumber } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    console.error("Error updating user phoneNumber:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// POST: /user/update/education
const updateUserEducation = async (req, res) => {
  const { emailId, secondaryEducation } = req.body;
  try {
    // Validate emailId and secondaryEducation
    // Add additional validation checks based on your requirements

    const user = await User.findOneAndUpdate(
      { emailId },
      { $set: { "education.secondaryEducation": secondaryEducation } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    console.error("Error updating user education:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// POST: /user/update/hobby
const updateUserHobby = async (req, res) => {
  const { emailId, hobby } = req.body;
  try {
    // Validate emailId and hobby
    // Add additional validation checks based on your requirements

    const user = await User.findOneAndUpdate(
      { emailId },
      { $set: { hobby } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    console.error("Error updating user hobby:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE: /user/delete?emailId=abc@gmail.com
const deleteUserByEmail = async (req, res) => {
  const { emailId } = req.query;
  try {
    // Validate emailId
    if (!emailId || typeof emailId !== "string") {
      return res.status(400).json({ message: "Missing mandatory parameters" });
    }

    const user = await User.findOneAndDelete({ emailId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting user by email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE: /user/delete?phoneNumber=456263335
const deleteUserByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.query;
  try {
    // Validate phoneNumber
    if (!phoneNumber || typeof phoneNumber !== "string") {
      return res.status(400).json({ message: "Missing mandatory parameters" });
    }

    const user = await User.findOneAndDelete({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting user by phoneNumber:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//export all the functions
export {
  getAllUsers,
  getUserByEmail,
  getUserByPhoneNumber,
  createUser,
  updateUserPhoneNumber,
  updateUserEducation,
  updateUserHobby,
  deleteUserByEmail,
  deleteUserByPhoneNumber,
};
