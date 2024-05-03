import { userRepository } from "../users/dependencies";
import { UserNotCreated, UserRepeated } from "../users/repository/user-errors";

export async function loadSeed () {
  try {
    // create admin user
    const user = await userRepository.createAdminUser();

    if (!user) {
      console.log("[SEED] - Admin user already exists");
    }

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
