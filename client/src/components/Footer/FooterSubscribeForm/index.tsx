import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSubscriber } from "../../../api/subscriber";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../../styles/UI/Alert/index.styled";
import { FooterSubscribeBox, FooterSubscriberInputBox } from "./index.styled";

const FooterSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateSuccessfull, setIsUpdateSuccessfull] = useState(false);

  const handleSubscribeClick = async () => {
    try {
      setIsLoading(true);
      const subscribeRespose = await createSubscriber(email);
      console.log(subscribeRespose);
      setIsLoading(false);
      setIsUpdateSuccessfull(true);
      setError(["You subscribed successfully!"]);
      setEmail("");
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError([err.response?.data?.error]);
      }
      console.error(err.response);
      setIsLoading(false);
      setIsUpdateSuccessfull(false);
    }
  };
  const handleUpdateEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };
  return (
    <FooterSubscribeBox isLoading={isLoading}>
      {error &&
        error.map((err, index) => (
          <Alert success={isUpdateSuccessfull}>
            <AlertText style={{ marginBottom: "0" }}>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              X
            </AlertCancelBtn>
          </Alert>
        ))}
      <FooterSubscriberInputBox>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={handleUpdateEmailChange}
          value={email}
        />
        <button
          onClick={handleSubscribeClick}
          disabled={isLoading ? true : false}
        >
          {isLoading ? "SUBSCRIBING..." : "SUBSCRIBE NOW"}
        </button>
      </FooterSubscriberInputBox>
    </FooterSubscribeBox>
  );
};

export default FooterSubscribeForm;
