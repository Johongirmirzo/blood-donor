import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import {
  FaqItemCard,
  FaqItemTextBox,
  FaqItemTitle,
  FaqItemBody,
  FaqItemText,
} from "./index.styled";
import { FaqItemProps } from "./index.types";

const FaqItem = ({ faq }: FaqItemProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const toggleCard = () => setIsCardOpen(!isCardOpen);
  return (
    <FaqItemCard>
      <FaqItemTextBox onClick={toggleCard}>
        {isCardOpen ? <IoIosArrowUp /> : <AiOutlineDown />}
        <FaqItemTitle>{faq.question}</FaqItemTitle>
      </FaqItemTextBox>
      <FaqItemBody isCardOpen={isCardOpen}>
        <FaqItemText>{faq.answer}</FaqItemText>
      </FaqItemBody>
    </FaqItemCard>
  );
};

export default FaqItem;
