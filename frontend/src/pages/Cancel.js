import React from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap'


const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div>

      <div class="cardsuccess">
      <div style={{borderRadius:"200px",height:"200px",width:"200px",background:"#F8FAF5",margin:"0 auto"}}>
        <i className='checkpayment' class="checkmark checkpayment">❌</i>
      </div>
        <h2 style={{color:"brown"}}>Error</h2> 
        <p style={{color:"brown"}}>Something went wrong.<br/> Please try again!</p>
      </div>
      <h2 style={{color:"brown"}}>OOPS!...Something went wrong</h2>

      <Button onClick={()=>navigate("/")}>Buy Again</Button>

    </div>
  )
}

export default Cancel