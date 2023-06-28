import React from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap'


const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>OOPS!...Something went wrong</h1>
      <Button onClick={()=>navigate("/")}>Buy Again</Button>

    </div>
  )
}

export default Cancel