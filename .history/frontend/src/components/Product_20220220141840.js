import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  const arrayBufferToBase64=(buffer)=> {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));        bytes.forEach((b) => binary += String.fromCharCode(b));        return window.btoa(binary);
  };
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">NIS {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
