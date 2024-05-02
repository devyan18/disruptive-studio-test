import { model, Schema } from "mongoose";
import { User, USER_ROLES } from "./user";

export type UserSchemaModel = User & { _id: string };

export const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
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

export const UserModel = model<User>("User", UserSchema);
