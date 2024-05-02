import { Router } from "express";
import { temathicController } from "./dependencies";
import { applyValidations } from "../../common/middlewares/apply-validations";
import { temathicIdValidations } from "./validations/temathic-finder";
import { temathicCreationValidations } from "./validations/temathic-saver";

const temathicRouter = Router();

temathicRouter.get(
  "/",
  temathicController.getAllTemathics.bind(temathicController)
);

temathicRouter.get(
  "/:id",
  temathicIdValidations,
  applyValidations,
  temathicController.getTemathicById.bind(temathicController)
);

temathicRouter.post(
  "/",
  temathicCreationValidations,
  applyValidations,
  temathicController.createTemathic.bind(temathicController)
);

export { temathicRouter };
