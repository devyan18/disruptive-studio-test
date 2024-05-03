import { body } from "express-validator";
import { temathicRepository } from "../dependencies";

export const temathicCreationValidations = [
  body("temathic")
    .custom(async (value: string) => {
      const temathics = await temathicRepository.findAll();

      const temathic = temathics.find((e) => e.temathic === value);

      if (temathic) {
        throw new Error("Temathic already exists");
      }

      return true;
    })
    .isString().withMessage("Invalid temathic name")
];
