import { User } from "../../users/entity/user";

export class Temathic {
  constructor (
    public id: string,
    public temathic: string,
    public creator: User,

    public usingImage: boolean,
    public usingFiles: boolean,
    public usingText: boolean,
    public usingUrl: boolean
  ) {}
}
