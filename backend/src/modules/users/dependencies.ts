import { UserController } from "./user-controller";
import { UserMongoRepository } from "./repository/user-mongo-repository";
import { UserCreator } from "./repository/user-saver";
import {
  UserByEmailFinder,
  UserByIdFinder,
  UserFindAll
} from "./repository/user-finder";

export const userRepository = new UserMongoRepository();

const userFindAll = new UserFindAll(userRepository);
const userByIdFinder = new UserByIdFinder(userRepository);
const userByEmailFinder = new UserByEmailFinder(userRepository);
const userUserCreator = new UserCreator(userRepository);

export const userController = new UserController(
  userFindAll,
  userByIdFinder,
  userByEmailFinder,
  userUserCreator
);
