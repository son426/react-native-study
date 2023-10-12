import axios from "axios";

const API_KEY = "AIzaSyDjSIUmEvrUFZRabAGgwbm83Oi2wjEffyc";
const SERVER_URL = "https://identitytoolkit.googleapis.com/v1/accounts";

const authenticate = async (mode, email, password) => {
  const response = await axios.post(`${SERVER_URL}:${mode}?key=${API_KEY}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response;
};

export const createUser = async (email, password) => {
  await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  await authenticate("signInWithPassword", email, password);
};
