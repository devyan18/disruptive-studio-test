import { Router } from "express";

import { categoryController } from "./dependencies";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.findAll.bind(categoryController));

categoryRouter.get("/:id", categoryController.findById.bind(categoryController));

categoryRouter.post("/", categoryController.create.bind(categoryController));

categoryRouter.patch("/:id", categoryController.update.bind(categoryController));

categoryRouter.delete("/:id", categoryController.destroy.bind(categoryController));

export { categoryRouter };
