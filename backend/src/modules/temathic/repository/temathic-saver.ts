import { Temathic } from "../entity/temathic";
import { TemathicRepository } from "../temathic-repository";

export class SaveTemathic {
  constructor (private temathicRepository: TemathicRepository) {}

  async run (temathic: Partial<Temathic>) {
    return this.temathicRepository.save(temathic);
  }
}
