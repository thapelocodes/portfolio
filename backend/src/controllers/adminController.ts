import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Admin from "../models/Admin";

const generateAccessToken = (id: string) => {
  return jwt.sign({ _id: id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
};

export const login = async (req: Request, res: Response) => {
  const { password } = req.body;

  try {
    const admin = await Admin.findOne();

    if (admin) {
      const validPassword = await bcrypt.compare(password, admin.password);
      if (validPassword) {
        const token = generateAccessToken(admin._id as string);
        return res.status(200).json({ token });
      }
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to login: ${JSON.stringify(err)}` });
  }
};
