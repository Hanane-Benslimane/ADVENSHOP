import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
const Product = ({ product }) => {
  return (
    <Card className="product my-3 p-2 rounded">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="bottom"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as="h3" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            ratingValue={product.rating}
            numReviews={product.numReviews}
          ></Rating>
        </Card.Text>
        <Card.Text as="h5">{product.price}$</Card.Text>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
