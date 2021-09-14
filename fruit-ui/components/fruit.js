import React, { Component } from 'react'
import axios from "axios";


export default function Fruit(props) {

  return props.isLoading ? <div>
    <h1>Loading...</h1>
  </div> : props.fruit.map(f =>
    <div class="col mb-5">
      <div key={f.id} class="card h-100 fruit-card" style={{"width": "18rem"}}>
        <img src={f.image} class="card-img-top" alt="..."></img>
        <div class="card-body p-4">
        <div class="text-center">
            <h5 class="fw-bolder">{f.name}</h5>
            <p class="card-text">{f.description}</p>
        </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
          </div>
      </div>
    </div>
  )

}
