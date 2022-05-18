import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Current from './Current'
import Hourly from './Hourly'
import { TableRow } from "@mui/material";
import { Hidden } from "@mui/material";
import Daily from './Daily'

export default class Display extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city: this.props.city,
            items: this.props.items
        }
    }

    render(){
        return(
            <div style = {{
                display:"flex",
                flexDirection:"row",
            }}>
            <Current city = {this.state.city} items = {this.state.items.current}/>
            <h1>  &nbsp; </h1>
            <Hourly city = {this.state.city} items = {this.state.items.hourly}/>
            <h1>  &nbsp; </h1>
            <Daily city = {this.state.city} items = {this.state.items.daily}/>
            </div>

        )
    }
}