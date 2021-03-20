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

import lighting from '../../img/lighting.svg';

export default function HotItem(props) {
  const [products, setProducts] = useState([]);
  const [isLighting, setLighting] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <h2 style={{marginRight : '10px'}}>Hot Item</h2>
        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif"
              width={32} height={32} />
      </div>
      <Row>
        {
          products.map( product => (
            <Col sm="3">
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