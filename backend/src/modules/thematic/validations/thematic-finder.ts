import { param } from "express-validator";

export const temathicIdValidations = [
  param("id").isMongoId().withMessage("Invalid temathic ID")
];
