import React, { Component } from 'react'
import axios from "axios";

export default class Fruit extends Component {
    constructor(props) {
      super(props);
      this.state = {
          fruit: []
      };
    }

    getFruitData() {
      axios
        .get(`https://localhost:44311/api/Fruit/GetFruit`, {})
        .then(res => {
            const data = res.data
            console.log(data)
            const fruit = data.map(f =>
                <div>
                  <h4>{f.name}</h4>
                  <span>{f.description}</span>
                </div>
              )

              this.setState({fruit})


        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.getFruitData()
    }

  render() {
      return (
          <div>
              {this.state.fruit}
          </div>
      )
  }
}