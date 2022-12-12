import styled from "styled-components";

const PaginationFilterBox = styled.div`
  margin-top: 15px;
`;
const PaginationFilterLabel = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
  color: #fff;
`;
const PaginationFilterSelect = styled.select`
  width: 100px;
  margin-left: 10px;
  padding: 10px;
  background: #1a202e;
  border: 2px solid transparent;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(2555, 2555, 2555, 0.1);
  outline: 0;
`;

export { PaginationFilterBox, PaginationFilterLabel, PaginationFilterSelect };
