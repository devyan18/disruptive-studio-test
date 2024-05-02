import { Temathic } from "./entity/temathic";

export interface TemathicRepository {
  findAll (): Promise<Temathic[]>;
  getById ({ id }: {id: string}): Promise<Temathic | null>;
  save (temathic: Partial<Temathic>): Promise<Temathic | null>;
}
