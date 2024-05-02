import type { Request, Response } from "express";

// HealthController is a class that contains a method called run that sends a 200 status code as a response.
export class HealthController {
  async run (_req: Request, res: Response) {
    res.sendStatus(200);
  }
}
