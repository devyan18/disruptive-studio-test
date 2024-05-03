import { Router } from "express";
import { multimediaController } from "./dependencies";

const multimediaRouter = Router();

multimediaRouter.get("/", multimediaController.getAllMultimedia.bind(multimediaController));
multimediaRouter.get("/:id", multimediaController.getMultimediaById.bind(multimediaController));
multimediaRouter.get("/search", multimediaController.searchMultimedia.bind(multimediaController));
multimediaRouter.post("/", multimediaController.createMultimedia.bind(multimediaController));
multimediaRouter.put("/:id", multimediaController.updateMultimedia.bind(multimediaController));
multimediaRouter.delete("/:id", multimediaController.deleteMultimedia.bind(multimediaController));

export { multimediaRouter };
