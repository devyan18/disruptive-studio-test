import { Category } from "./entity/category";

export interface CategoryRepository {
  getCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category>;
  createCategory(category: Category): Promise<Category>;
  updateCategory(id: string, category: Category): Promise<Category>;
  deleteCategory(id: string): Promise<boolean>;
}
