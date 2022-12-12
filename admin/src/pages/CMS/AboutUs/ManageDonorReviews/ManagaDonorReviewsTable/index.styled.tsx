import styled from "styled-components";

const ManageDonorReviewsTableBtnBox = styled.div`
  display: flex;
  align-items;
`;

const ManageDonorReviewsTableBtn = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: transparent;
`;
const ManageDonorReviewsTableEditBtn = styled(ManageDonorReviewsTableBtn)`
  & a {
    margin-right: 20px;
    color: #6777ef;
  }
`;
const ManageDonorReviewsTableDeleteBtn = styled(ManageDonorReviewsTableBtn)`
  color: #ed1818;
`;
const ManageDonorReviewsTableTitle = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, calc(3vw + 1rem), 2rem);
  color: #fff;
`;

export {
  ManageDonorReviewsTableBtnBox,
  ManageDonorReviewsTableEditBtn,
  ManageDonorReviewsTableDeleteBtn,
  ManageDonorReviewsTableTitle,
};
