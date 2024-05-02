import { NextFunction, Request, Response } from "express";
import { Role } from "../entity/user";

export const roleGuard = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
};
