import { model, Schema } from "mongoose";
import { Multimedia } from "./multimedia";

const multimediaSchema = new Schema<Multimedia>(
  {
    title: { type: String, required: true },

    thematic: { type: Schema.ObjectId, ref: "Thematic", required: true },
    author: { type: Schema.ObjectId, ref: "User", required: true },

    url: { type: String, default: null },
    image: { type: String, default: null },
    file: { type: String, default: null },
    text: { type: String, default: null }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

multimediaSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) {
    delete ret._id;
  }
});

export const MultimediaModel = model<Multimedia>(
  "Multimedia",
  multimediaSchema
);
