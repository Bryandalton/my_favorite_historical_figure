import { useState } from "react";
import styled from "styled-components";

const ProfileFrame = styled.div`
  border: 1px solid blue;
  flex: 1;
`;

export default function Profile({wiki}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle= () => {
    setIsOpen(!isOpen)
  }

  return (
    <ProfileFrame>
    <button onClick={handleToggle}>{isOpen ? '<' : '>'}</button>
      <iframe
        width="100%"
        height="100%"
        src={wiki}
        />
    </ProfileFrame>
  );
}