import React from "react";
import FaqItem from "./FaqItem";
import { FaqListProps } from "./index.types";

const FaqList = ({ faqs }: FaqListProps) => {
  return (
    <>
      {faqs.map((faq) => (
        <FaqItem key={faq._id} faq={faq} />
      ))}
    </>
  );
};

export default FaqList;
