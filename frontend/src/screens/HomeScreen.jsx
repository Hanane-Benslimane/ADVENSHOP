import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Testimonial from "../components/Testimonial";
import Value from "../components/Value";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <Carousel></Carousel>
      <Categories />
      <div className="container">
        <div className="last-posts">
          {isLoading ? (
            <Loader></Loader>
          ) : error ? (
            <Message variant={"danger"}>
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <div>
              <h2>Latest Products</h2>
              <Row>
                {products.slice(0, 4).map((product) => {
                  return (
                    <Col key={product._id} sm={12} md={4} lg={3} lx={3}>
                      <Product className="product" product={product}></Product>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </div>
      </div>
      <Testimonial />
      <Value />
      <button className="top"
        onClick={() => window.scrollTo(0, 0)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
        }}
      >
        <i class="bi bi-chevron-up"></i>
      </button>
    </>
  );
};

export default HomeScreen;
