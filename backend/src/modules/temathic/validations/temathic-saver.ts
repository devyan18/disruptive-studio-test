import { body } from "express-validator";

export const temathicCreationValidations = [
  body("temathic").isString().withMessage("Invalid temathic name")
];
