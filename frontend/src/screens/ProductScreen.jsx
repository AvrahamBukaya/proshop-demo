import {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import { Row, Col,Image,ListGroup,Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating.jsx'
import axios from 'axios'
import Style from '../assets/style/productScreen.module.css'


const ProductScreen = () => {

  const [product, setproduct] = useState({})
  const [imgIndex, setImgIndex] = useState(0);
  const {id:productId} = useParams();

  const fetchProduct = async(prd_id)=>{
    const {data} =  await axios.get(`/api/products/${prd_id}`);
    setproduct(data)
  }

  useEffect(()=>{

    fetchProduct(productId)


  },[productId]);

  return (
    <>
    
    
    <Link className='btn btn-light my-3' to="/">To Home Pages</Link>
    <Row>
        <Col md={5}>
            <Image src={product?.images?.[imgIndex]} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
           <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
                <strong>Price:</strong> ${product.price}
            </ListGroup.Item>
            <ListGroup.Item> <strong>Description:</strong> <br/>{product.description}</ListGroup.Item>
           </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
             <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col><strong>{`$ ${product.price}`}</strong></Col>
                </Row>
             </ListGroup.Item>

             <ListGroup.Item>
                <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock>0?"In Stock":"Out of Stock"}</Col>
                </Row>
             </ListGroup.Item>
             <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
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
  )
}

export default ProductScreen
