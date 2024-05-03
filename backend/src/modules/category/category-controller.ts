import { Request, Response } from "express";
import { CategoryDestroyer } from "./repository/category-destroy";
import { FindAllCategories, FindCategoryById } from "./repository/category-finder";
import { CategoryCreator, CategoryUpdater } from "./repository/category-saver";
import { CategoryNotFound } from "./repository/category-errors";

export class CategoryController {
  constructor (
    private readonly findAllCategories: FindAllCategories,
    private readonly findCategoryById: FindCategoryById,
    private readonly createCategory: CategoryCreator,
    private readonly updateCategory: CategoryUpdater,
    private readonly deleteCategory: CategoryDestroyer
  ) {}

  async findAll (_req: Request, res: Response) {
    const categories = await this.findAllCategories.run();

    return res.status(200).json({ data: categories });
  }

  async findById (req: Request, res: Response) {
    try {
      const category = await this.findCategoryById.run(req.params.id);

      return res.status(200).json({ data: category });
    } catch (error) {
      if (error instanceof CategoryNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async create (req: Request, res: Response) {
    try {
      const category = await this.createCategory.run(req.body);

      return res.status(201).json({ data: category });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async update (req: Request, res: Response) {
    try {
      const category = await this.updateCategory.run(req.params.id, req.body);

      return res.status(200).json({ data: category });
    } catch (error) {
      if (error instanceof CategoryNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async destroy (req: Request, res: Response) {
    try {
      await this.deleteCategory.run(req.params.id);

      return res.status(204).json();
    } catch (error) {
      if (error instanceof CategoryNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
