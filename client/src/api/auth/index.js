import axios from "axios";
import { instance } from "..";

export const register = async (registerObj) => {
  const res = await instance.post(
    "auth/local/register",
    JSON.stringify(registerObj)
  );

  return res.data;
};

export const login = async (loginObj) => {
  const res = await axios.post(
    "http://localhost:1337/api/auth/local",
    JSON.stringify(loginObj),
    {
      headers: {
        Authorization: "bearer " + import.meta.env.VITE_STRAPI_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
