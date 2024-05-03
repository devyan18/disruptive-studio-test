import { param } from "express-validator";

export const multimediaFindByIdValidations = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoID")
];
