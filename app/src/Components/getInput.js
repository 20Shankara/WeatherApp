import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default class getInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            loading: false,
            lat: null,
            long: null,
            items: {},
            isLoaded: false,
            needLoad: true
        };
    }

    handleChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    async componentDidMount() {
        const APIkey = '4593ebb67efa2223fad61e1270084ed6'
        const city = this.state.city;
        let url ="https://api.openweathermap.org/geo/1.0/direct?q=" + this.state.city + "&limit=1&appid=4593ebb67efa2223fad61e1270084ed6";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState ({
                isLoaded: true,
                items: json[0],
            })
        })
    }

    handleClick = (event) => {
        this.componentDidMount()
        this.setState({
            loading: true
        })
    }
    
    render () {
        if (this.state.items && this.state.needLoad){
            if (this.state.items.lat){
            this.setState({
                lat: this.state.items.lat,
                long: this.state.items.lon,
                needLoad: false
            })
            this.props.handler(this.state.items.lat, this.state.items.lon, this.state.city);
        }

        }
        if (!this.state.loading){
        return (
            <div style = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                
                <TextField 
                label = "Enter City"
                onChange={this.handleChange}
                />
                <Button onClick = {this.handleClick}>
                    Show me the Weather!
                </Button>
            </div>   
        )
        }
        if (this.state.loading) {
            return (
                <div style = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    fontSize: '100px'
                }}>
                    Loading...
                </div>
            )
        }
    }


}