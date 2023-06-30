import React from 'react'
import {Button,Navbar,Modal} from 'react-bootstrap';
import { useState,useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import Image from 'react-bootstrap/Image';


const NavbarComponent = () => {

    const cart = useContext(CartContext);
    const [show, setshow] = useState(false)
    const handleClose=()=>setshow(false);
    const handleShow=()=>setshow(true);


    const checkout= async()=>{
      await fetch("http://localhost:4000/checkout",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({items:cart.items}) //parse items to backend
      }).then((response)=>{
        return response.json();
      }).then((response)=>{
        if(response.url){
          window.location.assign(response.url)
        }
      })
    }


    const productsCount = cart.items.reduce((sum,product)=>sum + product.quantity,0)
  return (
    <>
   <Navbar expand="sm">
    <Navbar.Brand href="/">
    <Image
            alt="logo"
            src="https://plus.unsplash.com/premium_photo-1670015230537-5c6253727a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            width="90px"
            roundedCircle
          />
      </Navbar.Brand>
    <Navbar.Brand href="/">
      Buy Me Sip</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end"/>
    <Button onClick={handleShow}>Cart {productsCount} items</Button>
    </Navbar>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

{/* <Modal.Title>MY CART</Modal.Title> */}

</Modal.Header>
<Modal.Body>
    {productsCount>0?
    <>
    {cart.items.map((currentProduct,index)=>(
<CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}/>
    ))}
    <h1 style={{color:"brown"}}>Total: {cart.getTotalCost().toFixed(2)}</h1>
    <Button variant='success' onClick={checkout} >Checkout</Button>
    </>
    :
    <h1 style={{color:"brown"}}>cart is empty</h1>
    }
</Modal.Body>

    </Modal>


    </>
  )
}

export default NavbarComponent