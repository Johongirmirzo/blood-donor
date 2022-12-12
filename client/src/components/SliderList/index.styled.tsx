import styled from "styled-components";

const SliderListBox = styled.div`
  & .slick-slider {
    & .slick-arrow {
      opacity: 0;
    }
    & .slick-next {
      right: 5px;
    }
    & .slick-prev {
      left: 5px;
    }
  }
`;

export { SliderListBox };
