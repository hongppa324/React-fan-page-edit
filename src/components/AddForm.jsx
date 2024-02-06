import styled from "styled-components";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "./common/Button";

export default function AddForm({ setLetters }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("아이유");

  const onAddLetter = (event) => {
    event.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수값입니다.");
    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: null,
      writedTo: member,
      createdAt: new Date(),
    };

    setLetters((prev) => [newLetter, ...prev]);
    setNickname("");
    setContent("");
  };
  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉넴임 :</label>
        <input
          onChange={(event) => setNickname(event.target.value)}
          value={nickname}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <label>내용 :</label>
        <textarea
          onChange={(event) => setContent(event.target.value)}
          value={content}
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>누구에게 보내실 건가요?</label>
        <select onChange={(event) => setMember(event.target.value)}>
          <option>아이유</option>
          <option>장만월</option>
          <option>이지안</option>
          <option>신디</option>
          <option>해수 </option>
        </select>
      </SelectWrapper>
      <Button text="팬레터 등록" />
    </Form>
  );
}

const Form = styled.form`
  background-color: gray;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    height: 80px;
    padding: 12px;
  }
  textarea {
    resize: none;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`;
