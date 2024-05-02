import { User } from "./entity/user";

export interface UserRepository {
  findAll (): Promise<User[]>;
  getById ({ id }: {id: string}): Promise<User | null>;
  getByEmail ({ email }: {email: string}): Promise<User | null>;
  getByUsername ({ username }: {username: string}): Promise<User | null>;
  save (user: Partial<User>): Promise<User | null>;
}
