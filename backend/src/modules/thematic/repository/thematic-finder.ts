import { ThematicNotFound } from "./thematic-errors";
import { ThematicRepository } from "../thematic-repository";

export class ThematicFindAll {
  constructor (private temathicRepository: ThematicRepository) {}

  async run () {
    return this.temathicRepository.findAll();
  }
}

export class ThematicByIdFinder {
  constructor (private temathicRepository: ThematicRepository) {}

  async run ({ id }: {id: string}) {
    const temathic = await this.temathicRepository.getById({ id });

    if (!temathic) {
      throw new ThematicNotFound();
    }

    return temathic;
  }
}
