import { useGetProductsQuery } from '../redux/slices/productsSlice.js'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.jsx'
import Loading from '../components/Loading.jsx'




const HomeScreen = () => {

 const {data:products,isLoading,isError} = useGetProductsQuery();


  return <>{isLoading ? 
    <Loading/> : isError ? <p>{isError?.data?.error || isError?.error}</p>:
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
