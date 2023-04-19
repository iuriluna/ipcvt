import { useState,useEffect } from 'react';
import axios from "axios";

import { BASE_URL } from '../../service/BASE_URL';

import './styles.css'


const Home = () => {

  const [data, setData] = useState([])

  const getData = ()=>{
    axios.get(BASE_URL).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <h1>home</h1>
  )
};

export default Home;
