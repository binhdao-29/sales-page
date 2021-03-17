import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";


export default function (props) {
  const [products, setProducts] = useState([]);

  return (
    <Container>
      <h2>Product</h2>
      <Row>
        {
          products.map( product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.imgUrl} />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}