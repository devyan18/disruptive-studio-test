import { User } from "../entity/user";
import { UserSchemaModel } from "../entity/user-model";

export class UserAdapter {
  static parseUserToResponse (user: User) {
    if (!(user instanceof User)) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role
    };
  }

  static parseSchemaToResponse (schema: UserSchemaModel) {
    return {
      id: schema._id,
      email: schema.email,
      username: schema.username,
      role: schema.role
    };
  }
}
