import styled, { css } from "styled-components";

interface CardProps {
  isCardOpen: boolean;
}

const FaqItemCard = styled.div``;
const FaqItemTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background: #ef3d32;
  color: #fff;
  cursor: pointer;
`;
const FaqItemTitle = styled.p`
  color: #fff !important;
`;
const FaqItemBody = styled.div`
  line-height: 1.7;
  background: #efefef;
  min-height: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-out;
  ${(props: CardProps) =>
    props.isCardOpen &&
    css`
      padding: 15px;
      min-height: min-content;
      max-height: min-content;
      visibility: visible;
    `};
`;
const FaqItemText = styled.p``;

export { FaqItemCard, FaqItemTextBox, FaqItemTitle, FaqItemBody, FaqItemText };
