import React from 'react'
import { Card } from 'react-bootstrap'

const prd = ({prd}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/prds/${prd._id}`}>
        <Card.Title as="div">
            {prd.name}
        </Card.Title>
      </a>
    <Card.Body>
        <a href={`/prd/${prd._id}`}>
          <Card.Title as="div">
            <strong>{prd.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">
            ${prd.price}

        </Card.Text>
    </Card.Body>

    </Card>
  )
}

export default prd
