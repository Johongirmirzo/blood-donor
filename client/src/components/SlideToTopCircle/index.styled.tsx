import styled, { css } from "styled-components";

interface ISlideToTopProps {
  isActive: boolean;
}

const SlideToTopBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ef3d32;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  opacity: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-out;
  ${(props: ISlideToTopProps) =>
    props.isActive &&
    css`
      opacity: 1;
    `}
`;

export { SlideToTopBtn };
