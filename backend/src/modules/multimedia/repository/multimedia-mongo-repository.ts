import { Multimedia } from "../entity/multimedia";
import { MultimediaRepository } from "../multimedia-repository";
import { MultimediaModel } from "../entity/multimedia-model";
import { MultimediaNotFound } from "./multimedia-errors";

export class MultimediaMongoRepository implements MultimediaRepository {
  async findAll (): Promise<Multimedia[]> {
    return await MultimediaModel.find();
  }

  async findById ({ id }: { id: string; }): Promise<Multimedia | null> {
    return await MultimediaModel.findOne({ _id: id });
  }

  async search (query: string): Promise<Multimedia[]> {
    console.log(query);
    throw new Error("Method not implemented.");
  }

  async create (multimedia: Partial<Multimedia>): Promise<Multimedia | null> {
    const instance = new MultimediaModel(multimedia);
    const newMulti = await instance.save();

    if (!newMulti) {
      throw new Error("Error creating multimedia");
    }

    return newMulti;
  }

  async update (id: string, multimedia: Partial<Multimedia>): Promise<Multimedia | null> {
    const exist = await this.findById({ id });

    if (!exist) {
      throw new MultimediaNotFound();
    }

    const updated = await MultimediaModel.findOneAndUpdate({ _id: id }, {
      $set: multimedia
    }, { new: true });

    if (!updated) {
      throw new Error("Error updating multimedia");
    }

    return updated;
  }

  async delete ({ id }: { id: string; }): Promise<boolean> {
    const exist = await this.findById({ id });

    if (!exist) {
      throw new MultimediaNotFound();
    }

    const deleted = await MultimediaModel.deleteOne({ _id: id });

    if (!deleted) {
      throw new Error("Error deleting multimedia");
    }

    return true;
  }
}
