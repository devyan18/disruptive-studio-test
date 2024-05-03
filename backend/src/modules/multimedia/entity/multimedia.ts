import { Temathic } from "../../temathic/entity/temathic";
import { User } from "../../users/entity/user";

export class Multimedia {
  constructor (
    public id: string,
    public title: string,

    public temathic: Temathic,
    public author: User,

    public url?: string,
    public image?: string,
    public file?: string,
    public text?: string
  ) {}
}
