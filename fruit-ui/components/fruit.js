import React, { Component } from 'react'
import axios from "axios";


export default function Fruit(props) {

  return props.fruit.map(f =>
    <div key={f.id}>
      <h4>{f.name}</h4>
      <span>{f.description}</span>
    </div>
  )

}
