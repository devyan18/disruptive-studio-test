import { model, Schema } from "mongoose";
import { CATEGORIES, Temathic } from "./temathic";

const TemathicSchema = new Schema<Temathic>({
  temathic: { type: String, required: true },
  creator: { type: Schema.ObjectId, required: true, ref: "User" },
  categories: [{ type: String, required: true, enum: Object.values(CATEGORIES) }]
},
{
  timestamps: true,
  versionKey: false
});

TemathicSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) { delete ret._id; }
});

export const TemathicModel = model<Temathic>("Temathic", TemathicSchema);
