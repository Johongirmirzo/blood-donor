import React, { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../api/contact-us";
import { IMessage } from "../../../types/message";
import contactUsSchema from "../../../schemas/contactUsSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormTextArea,
  FormFieldError,
} from "../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import { ContactUsFormBtn } from "./index.styled";

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleSendMessageSubmit = async (contactData: IMessage) => {
    try {
      setIsLoading(true);
      await sendMessage(contactData);
      setIsLoading(false);
      setIsUpdateSuccessfull(true);
      setError(["Your message is received! Our team contact you ASAP!"]);
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError([err.response?.data?.error]);
      }
      if (err.response?.data?.length) {
        setError([err.response?.data]);
      }
      setIsUpdateSuccessfull(false);
      setIsLoading(false);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, idx) => idx !== index));
  };
  return (
    <section>
      {error.length &&
        error.map((err, index) => (
          <Alert key={index} success={isUpdateSuccessfull}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              x
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          fullname: "",
          phoneNumber: "",
          email: "",
          message: "",
        }}
        onSubmit={handleSendMessageSubmit}
        validationSchema={contactUsSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="fullname">Full Name</FormLabel>
              <FormInput
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter Full Name"
                onChange={handleChange}
                value={values.fullname}
              />
              {errors.fullname && touched.fullname ? (
                <FormFieldError>{errors.fullname}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <FormInput
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter Phone Number"
                onChange={handleChange}
                value={values.phoneNumber}
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <FormFieldError>{errors.phoneNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <FormFieldError>{errors.email}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextArea
                name="message"
                id="message"
                placeholder="Enter Message"
                onChange={handleChange}
                value={values.message}
              />
              {errors.message && touched.message ? (
                <FormFieldError>{errors.message}</FormFieldError>
              ) : null}
            </FormControl>
            <ContactUsFormBtn
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Sending... message" : "Send Message"}
            </ContactUsFormBtn>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUsForm;
