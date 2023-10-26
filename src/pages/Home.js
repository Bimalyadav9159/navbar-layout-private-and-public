import React, { useState } from 'react'
import Button from '../components/Button'

const Home = () => {
  const[ok, setOk]=useState(true)

  return (
    <div>
      <h1> Home page</h1>
      <Button done={()=>alert(ok?"every things is ok": "Not Ok")}>Click Me </Button>
      <Button done={()=> alert("Successfuly submited")}>Submit</Button>
    </div>
  )
}

export default Home
