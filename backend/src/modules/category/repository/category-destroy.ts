import { CategoryRepository } from "../category-repository";

export class CategoryDestroyer {
  constructor (private readonly categoryRepository: CategoryRepository) {}

  async run (id: string): Promise<boolean> {
    return this.categoryRepository.deleteCategory(id);
  }
}
