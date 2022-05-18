import React from "react";
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 20
  }));

export default class Current extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city: this .props.city,
            items: this.props.items,
            sunrise: new Date(this.props.items.sunrise*1000).toLocaleTimeString("en-US"),
            sunset: new Date(this.props.items.sunset*1000).toLocaleTimeString("en-US"),
            clouds: this.props.items.clouds.toString() + "%",
            humidity: this.props.items.humidity.toString() + "%",
            feels_like: this.props.items.feels_like.toString() + 'ºF',
            temp: this.props.items.temp.toString() + "ºF",
            
        }
    }
    

    render(){
        return(
            <Box sx = {{
                flexGrow: 1,
                }}>
            <Grid container spacing={2}>
            <Grid item xs={12}> 
                <Item>Temperature: {this.state.temp}</Item>
            </Grid>
            <Grid item xs={12}>
                 <Item>Feels Like: {this.state.feels_like}</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>Sunrise at {this.state.sunrise}</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>Sunset at {this.state.sunset}</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>{this.state.clouds} Cloud Cover Today</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>{this.state.humidity} Humidity Today</Item>
            </Grid>
            </Grid>
            </Box>
        )
    }
}