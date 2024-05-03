import { ThematicMongoRepository } from "./repository/thematic-mongo-repository";
import { ThematicByIdFinder, ThematicFindAll } from "./repository/thematic-finder";
import { SaveThematic } from "./repository/thematic-saver";
import { ThematicController } from "./thematic-controller";

export const thematicRepository = new ThematicMongoRepository();

const thematicFindAll = new ThematicFindAll(thematicRepository);
export const thematicByIdFinder = new ThematicByIdFinder(thematicRepository);
const thematicCreator = new SaveThematic(thematicRepository);

export const thematicController = new ThematicController(
  thematicFindAll,
  thematicByIdFinder,
  thematicCreator
);
