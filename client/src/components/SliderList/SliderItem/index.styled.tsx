import styled, { css } from "styled-components";
import { Button } from "../../../styles/UI/Button/index.styled";

interface ISliderBoxProps {
  sliderImg: string;
}
const SliderItemBox = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-blend-mode: multiply;
  ${(props: ISliderBoxProps) =>
    props.sliderImg &&
    css`
      background: url(${props.sliderImg}),
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
    `}
  @media (min-width: 768px) {
    ${(props: ISliderBoxProps) =>
      props.sliderImg &&
      css`
        background-position: center;
      `}
  }
`;
const SliderItemTextBox = styled.div`
  max-width: 660px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 768px) {
    margin: 0;
    margin-left: 210px;
  }
`;
const SliderItemTitle = styled.h1`
  margin-bottom: 15px;
  font-size: clamp(2rem, calc(5vw + 1rem), 4rem);
`;
const SliderItemDescription = styled.p`
  margin-bottom: 15px;
  font-size: clamp(1.5rem, calc(5vw + 1rem), 2rem);
`;
const SliderItemBecomDonrBtn = styled(Button)`
  background: #ef3d32;
  color: #fff;
  &:hover {
    background: hsl(3, 75%, 50%);
  }
`;

export {
  SliderItemBox,
  SliderItemTextBox,
  SliderItemTitle,
  SliderItemDescription,
  SliderItemBecomDonrBtn,
};
