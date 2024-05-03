import { Router } from "express";

import { categoryController } from "./dependencies";
import { upload } from "../../settings/uploadConfig";
import passport from "passport";
import { roleGuard } from "../users/guards/user-guard";
import { Role, USER_ROLES } from "../users/entity/user";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.findAll.bind(categoryController));

categoryRouter.get(
  "/:id",
  categoryController.findById.bind(categoryController)
);

categoryRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleGuard([USER_ROLES.Admin as Role]),
  upload.single("file"),
  categoryController.create.bind(categoryController)
);

categoryRouter.patch(
  "/:id",
  categoryController.update.bind(categoryController)
);

categoryRouter.delete(
  "/:id",
  categoryController.destroy.bind(categoryController)
);

export { categoryRouter };
