import styled, { css } from "styled-components";
import { COLORS } from "./common/Colors";

export default function Tabs({ activeMember, setActiveMember }) {
  const onActiveMember = (event) => {
    if (event.target === event.currentTarget) return;
    setActiveMember(event.target.textContent);
  };
  return (
    <StSection>
      <h2>Members</h2>
      <TabsWrapper onClick={onActiveMember}>
        <Tab $activeMember={activeMember}>
          <img src={require(`assets/아이유.jpg`)} alt="아이유" />
          <p>아이유</p>
        </Tab>
        <Tab $activeMember={activeMember}>
          <img src={require(`assets/장만월.jpg`)} alt="장만월" />
          <p>장만월</p>
        </Tab>
        <Tab $activeMember={activeMember}>
          <img src={require(`assets/이지안.jpg`)} alt="이지안" />
          <p>이지안</p>
        </Tab>
        <Tab $activeMember={activeMember}>
          <img src={require(`assets/신디.jpg`)} alt="신디" />
          <p>신디</p>
        </Tab>
        <Tab $activeMember={activeMember}>
          <img src={require(`assets/해수.jpg`)} alt="해수" />
          <p>해수</p>
        </Tab>
      </TabsWrapper>
    </StSection>
  );
}
const StSection = styled.section`
  padding: 0 3rem 2rem;
  width: 100%;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
    padding: 1rem;
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2rem;
    border-radius: 10px;
    color: ${COLORS.royal};
    background: repeating-linear-gradient(
      -45deg,
      ${COLORS.light},
      ${COLORS.lilac} 3px,
      ${COLORS.mauve} 3px,
      ${COLORS.pastel} 7px
    );
    box-shadow: ${COLORS.light} 5px 5px, ${COLORS.pastel} 10px 10px,
      ${COLORS.lavender} 15px 15px;
  }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Tab = styled.div`
  background-color: ${(props) =>
    props.$activeMember === props.children.p ? COLORS.lilac : "white"};
  color: ${(props) =>
    props.$activeMember === props.children.p ? "white" : COLORS.royal};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  box-shadow: rgba(93, 10, 100, 0.2) 0px 7px 29px 0px;
  transition: all 0.1s ease-in-out;
  border: 5px double ${COLORS.royal};

  & img {
    width: 150px;
    height: 220px;
  }

  &:nth-child(even) {
    rotate: 2deg;
  }
  &:nth-child(odd) {
    rotate: -1deg;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
