import { MultimediaRepository } from "../multimedia-repository";

export class MultimediaDestroy {
  constructor (
    private readonly multimediaRepository: MultimediaRepository
  ) {}

  async run (id: string) {
    return this.multimediaRepository.delete({ id });
  }
}
