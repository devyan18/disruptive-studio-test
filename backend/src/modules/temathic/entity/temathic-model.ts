import { model, Schema } from "mongoose";
import { Temathic } from "./temathic";

const TemathicSchema = new Schema<Temathic>({
  temathic: { type: String, required: true, unique: true },
  creator: { type: Schema.ObjectId, required: true, ref: "User" },
  usingImage: { type: Boolean, default: false },
  usingFiles: { type: Boolean, default: false },
  usingText: { type: Boolean, default: false },
  usingUrl: { type: Boolean, default: false }
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
