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