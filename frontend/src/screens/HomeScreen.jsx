import { useEffect,useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.jsx'


const HomeScreen = () => {

  const [products, setproducts] = useState([]);

  const fetchData = async ()=>{
    
  }

  useEffect(()=>{
     
  },[])

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
