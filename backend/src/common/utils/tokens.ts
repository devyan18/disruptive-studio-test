import jwt from "jsonwebtoken";
import { CONFIG } from "../../settings/env-vars";

export const generateToken = async <T extends Record<string, string>>(payload: T) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, CONFIG.SECRET_OR_KEY, {
      expiresIn: "1h"
    }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, CONFIG.SECRET_OR_KEY);
};
