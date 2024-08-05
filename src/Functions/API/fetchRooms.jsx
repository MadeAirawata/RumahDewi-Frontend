import axios from "axios";

const url = import.meta.env.VITE_BE_URL;

export async function getRooms(token) {
  try {
    const response = await axios.get(`${url}/rooms/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getUserRooms(token) {
  try {
    const response = await axios.get(`${url}/rooms/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
}
