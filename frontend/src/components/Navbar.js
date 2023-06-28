import React from 'react'
import {Button,Container,Navbar,Modal, NavbarBrand} from 'react-bootstrap';
import { useState,useContext } from 'react';
import { CartContext } from '../CartContext';
import ProductCard from './ProductCard';
import CartProduct from './CartProduct';
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
    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end"/>
    <Button onClick={handleShow}>Cart {productsCount} items</Button>
    </Navbar>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

<Modal.Title>Shopping cart</Modal.Title>

</Modal.Header>
<Modal.Body>
    {productsCount>0?
    <>
    {cart.items.map((currentProduct,index)=>(
<CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}/>
    ))}
    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
    <Button variant='success' onClick={checkout} >Checkout</Button>
    </>
    :
    <h1>cart is empty</h1>
    }
</Modal.Body>

    </Modal>


    </>
  )
}

export default NavbarComponent