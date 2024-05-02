import { model, Schema } from "mongoose";
import { Multimedia } from "./multimedia";

const multimediaSchema = new Schema<Multimedia>({

  title: { type: String, required: true },
  type: { type: String, required: true },
  fileRef: { type: String, required: true },
  temathic: { type: Schema.ObjectId, ref: "Temathic", required: true },
  author: { type: Schema.ObjectId, ref: "User", required: true }

}, {
  timestamps: true,
  versionKey: false
});

multimediaSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) { delete ret._id; }
});

export const MultimediaModel = model<Multimedia>("Multimedia", multimediaSchema);
