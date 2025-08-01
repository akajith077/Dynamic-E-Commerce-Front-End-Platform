import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"; // Import ListGroup for the sidebar
import { LifeLine } from "react-loading-indicators";
import { MdAddShoppingCart } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import useFetch from "./custom-hook/useFetch";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux"; //this hook helps to useReducer to trigger the action
import { addItem } from "../store/cartSlice";

const Product = () => {
  const navigate = useNavigate();

  // Renamed for clarity: `allProducts` is the master list from the API
  const {
    products: allProducts,
    error,
    isLoading,
    setProducts: setAllProducts,
  } = useFetch("http://localhost:4000/products");

  // State for category filtering
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // --- Start of New Logic for Filtering ---

  // Effect to extract unique categories once allProducts are fetched
  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const uniqueCategories = [
        "All",
        ...new Set(allProducts.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [allProducts]);

  // Effect to filter products whenever the selected category or the master product list changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, allProducts]);

  // --- End of New Logic for Filtering ---



  const dispatch = useDispatch();
  // Corrected typo: state.cart instead of state.carzt, to match your store.js
  const cartState = useSelector((state) => {
    return state.cart;
  });

  const addItemToCart = (product) => {
    const checkProduct = cartState.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!checkProduct) {
      Swal.fire({
        title: "Add this item to your cart?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(addItem(product));
          Swal.fire("Added!", "The product has been added.", "success");
        }
      });
    } else {
      Swal.fire({
        title: "Already in Cart",
        text: "This product is already in your cart.",
        icon: "info",
      });
    }
  };

  if (isLoading) {
    return (
      <center style={{ marginTop: "5rem" }}>
        <LifeLine
          color="#32cd32"
          size="large"
          text="Loading"
          textColor="#17c716"
        />
      </center>
    );
  }

  return (
    <div>
      {/* Main container for sidebar and products */}
      <div style={{ display: "flex" }}>
        {/* --- Sidebar for Categories --- */}
        <aside style={{ width: "200px", flexShrink: 0, marginTop:"20px"}}>
          
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                key={category}
                action
                active={category === selectedCategory}
                onClick={() => setSelectedCategory(category)}
                style={{ cursor: "pointer" }}
              >
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </aside>

        {/* --- Main content area for products --- */}
        <main style={{ flexGrow: 1 }}>
          {error && <p className="text-danger">{error}</p>}
          
          {filteredProducts.length > 0 ? (
            <section className="products">
              {/* IMPORTANT: Map over `filteredProducts` now, not `products` */}
              {filteredProducts.map((product) => (
                <Card
                  style={{ width: "25rem" }}
                  className="product"
                  key={product.id}
                >
                  <center>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "9rem", height: "12rem", marginTop: "1rem" }}
                    />
                  </center>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text
                      style={{
                        overflowY: "auto", // Changed to auto for better look
                        height: "150px",
                        fontSize: "16px",
                      }}
                    >
                      {product.description}
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text as="h5">${product.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => addItemToCart(product)}
                    >
                      Add To Cart
                    </Button>
     
                  </Card.Footer>
                </Card>
              ))}
            </section>
          ) : (
            // Show a message if no products match the filter
            !isLoading && <p>No products found in this category.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Product;