import { Request, Response } from "express";
import { TemathicNotFound } from "./repository/temathic-erros";
import { TemathicByIdFinder, TemathicFindAll } from "./repository/temathic-finder";
import { SaveTemathic } from "./repository/temathic-saver";

export class TemathicController {
  constructor (
    private readonly temathicFindAll: TemathicFindAll,
    private readonly temathicByIdFinder: TemathicByIdFinder,
    private readonly temathicCreator: SaveTemathic
  ) {}

  async getAllTemathics (req: Request, res: Response) {
    console.log(req.user);
    try {
      const temathics = await this.temathicFindAll.run();

      return res.status(200).json({ data: temathics });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getTemathicById (req: Request, res: Response) {
    try {
      const temathic = await this.temathicByIdFinder.run({ id: req.params.id });

      return res.status(200).json({ data: temathic });
    } catch (error) {
      if (error instanceof TemathicNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async createTemathic (req: Request, res: Response) {
    try {
      const temathic = await this.temathicCreator.run(req.body);

      return res.status(201).json({ data: temathic });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
