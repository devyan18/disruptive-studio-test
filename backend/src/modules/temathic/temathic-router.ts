import { Router } from "express";
import { temathicController } from "./dependencies";
import { applyValidations } from "../../common/middlewares/apply-validations";
import { temathicIdValidations } from "./validations/temathic-finder";
import { temathicCreationValidations } from "./validations/temathic-saver";
import passport from "passport";
import { roleGuard } from "../users/guards/user-guard";
import { USER_ROLES, Role } from "../users/entity/user";

const temathicRouter = Router();

temathicRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  temathicController.findAll.bind(temathicController)
);

temathicRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  temathicIdValidations,
  applyValidations,
  temathicController.findById.bind(temathicController)
);

temathicRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleGuard([USER_ROLES.Admin as Role]),
  temathicCreationValidations,
  applyValidations,
  temathicController.create.bind(temathicController)
);

export { temathicRouter };
