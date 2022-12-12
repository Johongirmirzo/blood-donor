import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../../redux/store";
import { updateValue } from "../../../../../redux/home-page";
import { updateValue as editValue } from "../../../../../api/home-page";
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

const ValueForm = () => {
  const dispatch = useDispatch();
  const ourValue = useSelector((state: RootState) => state.homePage.value);
  const [error, setError] = useState<string[]>([]);
  const [fieldError, setFieldError] = useState("");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  useEffect(() => {
    setValue(ourValue);
  }, [ourValue]);

  const isValidationSuccess = (value: string) => {
    if (value.trim().length < 10) {
      setFieldError("Minimum allowed value length is 10");
      return false;
    } else if (value.trim().length > 500) {
      setFieldError("Maximum allowed value length is 500");
      return false;
    } else {
      return true;
    }
  };
  const handleUpdateValueSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (isValidationSuccess(value)) {
      try {
        setIsLoading(true);
        const valueResponse = await editValue(value);
        console.log(valueResponse);
        dispatch(updateValue({ value: valueResponse.data }));
        setIsLoading(false);
        setError(["Value is updated successfully!"]);
        setIsUpdateSuccessfull(true);
      } catch (err: any) {
        console.error(err.response);
        setIsLoading(false);
        setIsUpdateSuccessfull(false);
      }
    }
  };
  const handleUpdateValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (value.trim().length > 10 && value.trim().length < 500) {
      setFieldError("");
    } else if (value.trim().length < 10) {
      setFieldError("Minimum allowed value length is 10");
    } else if (value.trim().length > 500) {
      setFieldError("Maximum allowed value length is 500");
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

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
      <Form onSubmit={handleUpdateValueSubmit}>
        <FormControl>
          <FormLabel htmlFor="value">Value</FormLabel>
          <FormInput
            type="text"
            placeholder="Enter value"
            onChange={handleUpdateValueChange}
            value={value}
          />
          {fieldError && <FormFieldError>{fieldError}</FormFieldError>}
        </FormControl>
        <FormButton
          type="submit"
          isLoading={isLoading ? true : false}
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Updating Value..." : "Update Value"}
        </FormButton>
      </Form>
    </>
  );
};

export default ValueForm;
