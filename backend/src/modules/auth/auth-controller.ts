import { Request, Response } from "express";
import { AuthLogin, AuthRegister } from "./repository/auth-signs";
import { UserNotCreated, UserNotFound } from "../users/repository/user-errors";
import { generateToken } from "../../common/utils/tokens";

export class AuthController {
  constructor (
    private readonly authLogin: AuthLogin,
    private readonly authRegister: AuthRegister
  ) {}

  async login (req: Request, res: Response) {
    try {
      const user = await this.authLogin.run(req.body);

      const token = await generateToken<{userId: string}>({ userId: user.id });

      return res.status(200).json({ data: user, token });
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async register (req: Request, res: Response) {
    try {
      const user = await this.authRegister.run(req.body);

      const token = await generateToken<{userId: string}>({ userId: user.id });

      return res.status(201).json({ data: user, token });
    } catch (error) {
      if (error instanceof UserNotCreated) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
