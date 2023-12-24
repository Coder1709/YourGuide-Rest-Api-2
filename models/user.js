import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  education: {
    primaryEducation: String,
    secondaryEducation: String,
    tertiaryEducation: String,
  },
  hobby: [
    {
      type: {
        type: String,
        enum: ["indoor", "outdoor"],
      },
      value: {
        type: String,
      },
      
    },
  ],
});

const user = mongoose.model("user", userSchema);

export default user;
