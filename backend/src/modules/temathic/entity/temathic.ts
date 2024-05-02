import { User } from "../../users/entity/user";

export const CATEGORIES = {
  IMAGES: "IMAGES",
  URL_VIDEOS: "URL_VIDEOS",
  TEXT: "TEXT"
};

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export class Temathic {
  constructor (
    public id: string,
    public temathic: string,
    public creator: User,
    public categories: Category[]
  ) {}
}
