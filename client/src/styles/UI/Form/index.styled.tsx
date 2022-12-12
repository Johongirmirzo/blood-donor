import styled, { css } from "styled-components";
import { ButtonProps } from "./index.types";

const Form = styled.form``;
const FormControl = styled.div`
  margin-bottom: 15px;
`;
const FormLabel = styled.label`
  display: inline-block;
  padding-bottom: 10px;
  color: #444;
  font-weight: 500;
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 8px;
  border: 1px solid #546990;
  background: transparent;
  outline: 0;
  border-radius: 5px;
  font-size: 0.95rem;
  color: #555;
  transition: padding 0.25s ease-out;
  &::placeholder {
    color: #666;
  }
  &:focus {
    padding-left: 15px;
  }
`;
const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  padding: 10px 8px;
  border: 1px solid #546990;
  background: transparent;
  outline: 0;
  border-radius: 5px;
  font-size: 0.95rem;
  color: #555;
  transition: padding 0.25s ease-out;
  &::placeholder {
    color: #666;
  }
  &:focus {
    padding-left: 15px;
  }
  resize: none;
`;
const FormSelect = styled.select`
  display: block;
  width: 100%;
  padding: 10px 8px;
  border: 1px solid #546990;
  background: transparent;
  outline: 0;
  border-radius: 5px;
  font-size: 0.95rem;
  color: #222;
  transition: padding 0.25s ease-out;
  &::placeholder {
    color: #444;
  }
  &:focus {
    padding-left: 15px;
  }
`;
const FormButton = styled.button`
  display: block;
  margin: 20px 0;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  background: #5a8dee;
  ${(props: ButtonProps) =>
    props.isLoading &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
const FormRoutetext = styled.div`
  color: #333;
`;

const FormFieldError = styled.p`
  color: hsl(0, 88%, 50%);
  font-size: 0.9rem;
  margin-top: 2px;
  font-weight: 600;
`;

export {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextArea,
  FormButton,
  FormRoutetext,
  FormFieldError,
};
