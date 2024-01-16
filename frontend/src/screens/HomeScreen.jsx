import { useGetProductsQuery } from '../redux/slices/productsSlice.js'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'




const HomeScreen = () => {

 const {data:products,isLoading,isError} = useGetProductsQuery();


  return <>{isLoading ? 
    <Loader/> : isError ? <Message>{isError?.data?.error || isError?.error}</Message>:
    <><h1>Products</h1>
    <Row>
        {products?.map(p=>(
            <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                <Product prd={p}/>
            </Col>
        ))}
    </Row>
    </>
  }</>
}

export default HomeScreen
