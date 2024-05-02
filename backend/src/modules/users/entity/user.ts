export const USER_ROLES = {
  ADMIN: "Admin",
  LECTOR: "Lector",
  CREATOR: "Creator"
};

export type Role = keyof typeof USER_ROLES;

export class User {
  constructor (
    public readonly id: string,
    public readonly email: string,
    public readonly username: string,
    public readonly role: Role
  ) {}
}
