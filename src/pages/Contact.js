import React from 'react'
import axios from 'axios'


const Contact = () => {

axios.get('https://leandroalfonso-upgraded-trout-7ww5xqr64q4c6g5-3001.preview.app.github.dev/geeks').then((response)=>{
  console.log(response)
})




  return (
    <div>
      <h1>contatos</h1>

    </div>
  )
}

export default Contact
