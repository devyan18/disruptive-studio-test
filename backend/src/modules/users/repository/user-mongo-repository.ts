import { UserRepository } from "../user-repository";
import { UserModel } from "../entity/user-model";
import { Role, USER_ROLES, User } from "../entity/user";
import { CONFIG } from "../../../settings/env-vars";
import { UserNotCreated, UserRepeated } from "./user-errors";

export class UserMongoRepository implements UserRepository {
  async findAll (): Promise<User[]> {
    try {
      return await UserModel.find();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getById ({ id }:{id: string}): Promise<User | null> {
    try {
      return await UserModel.findOne({ _id: id }) ?? null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getByEmail ({ email }:{email: string}): Promise<User | null> {
    return await UserModel.findOne({ email });
  }

  async getByUsername ({ username }:{username: string}): Promise<User | null> {
    return await UserModel.findOne({ username });
  }

  async save (user: Partial<User>): Promise<User | null> {
    const newUser = new UserModel(user);

    const createdUser = await newUser.save();

    if (!createdUser) {
      return null;
    }

    return new User(
      createdUser._id.toString(),
      createdUser.email,
      createdUser.username,
      createdUser.password,
      createdUser.role
    );
  }

  async createAdminUser (): Promise<User | null> {
    const exist = await UserModel.findOne({ role: "Admin" });

    if (exist) {
      throw new UserRepeated();
    }

    const newUser = new UserModel({
      email: CONFIG.ADMIN_EMAIL,
      username: CONFIG.ADMIN_USERNAME,
      password: CONFIG.ADMIN_PASSWORD,
      role: USER_ROLES.Admin as Role
    });

    const createdUser = await newUser.save();

    if (!createdUser) {
      throw new UserNotCreated();
    }

    return createdUser;
  }
}
