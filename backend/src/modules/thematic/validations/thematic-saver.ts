import { body } from "express-validator";
import { thematicRepository } from "../dependencies";

export const temathicCreationValidations = [
  body("temathic")
    .custom(async (value: string) => {
      const temathics = await thematicRepository.findAll();

      const temathic = temathics.find((e) => e.thematic === value);

      if (temathic) {
        throw new Error("Thematic already exists");
      }

      return true;
    })
    .isString().withMessage("Invalid temathic name"),
  body("category")
    .isMongoId().withMessage("Invalid category ID")
];
