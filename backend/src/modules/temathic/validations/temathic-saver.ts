import { body } from "express-validator";
import { CATEGORIES } from "../entity/temathic";

export const temathicCreationValidations = [
  body("temathic").isString().withMessage("Invalid temathic name"),
  body("categories")
    .isArray()
    .withMessage("Invalid categories values")
    .isIn(Object.values(CATEGORIES))
    .withMessage("Invalid categories values")
];
