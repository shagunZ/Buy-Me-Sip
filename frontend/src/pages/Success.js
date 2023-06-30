import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import './Success.css'
const Success = () => {

  
  const navigate = useNavigate();
  return (
    <div>
      <div class="cardsuccess">
      <div style={{borderRadius:"200px",height:"200px",width:"200px",background:"#F8FAF5",margin:"0 auto"}}>
        <i className='checkpayment' class="checkmark checkpayment">✓</i>
      </div>
        <h1 class="h1">Success</h1> 
        <p class="p">We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
      <h1 class="h1">
      ✅Thankyou for your order!Hope you enjoy it
      </h1>
      <Button onClick={()=>navigate("/")}>Buy More</Button>
      </div>
  )
}

export default Success