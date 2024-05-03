import { Router } from "express";
import { multimediaController } from "./dependencies";
import { multimediaSaverValidations, multimediaUpdaterValidations } from "./validations/multimedia-saver";
import { multimediaFindByIdValidations } from "./validations/multimedia-finder";
import { applyValidations } from "../../common/middlewares/apply-validations";

const multimediaRouter = Router();

multimediaRouter.get(
  "/",
  multimediaController.getAllMultimedia.bind(multimediaController)
);
multimediaRouter.get(
  "/:id",
  multimediaFindByIdValidations,
  applyValidations,
  multimediaController.getMultimediaById.bind(multimediaController)
);
multimediaRouter.post(
  "/",
  multimediaSaverValidations,
  applyValidations,
  multimediaController.createMultimedia.bind(multimediaController)
);
multimediaRouter.patch(
  "/:id",
  multimediaUpdaterValidations,
  applyValidations,
  multimediaController.updateMultimedia.bind(multimediaController)
);
multimediaRouter.delete(
  "/:id",
  multimediaFindByIdValidations,
  applyValidations,
  multimediaController.deleteMultimedia.bind(multimediaController)
);

export { multimediaRouter };
