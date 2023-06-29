import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import {Card,Button,Form,Row,Col} from 'react-bootstrap'
import { CDBBtn, CDBContainer } from "cdbreact";

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext)
    const productQuantity=cart.getProductQuantity(product.id)
    console.log(cart.items);
  return (
    <Card>
        <Card.Img variant="top" style={{ height: '15rem' }} src={product.img}/>
        <Card.Body className='flex-column'>

           <Card.Title>{product.title}</Card.Title>
           <hr></hr>
           <Row>
            <Col>
           <Card.Text>Rs. {product.price}</Card.Text>
           </Col>
           <Col>
            {productQuantity > 0 ?
               <>
               <Form as={Row}>
                   <Form.Label column="true" sm="6">Cart: {productQuantity}</Form.Label>
                   <Row>
                   <Col sm="6">
                       <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                   </Col>
                   <Col sm="6">
                       <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                   </Col>
                   </Row>
               </Form>
               <CDBBtn color='warning' onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</CDBBtn>
           </>
            :
           <Button variant='primary' onClick={()=>cart.addOneToCart(product.id)}>Add to cart</Button>
            }
            
            </Col>
</Row>
        </Card.Body>
        </Card>
  )
}

export default ProductCard