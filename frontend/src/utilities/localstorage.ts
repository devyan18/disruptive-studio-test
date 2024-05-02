export const saveTokenInLocalStorage = (token: string) => {
  const bearerToken = `Bearer ${token}`;

  localStorage.setItem("token", bearerToken);
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};
