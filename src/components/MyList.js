import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import myDataList from '../data/myDataList'

function MyList() {
  return (
    <div>
        <Row>
            {myDataList.map((data, index)=>(
                <Col xs={2}>
                     <Card style={{width:'18rem', border:'none', backgroundColor:'darkcyan'}}>
                         <Card.Img src={data.book} variant="top"/>
                         <Card.Body>
                             <Card.Title>{data.title}</Card.Title>
                             <Card.Text>{data.author}</Card.Text>
                         </Card.Body>
                     </Card>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default MyList