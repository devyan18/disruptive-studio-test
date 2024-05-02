import { User } from "../entity/user";
import { UserRepository } from "../user-repository";
import { UserNotCreated } from "./user-errors";

export class UserCreator {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run (user: Partial<User>) {
    const newUser = await this.userRepository.save(user);

    if (!newUser) {
      throw new UserNotCreated();
    }

    return newUser;
  }
}
