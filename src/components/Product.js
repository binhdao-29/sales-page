import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

export default function (props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProducts(res.data)
    });
  }, [])

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