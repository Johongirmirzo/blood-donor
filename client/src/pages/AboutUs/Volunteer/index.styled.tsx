import styled, { css } from "styled-components";

interface IVolunteerSectionProps {
  bgImage: string;
}

const VolunteerSection = styled.section`
  padding: 150px 0;
  ${(props: IVolunteerSectionProps) =>
    props.bgImage &&
    css`
      background: url(${props.bgImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
`;
const VolunteerContainer = styled.div`
  max-width: 1160px;
  width: 90%;
  margin: 0 auto;
`;
const VolunteerHeader = styled.header`
  text-align: center;
`;
const VolunteerTitle = styled.h2`
  font-size: clamp(2rem, calc(5vw + 1rem), 3.5rem);
`;
const VolunteerDescription = styled.p`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, calc(2.5vw + 1rem), 1.8rem);
`;
const VolunteerListBox = styled.div`
  margin-top: 80px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

export {
  VolunteerSection,
  VolunteerContainer,
  VolunteerHeader,
  VolunteerTitle,
  VolunteerDescription,
  VolunteerListBox,
};
