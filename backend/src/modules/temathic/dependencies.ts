import { TemathicByIdFinder, TemathicFindAll } from "./repository/temathic-finder";
import { TemathicMongoRepository } from "./repository/temathic-mongo-repository";
import { SaveTemathic } from "./repository/temathic-saver";
import { TemathicController } from "./temathic-controller";

export const temathicRepository = new TemathicMongoRepository();

const temathicFindAll = new TemathicFindAll(temathicRepository);
const temathicByIdFinder = new TemathicByIdFinder(temathicRepository);
const temathicCreator = new SaveTemathic(temathicRepository);

export const temathicController = new TemathicController(
  temathicFindAll,
  temathicByIdFinder,
  temathicCreator
);
