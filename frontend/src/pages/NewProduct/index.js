import React, { useRef } from "react";
import { Container, Content, Header } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Form/Input";
import ImageInput from "../../components/Form/ImageInput";
import getValidationErrors from "../../utils/getValidationErrors";
import Button from "../../components/Form/Button";
import { useProduct } from "../../hooks/RESTApi";

export default function NewProduct() {
  const { createProduct } = useProduct();
  const history = useHistory();
  const formRef = useRef(null);

  async function createNewProduct(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is obligatory"),
        price: Yup.number()
          .typeError("Amount must be a number")
          .min(1, "Minimum amount must be 1"),
        file: Yup.mixed().required("File is obligatory"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      createProduct({
        file: data.file,
        name: data.name,
        price: data.price,
      });
      if (createProduct) {
        alert("Product Registered!");
        history.push("/dashboard");
      } else {
        alert("Error on registering product");
      }

      formRef.current.setErrors({});
      reset();
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
          <h1>Create Product</h1>
        </Header>

        <Form ref={formRef} onSubmit={createNewProduct}>
          <ImageInput name="file" id="thumbnail" />
          <br />
          <Input id="name" name="name" placeholder="Name" />
          <Input id="price" name="price" placeholder="Price" />

          <Button type="submit" className="btn">
            Register
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
