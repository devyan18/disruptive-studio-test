import { Request, Response } from "express";
import {
  MultimediaFindAll,
  MultimediaFindById,
  MultimediaSearch
} from "./repository/multimedia-finder";
import { MultimediaCreator, MultimediaUpdate } from "./repository/multimedia-saver";
import { MultimediaDestroy } from "./repository/multimedia-destroy";
import { MultimediaNotFound } from "./repository/multimedia-errors";

export class MultimediaController {
  constructor (
    private readonly multimediaFindAll: MultimediaFindAll,
    private readonly multimediaFindById: MultimediaFindById,
    private readonly multimediaSearch: MultimediaSearch,
    private readonly multimediaCreator: MultimediaCreator,
    private readonly multimediaUpdate: MultimediaUpdate,
    private readonly multimediaDestroy: MultimediaDestroy
  ) {}

  async getAllMultimedia (_req: Request, res: Response) {
    try {
      const multimedia = await this.multimediaFindAll.run();

      return res.status(200).json({ data: multimedia });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getMultimediaById (req: Request, res: Response) {
    try {
      const multimedia = await this.multimediaFindById.run(req.params.id);

      return res.status(200).json({ data: multimedia });
    } catch (error) {
      if (error instanceof MultimediaNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async searchMultimedia (req: Request, res: Response) {
    try {
      const multimedia = await this.multimediaSearch.run(req.query.toString());

      return res.status(200).json({ data: multimedia });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async createMultimedia (req: Request, res: Response) {
    try {
      const multimedia = await this.multimediaCreator.run(req.body);

      return res.status(201).json({ data: multimedia });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateMultimedia (req: Request, res: Response) {
    try {
      const multimedia = await this.multimediaUpdate.run(req.params.id, req.body);

      return res.status(200).json({ data: multimedia });
    } catch (error) {
      if (error instanceof MultimediaNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteMultimedia (req: Request, res: Response) {
    try {
      await this.multimediaDestroy.run(req.params.id);

      return res.status(204).json();
    } catch (error) {
      if (error instanceof MultimediaNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
