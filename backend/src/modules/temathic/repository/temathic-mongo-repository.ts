import { TemathicRepository } from "../temathic-repository";
import { TemathicModel } from "../entity/temathic-model";
import { Temathic } from "../entity/temathic";
import { TemathicNotFound } from "./temathic-erros";

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

    return createdTemathic;
  }

  async update (temathic: Partial<Temathic>): Promise<Temathic | null> {
    const temathicExists = await this.getById({ id: temathic.id! });

    if (!temathicExists) {
      throw new TemathicNotFound();
    }

    const updatedTemathic = await TemathicModel.findOneAndUpdate({
      _id: temathic.id
    }, {
      $set: {
        temathic: temathic.temathic,
        usingImage: temathic.usingImage
      }
    }, { new: true });

    return updatedTemathic;
  }

  async delete ({ id }: { id: string; }): Promise<boolean> {
    const temathicExists = await this.getById({ id });

    if (!temathicExists) {
      throw new TemathicNotFound();
    }

    await TemathicModel.deleteOne({
      _id: id
    });

    return true;
  }
}
