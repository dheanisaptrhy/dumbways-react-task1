import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import contentData from '../data/contentData'

function List() {
  return (
    <>
        <Row>
            {contentData.map((data, index)=>(
                <Col md={2}>
                     <Card style={{width:'18rem'}}>
                         <Card.Img variant="top"/>
                         <Card.Body>
                             <Card.Title>{data.title}</Card.Title>
                             <Card.Text>{data.author}</Card.Text>
                             <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                     </Card>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default List