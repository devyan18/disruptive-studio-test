import { Multimedia } from "../entity/multimedia";
import { MultimediaRepository } from "../multimedia-repository";

export class MultimediaCreate {
  constructor (
    private readonly multimediaRepository: MultimediaRepository
  ) {}

  async run (multimedia: Partial<Multimedia>) {
    return this.multimediaRepository.create(multimedia);
  }
}

export class MultimediaUpdate {
  constructor (
    private readonly multimediaRepository: MultimediaRepository
  ) {}

  async run (id: string, multimedia: Partial<Multimedia>) {
    return this.multimediaRepository.update(id, multimedia);
  }
}
