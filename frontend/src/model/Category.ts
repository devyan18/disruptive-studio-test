import { Thematic } from "./Thematic";

export interface Category {
  id?: string;
  name: string;
  description: string;
  coverImage: string;
  thematics: Thematic[];
}
