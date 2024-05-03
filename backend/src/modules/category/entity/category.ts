import { Thematic } from "../../thematic/entity/thematic";

export class Category {
  constructor (
    public id: string,
    public name: string,
    public description: string,
    public coverImage: string,
    public thematics: Thematic[]
  ) {}
}
