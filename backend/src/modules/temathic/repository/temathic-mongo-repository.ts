import { TemathicRepository } from "../temathic-repository";
import { TemathicModel } from "../entity/temathic-model";
import { Temathic } from "../entity/temathic";

export class TemathicMongoRepository implements TemathicRepository {
  async findAll (): Promise<Temathic[]> {
    try {
      return await TemathicModel.find();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getById ({ id }:{id: string}): Promise<Temathic | null> {
    try {
      return await TemathicModel.findOne({ _id: id }) ?? null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async save (temathic: Partial<Temathic>): Promise<Temathic | null> {
    const newTemathic = new TemathicModel(temathic);

    const createdTemathic = await newTemathic.save();

    if (!createdTemathic) {
      return null;
    }

    return new Temathic(
      createdTemathic._id.toString(),
      createdTemathic.temathic,
      createdTemathic.creator,
      createdTemathic.categories
    );
  }
}
