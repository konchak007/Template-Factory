import axios from 'axios'


export const fetchUserService = async name => {
  try {
    const response = await axios(`https://api.github.com/users/${name}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return [];
  }
};
