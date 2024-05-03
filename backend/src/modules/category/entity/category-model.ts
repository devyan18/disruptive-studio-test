import { model, Schema } from "mongoose";
import { Category } from "./category";

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true }
}, {
  timestamps: true,
  versionKey: false
});

categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) {
    delete ret._id;
  }
});

export const CategoryModel = model<Category>("Category", categorySchema);
