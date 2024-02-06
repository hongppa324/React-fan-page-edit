import Banner from "components/Banner";
import AddForm from "components/AddForm";
import LetterList from "components/LetterList";
import Footer from "components/Footer";
import { useState } from "react";
import styled from "styled-components";

export default function Home({ letters, setLetters }) {
  const [activeMember, setActiveMember] = useState("아이유");

  return (
    <Container>
      <Banner activeMember={activeMember} setActiveMember={setActiveMember} />
      <AddForm setLetters={setLetters} />
      <LetterList letters={letters} activeMember={activeMember} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
