export const USER_ROLES = {
  Admin: "Admin",
  Lector: "Lector",
  Creator: "Creator"
};

export type Role = keyof typeof USER_ROLES;

export class User {
  constructor (
    public readonly id: string,
    public readonly email: string,
    public readonly username: string,
    public password: string,
    public readonly role: Role
  ) {}
}
