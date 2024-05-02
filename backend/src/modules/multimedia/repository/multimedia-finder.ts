import { MultimediaRepository } from "../multimedia-repository";

export class MultimediaFindAll {
  constructor (
    private readonly multimediaRepository: MultimediaRepository
  ) {}

  async run () {
    return this.multimediaRepository.findAll();
  }
}

export class MultimediaFindById {
  constructor (
    private readonly multimediaRepository: MultimediaRepository
  ) {}

  async run (id: string) {
    return this.multimediaRepository.findById({ id });
  }
}
