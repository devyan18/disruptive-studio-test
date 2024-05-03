import { NextFunction, Request, Response } from "express";

export const clearJsonData = (req: Request, res: Response, next: NextFunction) => {
  if (req.body) {
    console.log(req.body);
  }

  next();
};
