export const setSession = (data) => {
  localStorage.setItem("session", JSON.stringify(data));
};

export const clearSession = () => {
  localStorage.removeItem("session");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("session");
};
