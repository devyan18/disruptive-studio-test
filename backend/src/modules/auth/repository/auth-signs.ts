import { compareString } from "../../../common/utils/hashing";
import { User } from "../../users/entity/user";
import { UserNotCreated, UserNotFound } from "../../users/repository/user-errors";
import { UserRepository } from "../../users/user-repository";

export class AuthLogin {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run ({ email, password }: {email: string, password: string}) {
    const user = await this.userRepository.getByEmail({ email });

    if (!user) {
      throw new UserNotFound();
    }

    const isPasswordValid = await compareString(password, user.password);

    if (!isPasswordValid) {
      throw new UserNotFound();
    }

    return user;
  }
}

export class AuthRegister {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run (data: Partial<User>) {
    const user = await this.userRepository.save(data);

    if (!user) {
      throw new UserNotCreated();
    }

    return user;
  }
}
