import { TemathicMongoRepository } from "./repository/temathic-mongo-repository";
import { TemathicByIdFinder, TemathicFindAll } from "./repository/temathic-finder";
import { SaveTemathic } from "./repository/temathic-saver";
import { TemathicController } from "./temathic-controller";

export const temathicRepository = new TemathicMongoRepository();

const temathicFindAll = new TemathicFindAll(temathicRepository);
export const temathicByIdFinder = new TemathicByIdFinder(temathicRepository);
const temathicCreator = new SaveTemathic(temathicRepository);

export const temathicController = new TemathicController(
  temathicFindAll,
  temathicByIdFinder,
  temathicCreator
);
