import { Thematic } from "./entity/thematic";

export interface ThematicRepository {
  findAll (): Promise<Thematic[]>;
  getById ({ id }: {id: string}): Promise<Thematic | null>;
  save (thematic: Partial<Thematic>): Promise<Thematic | null>;
  update (thematic: Partial<Thematic>): Promise<Thematic | null>;
  delete ({ id }: {id: string}): Promise<boolean>;
  insertMany (thematics: Partial<Thematic>[]): Promise<boolean>;
}
