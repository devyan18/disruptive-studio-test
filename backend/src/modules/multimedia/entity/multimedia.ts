import { Thematic } from "../../thematic/entity/thematic";
import { User } from "../../users/entity/user";

export class Multimedia {
  constructor (
    public id: string,
    public title: string,

    public thematic: Thematic,
    public author: User,

    public url?: string,
    public image?: string,
    public file?: string,
    public text?: string
  ) {}
}
