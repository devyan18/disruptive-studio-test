import { Multimedia } from "./entity/multimedia";

export interface MultimediaRepository {
  findAll (): Promise<Multimedia[]>;
  findById ({ id } : {id : string}): Promise<Multimedia | null>;
  search (query: string): Promise<Multimedia[]>;
  create (multimedia: {
    title: string;
    thematic: string;
    author: string;
    image?: string;
    files?: string;
    text?: string;
    url?: string;
  }): Promise<Multimedia | null>;
  update (id: string, multimedia: Partial<Multimedia>): Promise<Multimedia | null>;
  delete ({ id } : {id : string}): Promise<boolean>;
}
