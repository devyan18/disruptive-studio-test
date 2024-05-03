import { CategoryMongoRepository } from "./repository/category-mongo-repository";
import { FindAllCategories, FindCategoryById } from "./repository/category-finder";
import { CategoryCreator, CategoryUpdater } from "./repository/category-saver";
import { CategoryDestroyer } from "./repository/category-destroy";
import { CategoryController } from "./category-controller";

export const categoryRepository = new CategoryMongoRepository();

const categoryFindAll = new FindAllCategories(categoryRepository);
export const categoryByIdFinder = new FindCategoryById(categoryRepository);
const categoryCreator = new CategoryCreator(categoryRepository);
const categoryUpdater = new CategoryUpdater(categoryRepository);
const categoryDestroyer = new CategoryDestroyer(categoryRepository);

export const categoryController = new CategoryController(
  categoryFindAll,
  categoryByIdFinder,
  categoryCreator,
  categoryUpdater,
  categoryDestroyer
);
