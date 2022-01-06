import axios from 'axios';

export const fetchEpisodesAPI=async(name)=>{
  return await axios.get(`https://www.breakingbadapi.com/api/episodes`);
    
  
}