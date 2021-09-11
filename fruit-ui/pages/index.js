import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fruitList from "../dummy-data";
import Fruit from "../components/fruit"
//import api from "../utils/API"
import {useState, useEffect} from "react"
import axios from "axios"

import React from "react";

export default function Home() {

  const [fruit, setFruit] = useState([]);

  function getFruitData() {
    axios
      .get(`https://localhost:44311/api/Fruit/GetFruit`, {})
      .then(res => {
          console.log(res.data)
        setFruit(res.data)

      })
      .catch((error) => {
          console.log(error)
      });
  }

  useEffect(() => {

    getFruitData();

  },[])
  
   return (
     <>
       <h1>Fruit</h1>
       <Fruit fruit={fruit}></Fruit>
      </>
   )
 }
