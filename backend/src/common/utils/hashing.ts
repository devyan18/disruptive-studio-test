import bcrypt from "bcrypt";

export const hashString = async (str: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(str, salt);
};

export const compareString = async (str: string, hashedStr: string): Promise<boolean> => {
  return bcrypt.compare(str, hashedStr);
};
