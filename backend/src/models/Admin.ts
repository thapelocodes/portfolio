import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IAdmin extends Document {
  password: string;
}

const adminSchema: Schema = new Schema({
  password: { type: String, required: true },
});

adminSchema.pre<IAdmin>("save", async function (next) {
  console.log("Before hash:", this.password);
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log("After hash:", this.password);
  }
  next();
});

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);
export default Admin;
