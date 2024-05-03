import { model, Schema } from "mongoose";
import { Thematic } from "./thematic";

const ThematicSchema = new Schema<Thematic>({
  thematic: { type: String, required: true, unique: true },

  creator: { type: Schema.ObjectId, required: true, ref: "User" },
  category: { type: Schema.ObjectId, required: true, ref: "Category" },

  usingImage: { type: Boolean, default: false },
  usingFiles: { type: Boolean, default: false },
  usingText: { type: Boolean, default: false },
  usingUrl: { type: Boolean, default: false }
},
{
  timestamps: true,
  versionKey: false
});

ThematicSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) { delete ret._id; }
});

export const ThematicModel = model<Thematic>("Thematic", ThematicSchema);
