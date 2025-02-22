import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 1,
      maxLength: 500,
}, slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
}, },
  { timestamps: true }
);
categorySchema.plugin(uniqueValidator,"is already taken !");
export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);