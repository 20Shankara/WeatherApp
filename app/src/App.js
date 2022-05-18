import React, {Component} from "react";
import Input from './Components/getInput';
import UI from './Components/Display'
import {useEffect, useState} from "react";
import { useRef } from "react";
import './App.css';
import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

class App extends Component {

  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }
  state = {
    isLoaded: false,
    needLoad: true,
    Input: true,
    address: "",
    city: "",
    zip: "",
    Display: false,
    lat : null,
    lon: null,
    items: {}
  }

  handler(a, b, c){
    this.setState({
      lat: a,
      lon: b,
      city: c,
      Display: true,
      Input: false
    })
  }

  async componentDidMount() {
    const APIkey = "4593ebb67efa2223fad61e1270084ed6"
    const lat = this.state.lat;
    const lon = this.state.lon;
    let url ="https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey;
    fetch(url)
    .then(res => res.json())
    .then(json => {
        this.setState ({
            items: json,
        })
    })
}
render() {
  console.log(this.state)
  if (this.state.Input){
    //getting input 
    return(
      <div style={{
      }}>
        <h1 style = {{
          blockSize: 100,
          color: 'green',
          fontSize: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          WeatherAPP
        </h1>
        <Input handler = {this.handler} />
      </div>
    );
  } 
  if (this.state.Display){
    //displaying weather
    if (this.state.needLoad){
      this.componentDidMount();
      this.setState({
        needLoad: false,
        isLoaded: true
      })
    }
    if (this.state.items.lat){
    return (
      <ThemeProvider theme={darkTheme}>
      <div>
      <h1 style = {{
          color: 'green',
          fontSize: 75,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          Weather in... {this.state.city}
        </h1>
        <UI city = {this.state.city} items = {this.state.items}/>
      </div>
      </ThemeProvider>
    )
    }
  }
}


  }
  

export default App; 
