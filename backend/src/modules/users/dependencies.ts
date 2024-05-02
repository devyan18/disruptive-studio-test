import { UserController } from "./user-controller";
import { UserMongoRepository } from "./repository/user-mongo-repository";
import { UserCreator } from "./repository/user-saver";
import {
  UserByEmailFinder,
  UserByIdFinder,
  UserByUsernameFinder,
  UserFindAll
} from "./repository/user-finder";

const userMongoRepository = new UserMongoRepository();

const userFindAll = new UserFindAll(userMongoRepository);
const userByIdFinder = new UserByIdFinder(userMongoRepository);
const userByEmailFinder = new UserByEmailFinder(userMongoRepository);
const userByUsernameFinder = new UserByUsernameFinder(userMongoRepository);
const userUserCreator = new UserCreator(userMongoRepository);

export const userController = new UserController(
  userFindAll,
  userByIdFinder,
  userByEmailFinder,
  userByUsernameFinder,
  userUserCreator
);
