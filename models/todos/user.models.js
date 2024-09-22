import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      requires: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      requires: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);