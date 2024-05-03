import { MultimediaController } from "./multimedia-controller";
import { MultimediaMongoRepository } from "./repository/multimedia-mongo-repository";
import { MultimediaCreator, MultimediaUpdate } from "./repository/multimedia-saver";
import {
  MultimediaFindAll,
  MultimediaFindById,
  MultimediaSearch
} from "./repository/multimedia-finder";
import { MultimediaDestroy } from "./repository/multimedia-destroy";

export const multimediaRepository = new MultimediaMongoRepository();

const multimediaFindAll = new MultimediaFindAll(multimediaRepository);
const multimediaFindById = new MultimediaFindById(multimediaRepository);
const multimediaSearch = new MultimediaSearch(multimediaRepository);
const multimediaCreator = new MultimediaCreator(multimediaRepository);
const multimediaUpdate = new MultimediaUpdate(multimediaRepository);
const multimediaDestroy = new MultimediaDestroy(multimediaRepository);

export const multimediaController = new MultimediaController(
  multimediaFindAll,
  multimediaFindById,
  multimediaSearch,
  multimediaCreator,
  multimediaUpdate,
  multimediaDestroy
);
