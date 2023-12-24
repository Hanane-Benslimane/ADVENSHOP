import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    //? check if login then proceed to shipping
    navigate("/login?redirect=/shipping");
  };
  return (
    <div className="container">
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty{" "}
              <Link to="/"> Shop today' latest products</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => {
                return (
                  <ListGroup.Item key={item._id}>
                    <Row>
                      <Col md={2}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fluid
                          rounded
                        ></Image>
                      </Col>
                      <Col md={4}>
                        <Link to={`product/${item._id}`}>{item.name}</Link>
                      </Col>

                      <Col md={2}>$ {item.price}</Col>

                      <Col md={3} className="text-center">
                        <Col>Quantity:</Col>
                        <Form.Label>
                          <strong>{item.qty}</strong>
                        </Form.Label>
                        <Form.Range
                          value={item.qty}
                          onChange={(event) => {
                            addToCartHandler(item, Number(event.target.value));
                          }}
                          min={Number(1)}
                          max={Number(item.countInStock)}
                        />
                      </Col>
                      <Col md={1} style={{ textAlign: "center" }}>
                        <Button
                          type="button"
                          variant="light"
                          size="sm"
                          onClick={() => {
                            removeFromCartHandler(item._id);
                          }}
                        >
                          <FaTrash></FaTrash>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                  ) items
                </h4>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={() => checkoutHandler()}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
