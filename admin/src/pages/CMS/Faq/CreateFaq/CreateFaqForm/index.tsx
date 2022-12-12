import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addFaq } from "../../../../../redux/faq-page";
import { createFaq } from "../../../../../api/faq-page";
import { IFaqListData } from "../../../../../types/faq-page";
import faqSchema from "../../../../../schemas/faqSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  FormFieldError,
} from "../../../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/UI/Alert/index.styled";

const CreateFaq = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateFaqSubmit = async (faqData: IFaqListData) => {
    try {
      console.log(faqData);
      setIsLoading(true);
      const faqResponse = await createFaq(faqData);

      setIsLoading(false);
      dispatch(
        addFaq({
          newFaq: { ...faqResponse.data },
        })
      );
      navigate("/cms-manage-faqs");
    } catch (err: any) {
      console.error(err.response);
      setError(["Please fill all input fields"]);
      setIsLoading(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          question: "",
          answer: "",
        }}
        onSubmit={(faqData) => {
          handleCreateFaqSubmit(faqData);
        }}
        validationSchema={faqSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="question">Question</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter Question"
                id="question"
                name="question"
                onChange={handleChange}
                value={values.question}
              />
              {errors.question && touched.question ? (
                <FormFieldError>{errors.question}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="answer">Answer</FormLabel>
              <FormTextArea
                placeholder="Enter Answer"
                id="answer"
                name="answer"
                onChange={handleChange}
                value={values.answer}
              />
              {errors.answer && touched.answer ? (
                <FormFieldError>{errors.answer}</FormFieldError>
              ) : null}
            </FormControl>

            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Faq..." : "Create Faq"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateFaq;
