import { NextFunction, Request, Response } from "express";
import { Role, User } from "../entity/user";

export const roleGuard = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;

    if (roles.includes(user.role)) {
      next();
    } else {
      const user = req.user as User;
      console.log("Unauthorized from roleGuard", user.role, roles);
      res.sendStatus(401);
    }
  };
};
