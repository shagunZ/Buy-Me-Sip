import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"

const Success = () => {
  const navigate = useNavigate();
  return (
    <div><h1>
      Thankyou for your order!Hope you enjoy it
      </h1>
      <Button onClick={()=>navigate("/")}>Buy More</Button>
      </div>
  )
}

export default Success