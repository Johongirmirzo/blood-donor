import styled from "styled-components";

const VolunteerCard = styled.div`
  margin-bottom: 50px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const VolunteerImage = styled.img`
  display: block;
  height: 400px;
  width: 100%;
`;
const VolunteerBody = styled.div`
  padding: 30px 0;
  text-align: center;
  background: #fff;
  color: #333;
`;
const VolunteerTitle = styled.h3`
  font-size: 22px;
`;
const VolunteerDescription = styled.p`
  margin-top: 10px;
  font-size: 18px;
  text-transform: uppercase;
  color: #666;
`;
const VolunteerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  background: #eeeeee;
  border-top: 1px solid #dadada;
`;
const VolunteerList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  list-style: none;
`;

const VolunteerListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: #fff;
  font-size: 20px;
  & > a {
    color: #ef3d32;
    transition: all 0.3s ease-out;
    &:hover {
      color: hsl(3, 85%, 50%);
    }
  }
`;

export {
  VolunteerCard,
  VolunteerImage,
  VolunteerBody,
  VolunteerTitle,
  VolunteerDescription,
  VolunteerFooter,
  VolunteerList,
  VolunteerListItem,
};
