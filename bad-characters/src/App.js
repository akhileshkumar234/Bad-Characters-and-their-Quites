//import {useState,useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/navbar';
import { Box } from '@material-ui/core'
import { fetchAPI } from './CharactersAPI/badcharAPI';
import {fetchEpisodesAPI} from './CharactersAPI/episodesAPI';
import { useEffect, useState } from 'react';
import Characters from './components/characters';
const App = () => {
  const [text, setText] = useState("");
  const [data, useData] = useState([]);
  const [textEpi, setEpiText] = useState("");
  const [Epidata, useEpiData] = useState([]);
  
    
 
  useEffect(() => {
    const GetData = async () => {
      const ans = await fetchAPI(text);
      useData(ans.data);
      //console.log(ans);
    }
    const EpisodeGetdata=async()=>{
      const result=await fetchEpisodesAPI(textEpi);
      console.log(result);
      //useEpiData(result.Epidata);
    }
    EpisodeGetdata();
    GetData();
  }, [text]);
  const getName=(text)=>{
    setText(text);
    //console.log(text);
  }
  //Here box will give us a div tag
  return (
    <Box>
      <Navbar getName={getName} />
      <Characters data={data}/>
    </Box>
  );
}

export default App;
