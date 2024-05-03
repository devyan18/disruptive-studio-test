import { Router } from "express";
import { multimediaController } from "./dependencies";
import { multimediaSaverValidations, multimediaUpdaterValidations } from "./validations/multimedia-saver";
import { multimediaFindByIdValidations } from "./validations/multimedia-finder";
import { applyValidations } from "../../common/middlewares/apply-validations";
import { roleGuard } from "../users/guards/user-guard";
import { Role, USER_ROLES } from "../users/entity/user";
import passport from "passport";
import { clearJsonData } from "../../common/middlewares/json";

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
  passport.authenticate("jwt", { session: false }),
  clearJsonData,
  multimediaSaverValidations,
  applyValidations,
  roleGuard([
    USER_ROLES.Admin as Role,
    USER_ROLES.Creator as Role
  ]),
  multimediaController.createMultimedia.bind(multimediaController)
);

multimediaRouter.patch(
  "/:id",
  multimediaUpdaterValidations,
  applyValidations,
  roleGuard([
    USER_ROLES.Admin as Role,
    USER_ROLES.Creator as Role
  ]),
  multimediaController.updateMultimedia.bind(multimediaController)
);

multimediaRouter.delete(
  "/:id",
  multimediaFindByIdValidations,
  applyValidations,
  roleGuard([
    USER_ROLES.Admin as Role
  ]),
  multimediaController.deleteMultimedia.bind(multimediaController)
);

export { multimediaRouter };
