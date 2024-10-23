import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IAdmin extends Document {
  password: string;
}

const adminSchema: Schema = new Schema({
  password: { type: String, required: true },
});

adminSchema.pre<IAdmin>("save", async function (next) {
  const admin = this;
  if (!admin.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(admin.password, salt);
  admin.password = hash;
  next();
});

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);
export default Admin;
