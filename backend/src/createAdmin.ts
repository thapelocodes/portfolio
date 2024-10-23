import mongoose from "mongoose";
import Admin from "./models/Admin";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string, {});

const createAdmin = async () => {
  try {
    const password = process.env.ADMIN_PASSWORD as string;
    if (!password) {
      throw new Error("ADMIN_PASSWORD environment variable not set");
    }
    const admin = new Admin({ password: password });
    await admin.save();
    console.log("Admin created successfully");
  } catch (err) {
    console.error("Error creating admin:", err);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
