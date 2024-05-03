import { model, Schema } from "mongoose";
import { Multimedia } from "./multimedia";
import { temathicByIdFinder } from "../../temathic/dependencies";

const multimediaSchema = new Schema<Multimedia>(
  {
    title: { type: String, required: true },

    temathic: { type: Schema.ObjectId, ref: "Temathic", required: true },
    author: { type: Schema.ObjectId, ref: "User", required: true },

    url: { type: String, required: false },
    image: { type: String, required: false },
    file: { type: String, required: false },
    text: { type: String, required: false }
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

multimediaSchema.pre("save", async function (next) {
  const temathic = await temathicByIdFinder.run({ id: this.temathic.id });

  if (!temathic) {
    throw new Error("Temathic not found");
  }

  if (this.isModified("url")) {
    if (!temathic.usingUrl) {
      throw new Error("Temathic does not allow url");
    }
  }

  if (this.isModified("image")) {
    if (!temathic.usingImage) {
      throw new Error("Temathic does not allow image");
    }
  }

  if (this.isModified("file")) {
    if (!temathic.usingFiles) {
      throw new Error("Temathic does not allow files");
    }
  }

  if (this.isModified("text")) {
    if (!temathic.usingText) {
      throw new Error("Temathic does not allow text");
    }
  }

  next();
});

export const MultimediaModel = model<Multimedia>(
  "Multimedia",
  multimediaSchema
);
