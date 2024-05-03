import { CategoryRepository } from "../category-repository";
import { Category } from "../entity/category";

export class FindAllCategories {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async run (): Promise<Category[]> {
    return this.categoryRepository.getCategories();
  }
}

export class FindCategoryById {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async run (id: string): Promise<Category> {
    return this.categoryRepository.getCategoryById(id);
  }
}
