export const setToken = (token) => {
  localStorage.setItem("accesToken", token);
};

export const getToken = () => {
  return localStorage.getItem("accesToken");
};

export const removeToken = () => {
  return localStorage.removeItem("accesToken");
};
