import { CategoryRepository } from "../category-repository";
import { Category } from "../entity/category";

export class CategoryCreator {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async run (category: Category): Promise<Category> {
    return this.categoryRepository.createCategory(category);
  }
}

export class CategoryUpdater {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async run (id: string, category: Category): Promise<Category> {
    return this.categoryRepository.updateCategory(id, category);
  }
}
