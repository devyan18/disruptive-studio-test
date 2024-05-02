import { body } from "express-validator";
import { USER_ROLES } from "../entity/user";
import { userRepository } from "../dependencies";

const validRoles = Object.values({ ...USER_ROLES }).filter((role) => role !== USER_ROLES.ADMIN);

export const newUserValidations = [
  body("username")
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 6, max: 255 })
    .withMessage("Username must have between 6 and 255 characters")
    .custom(async (value) => {
      if (value === "admin") {
        throw new Error("Username not found");
      }

      const user = await userRepository.getByUsername({ username: value });

      if (user) {
        throw new Error("Username not found");
      }

      return true;
    }),
  body("email")
    .isEmail()
    .withMessage("Email not is valid")
    .custom(async (value) => {
      const user = await userRepository.getByEmail({ email: value });

      if (user) {
        throw new Error("Email not found");
      }

      return true;
    }).withMessage("Email not found"),
  body("password")
    .isString()
    .isLength({ min: 6, max: 255 }),
  body("role")
    .isIn(validRoles)
    .withMessage("Role not is valid, please use one of the following: Lector, Creator")
    .isString()
    .withMessage("Role must be a string")
];
