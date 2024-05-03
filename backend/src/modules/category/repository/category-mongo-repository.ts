import { CategoryRepository } from "../category-repository";
import { Category } from "../entity/category";
import { CategoryModel } from "../entity/category-model";
import { CategoryNotFound } from "./category-errors";

export class CategoryMongoRepository implements CategoryRepository {
  async getCategories (): Promise<Category[]> {
    try {
      return await CategoryModel.find();
    } catch (error) {
      throw new Error("Error getting categories");
    }
  }

  async getCategoryById (id: string): Promise<Category> {
    const category = await CategoryModel.findOne({ _id: id });

    if (!category) {
      throw new CategoryNotFound();
    }

    return category;
  }

  async createCategory (category: Partial<Category>): Promise<Category> {
    const instance = new CategoryModel(category);
    const newCategory = await instance.save();

    if (!newCategory) {
      throw new Error("Error creating category");
    }

    return newCategory;
  }

  async updateCategory (id: string, category: Partial<Category>): Promise<Category> {
    const exist = await this.getCategoryById(id);

    if (!exist) {
      throw new CategoryNotFound();
    }

    const updated = await CategoryModel.findOneAndUpdate({ _id: id }, {
      $set: category
    }, { new: true });

    if (!updated) {
      throw new Error("Error updating category");
    }

    return updated;
  }

  async deleteCategory (id: string): Promise<boolean> {
    const exist = await this.getCategoryById(id);

    if (!exist) {
      throw new CategoryNotFound();
    }

    const deleted = await CategoryModel.deleteOne({ _id: id });

    if (!deleted) {
      throw new Error("Error deleting category");
    }

    return true;
  }
}
