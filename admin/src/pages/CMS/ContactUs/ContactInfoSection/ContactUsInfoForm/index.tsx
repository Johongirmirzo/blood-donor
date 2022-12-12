import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateContactUsInfo } from "../../../../../redux/contact-page";
import { updateContactUsInfo as editContactUsInfo } from "../../../../../api/contact-page";
import { IContactInfo } from "../../../../../types/contact-us-page";
import contactUsInfoSchema from "../../../../../schemas/contactUsInfoSchema";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../../../styles/UI/Alert/index.styled";

const ContactUsInfoForm = () => {
  const dispatch = useDispatch();
  const contactUsInfo = useSelector(
    (state: RootState) => state.contactUsPage.contactInfo
  );
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateFaqSubmit = async (contactUsInfoData: IContactInfo) => {
    try {
      setIsLoading(true);
      const contactUsResponse = await editContactUsInfo(contactUsInfoData);

      setIsLoading(false);
      dispatch(
        updateContactUsInfo({
          contactUsInfo: { ...contactUsResponse.data },
        })
      );
      setError(["Contact us info is updated successfully!"]);
      setIsUpdateSuccessfull(true);
    } catch (err: any) {
      console.error(err.response);
      setError(["Please fill all input fields"]);
      setIsUpdateSuccessfull(false);
      setIsLoading(false);
    }
  };
  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  console.log(contactUsInfo, isUpdateSuccessfull);
  return (
    <>
      {error &&
        error.map((err, index) => (
          <Alert success={isUpdateSuccessfull}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          helpEmail: contactUsInfo.helpEmail || "",
          supportEmail: contactUsInfo.supportEmail || "",
          address: contactUsInfo.address || "",
          officePhoneNumber: contactUsInfo.officePhoneNumber || "",
          cellPhoneNumber: contactUsInfo.cellPhoneNumber || "",
        }}
        onSubmit={(faqData) => {
          handleCreateFaqSubmit(faqData);
        }}
        validationSchema={contactUsInfoSchema}
      >
        {({ handleSubmit, handleChange, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="helpEmail">Help Email</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter Help Email"
                id="helpEmail"
                name="helpEmail"
                onChange={handleChange}
                value={values.helpEmail}
              />
              {errors.helpEmail && touched.helpEmail ? (
                <FormFieldError>{errors.helpEmail}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="supportEmail">Support Email</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter Support Email"
                id="supportEmail"
                name="supportEmail"
                onChange={handleChange}
                value={values.supportEmail}
              />
              {errors.supportEmail && touched.supportEmail ? (
                <FormFieldError>{errors.supportEmail}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="address">Address</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter Address"
                id="address"
                name="address"
                onChange={handleChange}
                value={values.address}
              />
              {errors.address && touched.address ? (
                <FormFieldError>{errors.address}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="officePhoneNumber">
                Office Phone Number
              </FormLabel>
              <FormInput
                type="text"
                placeholder="Enter Office Phone Number"
                id="officePhoneNumber"
                name="officePhoneNumber"
                onChange={handleChange}
                value={values.officePhoneNumber}
              />
              {errors.officePhoneNumber && touched.officePhoneNumber ? (
                <FormFieldError>{errors.officePhoneNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="cellPhoneNumber">Cell Phone Number</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter Cell Phone Number"
                id="cellPhoneNumber"
                name="cellPhoneNumber"
                onChange={handleChange}
                value={values.cellPhoneNumber}
              />
              {errors.cellPhoneNumber && touched.cellPhoneNumber ? (
                <FormFieldError>{errors.cellPhoneNumber}</FormFieldError>
              ) : null}
            </FormControl>
            <FormButton
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading
                ? "Updating Contact Us Info..."
                : "Update Contact Us Info"}
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactUsInfoForm;
