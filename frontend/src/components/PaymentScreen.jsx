import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../components/FormContainer";
import CheckoutSteps from "./CheckoutSteps";
import { Form } from "react-bootstrap";
const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal   ");
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>

      <Form>
        <Form.Group></Form.Group>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
