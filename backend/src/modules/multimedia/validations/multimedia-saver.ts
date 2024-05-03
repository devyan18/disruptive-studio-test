import { body, param } from "express-validator";

export const multimediaSaverValidations = [
  body("title")
    .exists()
    .withMessage("Title is required"),
  body("thematic")
    .exists()
    .withMessage("Thematic is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoID"),
  body("url")
    .optional()
    .isURL()
    .withMessage("URL must be a valid URL"),
  body("text")
    .optional()
    .isString()
    .withMessage("Text must be a string")
];

export const multimediaUpdaterValidations = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("ID must be a valid MongoID"),
  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a string"),
  body("temathic")
    .optional()
    .isString()
    .withMessage("Thematic must be a string")
    .isMongoId()
    .withMessage("ID must be a valid MongoID"),
  body("author")
    .optional()
    .isString()
    .withMessage("Author must be a string")
    .isMongoId()
    .withMessage("ID must be a valid MongoID"),
  body("url")
    .optional()
    .isURL()
    .withMessage("URL must be a valid URL"),
  body("image")
    .optional()
    .isURL()
    .withMessage("Image must be a valid URL"),
  body("file")
    .optional()
    .isURL()
    .withMessage("File must be a valid URL"),
  body("text")
    .optional()
    .isString()
    .withMessage("Text must be a string")
];
