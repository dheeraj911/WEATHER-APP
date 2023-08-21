
import React from "react"
import {Box,Typography,styled} from "@mui/material"

import {LocationOn, SettingsBrightness,Opacity,Brightness5,Brightness6,Dehaze,Cloud} from "@mui/icons-material"

const Row = styled(Typography)`
padding:10px;
line-spacing:2px;
`
const Input = styled(Typography)`
color:red;
margin:50px;
align-items:center;
` 

function Information({result}){
    return(
        result && Object.keys(result).length > 0 ?
        <Box styled={{margin:"30px 60px"}}>
            <Row><LocationOn /> location: {result.name},{result.sys.country} </Row>
            <Row><SettingsBrightness /> Temperature: {result.main.temp} °C</Row>
            <Row><Opacity /> Humidity: {result.main.humidity}</Row>
            <Row><Brightness5 /> Sunrise: {new Date(result.sys.sunrise *1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 /> Sunset: {new Date(result.sys.sunset *1000).toLocaleTimeString()}</Row>
            <Row><Dehaze /> Humidity: {result.weather[0].main}</Row>
            <Row><Cloud /> Clouds: {result.clouds.all}%</Row>
        </Box>
        : <Input>PLEASE ENTER THE VALUES</Input>
    )
}

export default Information