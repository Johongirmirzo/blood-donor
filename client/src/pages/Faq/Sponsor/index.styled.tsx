import styled from "styled-components";

const SponsorSection = styled.section`
  & header {
    margin-bottom: 50px;
    text-align: center;
  }
  & h2 {
    margin-bottom: 20px;
    color: #555;
    font-size: clamp(1.8rem, calc(4vw + 1rem), 3.5rem);
  }
  & p {
    color: #666;
  }
`;
const SponsorContainer = styled.div`
  max-width: 1160px;
  margin: 100px auto;
`;
const SponsorListGrid = styled.div``;

export { SponsorSection, SponsorContainer, SponsorListGrid };
