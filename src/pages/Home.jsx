 import React from "react"
 import { useState } from "react"
 import {Box, styled} from "@mui/material"
import Sunset from "../assets/images/bg.jpg"
import Form from "../components/Form"
import Information from "../components/Information"


const Container = styled(Box)`
height:100vh;
display:flex;
align-items:center;
width:65%;
margin:0 auto;
`

 const Image = styled(Box)`
 background:url(${Sunset});
 height:80%;
 width:27%;
 background-size:cover;
border-radius:20px 0 0 20px;
 `
 
 function Home(){
   const [result,setResult] = useState({})

    return(
<Container>
   <Image></Image>

    <Box style={{width:"73%",height:"80%"}}>
      <Form setResult = {setResult}/>
      <Information result = {result}/>
    </Box>
    
    </Container>
    )
 }

 export default Home