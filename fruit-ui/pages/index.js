import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fruitList from "../dummy-data";
import Fruit from "../components/fruit"
//import api from "../utils/API"
import {useState, useEffect} from "react"
import axios from "axios"
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";

export default function Home() {

  const [fruit, setFruit] = useState([]);
  const [isLoading, setLoading] = useState(true)

  function getFruitData() {
    axios
      .get(`https://localhost:44311/api/Fruit/GetFruit`, {})
      .then(res => {
          console.log(res.data)
        setFruit(res.data)
        setLoading(false)
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Fruit Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Buy some fruit</h1>
                    <p class="lead fw-normal text-white-50 mb-0">from the React.js fruit shop</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Fruit isLoading={isLoading} fruit={fruit}></Fruit>
                </div>
            </div>
        </section>
       
      </>
   )
 }
