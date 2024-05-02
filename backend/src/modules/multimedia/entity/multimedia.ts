import { Temathic } from "../../temathic/entity/temathic";
import { User } from "../../users/entity/user";

export const MULTIMEDIA_TYPES = {
  Url: "Url",
  Text: "Text",
  Image: "Image"
};

export class Multimedia {
  constructor (
    public id: string,
    public title: string,
    public fileRef: string,
    public type: string,
    public temathic: Temathic,
    public author: User
  ) {}
}
