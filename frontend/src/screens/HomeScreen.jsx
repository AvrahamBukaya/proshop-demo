import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.jsx'
import products from '../products.js'


const HomeScreen = () => {
  return (
    <>
    <h1>Products</h1>
    <Row>
        {products.map(p=>(
            <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                <Product prd={p}/>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen
