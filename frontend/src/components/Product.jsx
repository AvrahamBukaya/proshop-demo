import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Rating from './Rating'
import Style from '../assets/style/product.module.css'

const prd = ({prd}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${prd._id}`}>
       <Card.Img src={prd?.images[0]} variant='top'/>
      </Link>
    <Card.Body>
          <Link to={`/product/${prd._id}`}>
          <Card.Title as="div" className={Style.product_title}>
            <strong>{prd.name}</strong>
          </Card.Title>
          </Link>
       <Card.Text as="div">
          <Rating value={prd.rating} text={prd.numReviews==1?`${prd.numReviews} review`:`${prd.numReviews} reviews`}/>
       </Card.Text>
        <Card.Text as="h3">
            ${prd.price}
        </Card.Text>
    </Card.Body>

    </Card>
  )
}

export default prd
