import { UserRepository } from "../user-repository";
import { UserModel } from "../entity/user-model";
import { User } from "../entity/user";

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
      createdUser.role
    );
  }
}
