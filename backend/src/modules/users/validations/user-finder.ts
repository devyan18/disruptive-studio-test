import { param, query } from "express-validator";

export const userByIdValidations = [
  param("id").isMongoId().withMessage("Invalid id")
];

export const userByEmailValidations = [
  query("email").isEmail().withMessage("Invalid email")
];
