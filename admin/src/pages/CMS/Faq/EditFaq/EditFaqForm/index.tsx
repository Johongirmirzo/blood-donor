import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateFaq } from "../../../../../redux/faq-page";
import { editFaq } from "../../../../../api/faq-page";
import { IFaqListData, IFaqList } from "../../../../../types/faq-page";
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

const EditFaqForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const faqList = useSelector((state: RootState) => state.faqPage.faq.faqList);
  const { faqId } = useParams();
  const [currentFaq, setCurrentFaq] = useState({} as IFaqList);
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (faqId) {
      setCurrentFaq(faqList.filter((faq) => faq._id === faqId)[0]);
    }
  }, [faqId, faqList]);

  const handleEditFaqSubmit = async (faqData: IFaqListData) => {
    try {
      if (faqId) {
        setIsLoading(true);
        const faqResponse = await editFaq(faqData, faqId);

        setIsLoading(false);
        dispatch(
          updateFaq({
            editedFaq: { ...faqResponse.data },
          })
        );
        navigate("/cms-manage-faqs");
      }
    } catch (err: any) {
      console.error(err.response);
      setError(["Please fill all input fields"]);
      setIsLoading(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(currentFaq);
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
      {currentFaq?.question && (
        <Formik
          initialValues={{
            question: currentFaq.question || "",
            answer: currentFaq.answer || "",
          }}
          onSubmit={(faqData) => {
            handleEditFaqSubmit(faqData);
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
                  type="text"
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
                {isLoading ? "Editing Faq..." : "Edit Faq"}
              </FormButton>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditFaqForm;
