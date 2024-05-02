import { UserNotFound } from "./user-errors";
import { UserRepository } from "../user-repository";

export class UserFindAll {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run () {
    return await this.userRepository.findAll();
  }
}

export class UserByIdFinder {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run ({ id }: {id: string}) {
    const user = await this.userRepository.getById({ id });

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

export class UserByEmailFinder {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run ({ email }:{email: string}) {
    const user = await this.userRepository.getByEmail({ email });

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

export class UserByUsernameFinder {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run ({ username }:{username: string}) {
    const user = await this.userRepository.getByUsername({ username });

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}
