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
import classNames from 'classnames';

import './Loading.css';
import { CartContext, CartProvider } from '../context/CartProvider';

export default function Product(props) {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, [])

  return (
    <Container>
      <div style={{textAlign : 'center', marginTop: '10px'}}>
        <h2>Product</h2>
        <div className={classNames('lds-ellipsis', {loaded : isLoaded})}><div></div><div></div><div></div><div></div></div>
      </div>
      <Row>
        {
          products.map( product => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.imgUrl} />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button onClick={addToCart}>Add to cart</Button>
                      )}
                    </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}