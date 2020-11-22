import React, { useState, useRef, useEffect } from "react";
import { Container, Content, Header } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Form/Input";
import ImageInput from "../../components/Form/ImageInput";
import getValidationErrors from "../../utils/getValidationErrors";
import Button from "../../components/Form/Button";
import ProfileDropZone from "../../components/Form/ProfileDropZone";
import { useProduct } from "../../hooks/RESTApi";

export default function EditProduct() {
  const { loadProduct, product, editProduct } = useProduct();
  const history = useHistory();
  const location = useLocation();
  const formRef = useRef(null);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    loadProduct();
    setThumbnail(product.thumbnail);
  }, [loadProduct()]);

  async function editNewProduct(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is obligatory"),
        price: Yup.number()
          .typeError("Amount must be a number")
          .min(1, "Minimum amount must be 1"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const product_id = location.state.product_id;
      editProduct({
        productId: product_id,
        file: data.file,
        name: data.name,
        price: data.price,
        thumbnail: thumbnail,
      });

      if (editProduct) {
        history.push("/dashboard");
      }

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        console.log(errors);
        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <Link to="/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#E02041" />
          </Link>
          <h1>Edit Product</h1>
        </Header>

        <Form ref={formRef} onSubmit={editNewProduct}>
          {/* <ProfileDropZone product={thumbnail} onFileUploaded={setThumbnail} /> */}
          <ImageInput name="file" product={product.thumbnail_url} />
          <br />
          <Input name="name" placeholder="Name" product={product.name} />
          <Input name="price" placeholder="Price" product={product.price} />

          <Button type="submit" className="btn">
            Register
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
