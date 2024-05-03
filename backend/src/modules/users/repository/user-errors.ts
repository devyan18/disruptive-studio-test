export class UserNotFound extends Error {
  constructor () {
    super("User not found");
  }
}

export class UserNotCreated extends Error {
  constructor () {
    super("User not created");
  }
}

export class UserRepeated extends Error {
  constructor () {
    super("User repeated");
  }
}
