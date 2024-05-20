import { API_URL } from "../constants";

export const getUserData = async () => {
  const data = await fetch(`${API_URL}`);
  const response = await data.json();
  return response;
};

export const addUserData = async (userData) => {
  const data = await fetch(`${API_URL}`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json;",
    },
  });

  const response = await data.json();
  return response;
};

export const editUserData = async (id, userData) => {
  const data = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json;",
    },
  });

  const response = await data.json();
  return response;
};

export const deleteUserData = async (id) => {
  const data = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;",
    },
  });
  const response = await data.json();
  return response;
};
