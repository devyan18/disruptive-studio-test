import { User } from "../users/entity/user";

export interface AuthRepository {
  getUserByToken ({ id }:{id:string}): Promise<User | null>;
  login ({ email, password }: {
    email: string;
    password: string;
  }): Promise<User | null>;
  register (user: Partial<User>): Promise<User | null>;
}
