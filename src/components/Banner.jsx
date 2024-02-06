import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "./common/Colors";
import bannerImg from "assets/banner.jpeg";

export default function Banner({ activeMember, setActiveMember }) {
  return (
    <>
      <Container>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          HOME
        </NavLink>
        <Title>IU Metaverse</Title>
        <BannerImg />
      </Container>
      <Tabs activeMember={activeMember} setActiveMember={setActiveMember} />
    </>
  );
}

const Container = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 24px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${COLORS.royal};
`;

const BannerImg = styled.section`
  width: 800px;
  height: 300px;
  padding: 0 3rem 2rem;
  margin: 0 auto;
  height: 50vh;
  border: 6px double ${COLORS.royal};
  background: no-repeat url(${bannerImg});
  background-size: 100% 100%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    background-size: cover;
  }

  @media screen and (min-width: 2000px) {
    height: 30vh;
  }
`;
