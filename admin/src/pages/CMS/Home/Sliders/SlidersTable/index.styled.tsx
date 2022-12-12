import styled from "styled-components";

const SliderTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const SliderTableEditBtn = styled(SliderTableBtn)`
  & a {
    margin-right: 20px;
    color: #6777ef;
  }
`;
const SliderTableDeleteBtn = styled(SliderTableBtn)`
  color: #ed1818;
`;
const SliderTableImg = styled.img`
  width: 50px;
`;
const SlidersTableTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  SliderTableImg,
  SliderTableBtn,
  SliderTableEditBtn,
  SliderTableDeleteBtn,
  SlidersTableTitle,
};
