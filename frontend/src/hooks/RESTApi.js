import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([""]);
  const [product, setProduct] = useState([]);
  const [productSelected, setProductSelected] = useState(false);
  async function createProduct({ file, name, price }) {
    const user_id = localStorage.getItem("user_id");
    const datas = new FormData();
    datas.append("thumbnail", file);
    datas.append("name", name);
    datas.append("price", price);

    try {
      await api.post("product", datas, {
        headers: { user_id },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  const loadProduct = useCallback(async () => {
    const product_id = localStorage.getItem("product_id");
    const response = await api.get(`/product/${product_id}`);
    setProduct(response.data);
  }, [product]);

  async function loadProducts() {
    const user_id = localStorage.getItem("user_id");
    const response = await api.get("/products", {
      headers: { user_id },
    });
    setProducts(response.data);
  }

  async function deleteProduct(id) {
    await api.delete(`/product/${id}`);

    setProducts(products.filter((product) => product._id !== id));
  }

  async function logOut() {
    localStorage.clear();
  }

  async function editProduct({ productId, file, name, price, thumbnail }) {
    const user_id = localStorage.getItem("user_id");

    if (!file) {
      const datas = new FormData();
      datas.append("name", name);
      datas.append("price", price);
      try {
        await api.put(`/productnoimage/${productId}`, datas, {
          headers: { user_id },
        });
        alert("Product Edited!");
        return true;
      } catch (err) {
        console.log(err);
        alert("Error on uploading product!");
        return false;
      }
    }
    try {
      const datas = new FormData();
      datas.append("thumbnail", thumbnail);
      datas.append("thumbnail", file);
      datas.append("name", name);
      datas.append("price", price);
      await api.put(`/product/${productId}`, datas, {
        headers: { user_id },
      });
      alert("Product Edited!");
      return true;
    } catch (err) {
      console.log(err);
      alert("Image must be uploaded!");
      return false;
    }
  }

  return (
    <ProductContext.Provider
      value={{
        createProduct: createProduct,
        loadProducts: loadProducts,
        loadProduct: loadProduct,
        deleteProduct: deleteProduct,
        editProduct: editProduct,
        logOut: logOut,
        products: products,
        product: product,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("userProduct must be used within an ProductProvider");
  }

  return context;
}
