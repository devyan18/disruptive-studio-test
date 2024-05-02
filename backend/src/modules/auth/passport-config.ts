import passport from "passport";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { userRepository } from "../users/dependencies";
import { CONFIG } from "../../settings/env-vars";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: CONFIG.SECRET_OR_KEY
};

const strategy = new Strategy(options, async (payload, done) => {
  try {
    const { userId } = payload;
    const user = await userRepository.getById({ id: userId });

    if (!user) {
      return done(null, false);
    }

    const jsonUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      password: user.password,
      role: user.role
    };

    return done(null, jsonUser);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(strategy);
