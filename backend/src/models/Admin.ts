import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IAdmin extends Document {
  email: string;
  password: string;
}

const adminSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

adminSchema.pre<IAdmin>("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);
export default Admin;
