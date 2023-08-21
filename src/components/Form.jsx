
import React from "react"
import {useState} from "react"
import {Box,InputBase,Button,styled} from "@mui/material"

import getWeather from "../services/api"



const Container = styled(Box)`
background-color:#445A6F;
padding:10px;
`

const Input = styled(InputBase)`
color:#fff;
margin-right:20px;
font-size:18px;
`
const GetButton = styled(Button)`
background-color:#e67e22;
`


function Form({setResult}){
const [input,setInput] = useState({city:""})

   function handleChange (e){
        setInput({...input, [e.target.name]:e.target.value})
        console.log(input)
        
        }

        const getWeatherInfo = async () =>{
         let result = await getWeather(input.city)
         setResult(result)
        }

    return(
        <Container>
            <Input placeholder="City"
            name="city"
            onChange = {(e) => handleChange(e)}
            />
            
            <GetButton 
            onClick = {getWeatherInfo}
            variant="contained">Get Weather</GetButton>

        </Container>
    )
}

export default Form


