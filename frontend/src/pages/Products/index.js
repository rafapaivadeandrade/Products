import React, { useState, useEffect } from "react";
import { FiPower, FiTrash2, FiEdit } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { PageProducts, Header, HeaderProduct } from "./styles";
import { useProduct } from "../../hooks/RESTApi";

const Products = () => {
  const { loadProducts, products, deleteProduct, logOut } = useProduct();
  const history = useHistory();

  useEffect(() => {
    loadProducts();
  }, [products]);

  function editProduct(id) {
    localStorage.setItem("product_id", id);
    history.push("/product/edit", { productid: id });
  }

  return (
    <PageProducts>
      <Header>
        <span>
          <Link className="button" to="/product/new">
            Register Product
          </Link>
        </span>
        <Link className="button" to="/product/new"></Link>
        <button
          type="button"
          onClick={() => {
            logOut() ? history.push("/") : history.push("/");
          }}
        >
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Products</h1>
      {products.length > 0 ? null : <div>Products' list is empty.</div>}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <HeaderProduct url={product.thumbnail_url} />
            <strong>Name:</strong>
            <p>{product.name}</p>

            <strong>Price:</strong>
            <p>
              {Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
              }).format(product.price)}
            </p>

            <button type="button" onClick={() => deleteProduct(product.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
            <button type="button" onClick={() => editProduct(product.id)}>
              <FiEdit size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </PageProducts>
  );
};

export default Products;
