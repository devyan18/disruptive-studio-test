import { Request, Response } from "express";
import { ThematicNotFound } from "./repository/thematic-errors";
import { ThematicByIdFinder, ThematicFindAll } from "./repository/thematic-finder";
import { SaveThematic } from "./repository/thematic-saver";
import { User } from "../users/entity/user";

export class ThematicController {
  constructor (
    private readonly thematicFindAll: ThematicFindAll,
    private readonly thematicByIdFinder: ThematicByIdFinder,
    private readonly thematicCreator: SaveThematic
  ) {}

  async findAll (_req: Request, res: Response) {
    try {
      const thematics = await this.thematicFindAll.run();

      return res.status(200).json({ data: thematics });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async findById (req: Request, res: Response) {
    try {
      const thematic = await this.thematicByIdFinder.run({ id: req.params.id });

      return res.status(200).json({ data: thematic });
    } catch (error) {
      if (error instanceof ThematicNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async create (req: Request, res: Response) {
    try {
      const user = req.user as User;

      const thematic = await this.thematicCreator.run({
        ...req.body,
        creator: user.id
      });

      return res.status(201).json({ data: thematic });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
