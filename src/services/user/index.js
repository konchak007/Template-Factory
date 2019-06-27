import axios from "axios";

export const fetchUserService = async name => {
  try {
    const response = await axios(`https://api.github.com/users/${name}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
