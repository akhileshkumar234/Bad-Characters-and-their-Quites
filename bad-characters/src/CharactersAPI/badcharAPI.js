import axios from 'axios';

export const fetchAPI=async(name)=>{
  return await axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
    
  
}
