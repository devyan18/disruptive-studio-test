import { TemathicRepository } from "../temathic-repository";
import { TemathicNotFound } from "./temathic-erros";

export class TemathicFindAll {
  constructor (private temathicRepository: TemathicRepository) {}

  async run () {
    return this.temathicRepository.findAll();
  }
}

export class TemathicByIdFinder {
  constructor (private temathicRepository: TemathicRepository) {}

  async run ({ id }: {id: string}) {
    const temathic = await this.temathicRepository.getById({ id });

    if (!temathic) {
      throw new TemathicNotFound();
    }

    return temathic;
  }
}
