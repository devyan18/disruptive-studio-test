import { Multimedia } from "./entity/multimedia";

export interface MultimediaRepository {
  findAll (): Promise<Multimedia[]>;
  findById ({ id } : {id : string}): Promise<Multimedia | null>;
  search (query: string): Promise<Multimedia[]>;
  create (multimedia: Partial<Multimedia>): Promise<Multimedia | null>;
  update (id: string, multimedia: Partial<Multimedia>): Promise<Multimedia | null>;
  delete ({ id } : {id : string}): Promise<boolean>;
}
