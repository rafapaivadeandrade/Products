import React, { useRef } from "react";
import { PageLanding, ContentWrapper } from "./styles";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/Form/Input";
import getValidationErrors from "../../utils/getValidationErrors";
import Button from "../../components/Form/Button";
import api from "../../services/api";
export default function Landing({ history }) {
  const formRef = useRef(null);
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail is obligatory")
          .email("Type a valid e-mail"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post("/sessions", {
        email: data.email,
      });
      const { _id } = response.data;
      localStorage.setItem("user_id", _id);

      history.push("/dashboard");

      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <PageLanding>
      <ContentWrapper>
        <p>
          <strong>Type any email to login</strong>
        </p>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="email">E-Mail</label>
          <Input type="email" name="email" placeholder="Your best e-mail" />
          <Button type="submit" className="btn">
            Join
          </Button>
        </Form>
      </ContentWrapper>
    </PageLanding>
  );
}
