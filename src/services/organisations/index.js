import axios from "axios";

export const fetchOrganisationsByQueryService = async (qwery = "") => {
  try {
    const response = await axios(
      `https://api.github.com/search/users?q=type:org+${qwery}`
    );
    const { items } = response.data;
    return items;
  } catch (error) {
    return [];
  }
};

export const fetchOrganisationMembersByNameService = async name => {
  try {
    const response = await axios(`https://api.github.com/orgs/${name}/members`);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchOrganisationByNameService = async name => {
  try {
    const response = await axios(`https://api.github.com/orgs/${name}`);
    const organisationData = response.data;
    organisationData.members = await fetchOrganisationMembersByNameService(
      name
    );

    return organisationData;
  } catch (error) {
    return null;
  }
};
