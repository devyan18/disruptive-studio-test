import { model, Schema } from "mongoose";
import { User, USER_ROLES } from "./user";
import { hashString } from "../../../common/utils/hashing";

export type UserSchemaModel = User & { _id: string };

export const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: {
    type: String,
    required: true,
    enum: Object.values(USER_ROLES)
  }
},
{
  timestamps: true,
  versionKey: false
});

UserSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) { delete ret._id; }
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hashedPassword = await hashString(this.password);
  this.password = hashedPassword;
  next();
});

export const UserModel = model<User>("User", UserSchema);
