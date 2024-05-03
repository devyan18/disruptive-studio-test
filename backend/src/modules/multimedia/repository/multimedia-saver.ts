import { Multimedia } from "../entity/multimedia";
import { MultimediaRepository } from "../multimedia-repository";

export class MultimediaCreator {
  constructor (
    private readonly multimediaRepository: MultimediaRepository
  ) {}

  async run (multimedia:{
    title: string;
    thematic: string;
    author: string;
    image?: string;
    files?: string;
    text?: string;
    url?: string;
  }) {
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
