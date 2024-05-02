import { HealthController } from "./health-controller";
import { Router } from "express";

const healthRouter = Router();
const healthController = new HealthController();

healthRouter.get("/", healthController.run.bind(healthController));

export { healthRouter };
