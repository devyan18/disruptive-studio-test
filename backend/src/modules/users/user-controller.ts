import { Request, Response } from "express";
import { UserByEmailFinder, UserByIdFinder, UserFindAll } from "./repository/user-finder";
import { UserNotCreated, UserNotFound } from "./repository/user-errors";
import { UserCreator } from "./repository/user-saver";

export class UserController {
  constructor (
    private readonly userFindAll: UserFindAll,
    private readonly userByIdFinder: UserByIdFinder,
    private readonly userByEmailFinder: UserByEmailFinder,
    private readonly userCreator: UserCreator
  ) {}

  async getAllUsers (_req: Request, res: Response) {
    try {
      const users = await this.userFindAll.run();

      return res.status(200).json({ data: users });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getUserById (req: Request, res: Response) {
    try {
      const user = await this.userByIdFinder.run({ id: req.params.id });

      return res.status(200).json({ data: user });
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getUserByEmail (req: Request, res: Response) {
    try {
      const email = req.query.email as string;
      const user = await this.userByEmailFinder.run({ email });

      return res.status(200).json({ data: user });
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async createUser (req: Request, res: Response) {
    try {
      const user = await this.userCreator.run(req.body);

      return res.status(201).json({ data: user });
    } catch (error) {
      console.log(error);
      if (error instanceof UserNotCreated) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
