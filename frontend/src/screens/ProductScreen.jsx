import { useParams,Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useGetProductQuery } from '../redux/slices/productsSlice.js'
import { Row, Col,Image,ListGroup,Card, Button, FormControl } from 'react-bootstrap'
import { addToCart } from '../redux/slices/cartSlice.js'
import Rating from '../components/Rating.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'
import Style from '../assets/style/productScreen.module.css'


const ProductScreen = () => {

  const [imgIndex, setImgIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const {id:productId} = useParams();
  const {data:product,isLoading,isError} = useGetProductQuery(productId);
  const dispatch = useDispatch();
  const navigate =  useNavigate();

  const addToCartHandler = ()=>{
    dispatch(addToCart({...product, qty}))
    navigate('/cart')
  }

  return (
    <>
    {console.log(product)}

    {isLoading? <Loader/> : isError ? <Message variant='danger'>{isError?.data?.error|| isError?.error}</Message>:
    <><Link className='btn btn-light my-3' to="/">To Home Pages</Link>
    <Row>
    <Col md={5}>
        <Image src={product?.images?.[imgIndex]} alt={product?.name} fluid/>
    </Col>
    <Col md={4}>
       <ListGroup variant='flush'>
        <ListGroup.Item>
            <h3>{product?.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
            <Rating value={product?.rating} text={`${product?.numReviews} reviews`}/>
        </ListGroup.Item>
        <ListGroup.Item>
            <strong>Price:</strong> ${product?.price}
        </ListGroup.Item>
        <ListGroup.Item> <strong>Description:</strong> <br/>{product?.description}</ListGroup.Item>
       </ListGroup>
    </Col>
    <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
         <ListGroup.Item>
            <Row>
                <Col>Price:</Col>
                <Col><strong>{`$ ${product?.price}`}</strong></Col>
            </Row>
         </ListGroup.Item>

         <ListGroup.Item>
            <Row>
                <Col>Status:</Col>
                <Col>{product?.countInStock>0?"In Stock":"Out of Stock"}</Col>
            </Row>
         </ListGroup.Item>
         {product.countInStock > 0 && (
            <ListGroup>
                <Row style={{boxSizing:"border-box",padding:"10px"}}>
                    <Col>Qty:</Col>
                    <Col>
                    <FormControl  style={{width:"200px", textAlign:"center"}} as="select" value={qty} onChange={(e)=>{setQty(Number(e.target.value))}} >
                       {[...Array(product.countInStock).keys()].map(x=> <option key={x*6} value={x+1}>{x+1}</option>)}

                    </FormControl>
                    </Col>
                </Row>
            </ListGroup>
         )}
         <ListGroup.Item>
            <Button className='btn-block' type='button' disabled={product?.countInStock === 0} onClick={addToCartHandler}>Add To Cart</Button>
         </ListGroup.Item>
         </ListGroup>
        </Card>
    </Col>
</Row>
<Row className={`${Style.img_wrapper} fluid`} >
    {product?.images?.length>1?(product.images.map((value,index) => {
        return <Image key={value+index} src={value} className={Style.img} onClick={()=>{setImgIndex(index)}} />  
    })):<Col>No More Info</Col>}
   
</Row>
</>
 }    </>
  )
}

export default ProductScreen
