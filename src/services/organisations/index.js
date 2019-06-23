import axios from 'axios';


  export  const fetchOrganisationsByQueryService = async (qwery)=>{
    try {
    const response = await axios(`https://api.github.com/search/users?q=type:org+${qwery}`)
    const { items } = response.data;
     console.log (items)
    return items;
  } catch (error) {
    return [];
  }

}
