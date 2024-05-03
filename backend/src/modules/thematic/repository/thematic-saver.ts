import { Thematic } from "../entity/thematic";
import { ThematicRepository } from "../thematic-repository";

export class SaveThematic {
  constructor (private temathicRepository: ThematicRepository) {}

  async run (temathic: Partial<Thematic>) {
    return this.temathicRepository.save(temathic);
  }
}
