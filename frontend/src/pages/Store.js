import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {productsArray} from '../productsStore'
import ProductCard from '../components/ProductCard'
const Store = () => {
  return (
    <div>
        <h1 align="center" className='p-3' style={{color:"brown"}}>Welcome to our store!</h1>
        <Row xs={1} md={3} className='g-4'>

            {productsArray.map((product,index)=>(
            <Col align="center" key={index}>
                <ProductCard product={product} />
                </Col>

            ))}

        </Row>
    </div>
  )
}

export default Store