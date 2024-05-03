import { Router } from "express";
import { thematicController } from "./dependencies";
import { applyValidations } from "../../common/middlewares/apply-validations";
import { temathicIdValidations } from "./validations/thematic-finder";
import { temathicCreationValidations } from "./validations/thematic-saver";
import passport from "passport";
import { roleGuard } from "../users/guards/user-guard";
import { USER_ROLES, Role } from "../users/entity/user";

const thematicRouter = Router();

thematicRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  thematicController.findAll.bind(thematicController)
);

thematicRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  temathicIdValidations,
  applyValidations,
  thematicController.findById.bind(thematicController)
);

thematicRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleGuard([USER_ROLES.Admin as Role]),
  temathicCreationValidations,
  applyValidations,
  thematicController.create.bind(thematicController)
);

export { thematicRouter };
