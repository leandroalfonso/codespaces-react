import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import Home from '../pages/Home'

const Contact = () => {
  const [input, setInput] = useState("")
  const [item, setItem] = useState([])
const arr =[]
const getInput =()=>{
setItem(...item, input)

arr.push([item])


console.warn(arr)
setInput('')
  


  
   

    
}

  return (
    <div>
      <h1>contatos</h1>
      <input onChange={(e)=>{setInput(e.target.value)}} type='text' placeholder='teste de input'/>
      <button onClick={()=>{getInput(input)}}>enviar</button>
      <h1>{arr}</h1>
    </div>
  )
}

export default Contact
