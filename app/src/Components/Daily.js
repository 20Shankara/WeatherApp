import React from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class Daily extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            city: this.props.city,
            daily: this.props.items,
        }
    }

    render() {
        console.log(this.state)
        return(
            <Box sx = {{
                flexGrow: 1,
                }}>
            <Stack spacing={2}>
                {this.state.daily.map((time) => {
                    return  <Item>{new Date(time.dt * 1000).toLocaleDateString()} : {time.temp.day} ºF</Item>
                })}
            </Stack>
            </Box>
        )
    }

}