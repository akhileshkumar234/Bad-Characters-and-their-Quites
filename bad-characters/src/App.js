//import {useState,useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/navbar';
import { Box } from '@material-ui/core'
import { fetchAPI } from './CharactersAPI/badcharAPI';
import { useEffect, useState } from 'react';
import Characters from './components/characters';
const App = () => {
  const [text, setText] = useState("");
  const [data, useData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const ans = await fetchAPI(text);
      useData(ans.data);
      //console.log(ans);
    }
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

export default A