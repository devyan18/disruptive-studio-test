import { categoryRepository } from "../category/dependencies";
import { thematicRepository } from "../thematic/dependencies";
import { userRepository } from "../users/dependencies";
import { User } from "../users/entity/user";
import { UserNotCreated, UserRepeated } from "../users/repository/user-errors";
import { CATEGORIES_COLLECTION } from "./categories";
import { THEMATICS_COLLECTION } from "./thematics";

export async function loadSeed () {
  try {
    // create admin user
    await categorySeed();
    const user = await userRepository.createAdminUser();

    if (!user) {
      console.log("[SEED] - Admin user already exists");
    }

    await thematicSeed(user);

    console.log("[SEED] - Admin user created");
  } catch (error) {
    if (error instanceof UserRepeated) {
      console.log("[SEED] - Admin user already exists");
      return;
    }

    if (error instanceof UserNotCreated) {
      console.log("[SEED] - Admin user not created");
      return;
    }

    console.log(error);
  }
}

async function categorySeed () {
  try {
    const existCategories = await categoryRepository.getCategories();

    if (existCategories.length > 0) {
      console.log("[SEED] - Category already exists");
      return;
    }

    const categories = await categoryRepository.insertMany(CATEGORIES_COLLECTION);

    if (!categories) {
      console.log("[SEED] - Category already exists");
    }

    console.log("[SEED] - Category created");
  } catch (error) {
    console.log(error);
  }
}

async function thematicSeed (creator: User) {
  try {
    const existThematics = await thematicRepository.findAll();

    if (existThematics.length > 0) {
      console.log("[SEED] - Thematic already exists");
      return;
    }
    const [pictures, space, nature] = await categoryRepository.getCategories();

    const mappedThematics = THEMATICS_COLLECTION.map((e, i) => {
      return {
        ...e,
        thematic: e.thematic,
        creator,
        category: i < 5 ? space : i < 10 ? nature : pictures
      };
    });

    for (const thematic of mappedThematics) {
      await thematicRepository.save(thematic);
    }

    const thematics = await thematicRepository.findAll();

    if (!thematics) {
      console.log("[SEED] - Thematic already exists");
    }

    console.log("[SEED] - Thematic created");
  } catch (error) {
    console.log(error);
  }
}
