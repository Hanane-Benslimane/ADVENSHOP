import React, { Fragment, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { id: productID } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductDetailsQuery(productID);

  const addToCartHandler = () => {
    //? make sure the ...product and qty are in a object
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };
  return (
    <div className="container">
      <Link className="btn btn-light my-3" to={"/"}>
        Go back
      </Link>
      {isLoading ? (
        <Loader></Loader>
      ) : error ? (
        <Message>{error?.data?.message || error.error}</Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.image} fluid></Image>
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item variant="flush">
                <Rating
                  key={product._id}
                  ratingValue={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>

                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In stock" : "Out of stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock >= 1 && (
                  <ListGroup.Item>
                    <Row className="text-center">
                      <Col>Quantity:</Col>
                      <Col className="text-center">
                        <Form.Label>
                          <strong>{qty}</strong>
                        </Form.Label>
                        <Form.Range
                          onChange={(event) => {
                            setQty(Number(event.target.value));
                          }}
                          min={Number(1)}
                          max={Number(product.countInStock)}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item className="text-end">
                  <Button
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;
