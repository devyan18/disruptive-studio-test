export const ROLES = {
  Admin: "Admin",
  Reader: "Reader",
  Creator: "Creator"
};

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string
}
