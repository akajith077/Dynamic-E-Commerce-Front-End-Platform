// src/components/CartPage.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { MdDelete, MdShoppingCart } from "react-icons/md";
import Swal from 'sweetalert2';
import { removeItem } from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart);
  const total = cartProducts.reduce((sum, product) => sum + product.price, 0).toFixed(2);
  
  const handleRemove = (id) => {
    dispatch(removeItem(id));
    Swal.fire('Removed!', 'The product has been removed from your cart.', 'success');
  };

  const emptyCartView = (
    <div className="text-center py-5" style={{ 
      background: 'white', 
      borderRadius: '1rem', 
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)' 
    }}>
      <MdShoppingCart size={80} className="text-muted mb-3" />
      <h2>Your Cart is Empty</h2>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <Button as={Link} to="/products" variant="primary" size="lg">Start Shopping</Button>
    </div>
  );

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh', padding: '2rem 0' }}>
      <Container>
        <h2 className="mb-4 display-5">Your Shopping Cart</h2>
        {cartProducts.length === 0 ? emptyCartView : (
          <div className="row">
            <div className="col-lg-8">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <ListGroup variant="flush">
                    {cartProducts.map(product => (
                      <ListGroup.Item key={product.id} className="d-flex align-items-center py-3">
                        <Image src={product.image} style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '20px' }} />
                        <div className="flex-grow-1">
                          <strong>{product.title}</strong>
                        </div>
                        <div className="mx-4 fs-5 fw-bold">
                          ${product.price}
                        </div>
                        <Button variant="outline-danger" onClick={() => handleRemove(product.id)}>
                          <MdDelete />
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="fs-4">Order Summary</Card.Title>
                  <ListGroup variant="flush" className="my-3">
                    <ListGroup.Item className="d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span>${total}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between fs-5 fw-bold">
                      <span>Total</span>
                      <span>${total}</span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Button variant="success" size="lg" className="w-100 mt-3">Proceed to Checkout</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;