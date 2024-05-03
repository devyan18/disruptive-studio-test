import { Category } from "../../category/entity/category";
import { User } from "../../users/entity/user";

export class Thematic {
  constructor (
    public id: string,
    public thematic: string,

    public creator: User,
    public category: Category,

    public usingImage: boolean,
    public usingFiles: boolean,
    public usingText: boolean,
    public usingUrl: boolean
  ) {}
}
