import { Category } from "../category/entity/category";

const getPath = (fileName: string) => "seed-categories-collection/" + fileName;

export const CATEGORIES_COLLECTION: Partial<Category>[] = [
  {
    name: "Pictures",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus praesentium sit qui ex obcaecati labore harum explicabo quaerat quia incidunt, non laborum omnis nihil, dolorum",
    coverImage: getPath("cover-pictures.jpg")
  },
  {
    name: "Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus praesentium sit qui ex obcaecati labore harum explicabo quaerat quia incidunt, non laborum omnis nihil, dolorum, minima cupiditate suscipit libero. Sint corporis illum odio, maxime fugiat reiciendis doloribus ullam aperiam debitis veritatis in quaerat autem iusto hic dicta saepe delectus?",
    coverImage: getPath("cover-space.jpg")
  },
  {
    name: "Nature",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus praesentium sit qui ex obcaecati labore harum explicabo quaerat quia incidunt, non laborum omnis nihil, dolorum, minima cupiditate suscipit libero. Sint corporis illum odio, maxime fugiat reiciendis doloribus ullam aperiam debitis veritatis in quaerat autem iusto hic dicta saepe delectus?",
    coverImage: getPath("cover-nature.jpg")
  }
];
