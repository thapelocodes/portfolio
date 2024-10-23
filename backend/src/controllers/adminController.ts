import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Admin from "../models/Admin";

export const login = async (req: Request, res: Response) => {
  const { password } = req.body;

  try {
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { _id: admin._id },
      process.env.JWT_SECRET as string
    );
    res.status(200).json({ token });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to login: ${JSON.stringify(err)}` });
  }
};
