import { ThematicRepository } from "../thematic-repository";
import { ThematicModel } from "../entity/thematic-model";
import { Thematic } from "../entity/thematic";
import { ThematicNotFound } from "./thematic-errors";
import { categoryRepository } from "../../category/dependencies";

export class ThematicMongoRepository implements ThematicRepository {
  async findAll (): Promise<Thematic[]> {
    try {
      return await ThematicModel.find().populate("creator").populate("category");
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getById ({ id }:{id: string}): Promise<Thematic | null> {
    try {
      return await ThematicModel.findOne({ _id: id }) ?? null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async save (temathic: Partial<Thematic>): Promise<Thematic | null> {
    const newThematic = new ThematicModel(temathic);
    console.log(newThematic);
    const chreatedTematic = await newThematic.save();

    if (!chreatedTematic) {
      return null;
    }

    const category = temathic.category!;

    await categoryRepository.addThematicToCategory(category.id, chreatedTematic._id.toString());

    return chreatedTematic;
  }

  async update (thematic: Partial<Thematic>): Promise<Thematic | null> {
    console.log(thematic);

    const temathicExists = await this.getById({ id: thematic.id! });

    if (!temathicExists) {
      throw new ThematicNotFound();
    }

    const uhpdatedTematic = await ThematicModel.findOneAndUpdate({
      _id: thematic.id
    }, {
      $set: {
        themathic: thematic.thematic,
        usingImage: thematic.usingImage
      }
    }, { new: true });

    return uhpdatedTematic;
  }

  async delete ({ id }: { id: string; }): Promise<boolean> {
    const temathicExists = await this.getById({ id });

    if (!temathicExists) {
      throw new ThematicNotFound();
    }

    await ThematicModel.deleteOne({
      _id: id
    });

    return true;
  }

  async insertMany (thematics: Partial<Thematic>[]): Promise<boolean> {
    try {
      const inserted = thematics.map(thematic => {
        return ({
          ...thematic,
          creator: thematic?.creator?.id,
          category: thematic?.category?.id
        });
      });

      await ThematicModel.insertMany(inserted);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
