import { useState } from "react";
import styled from "styled-components";

const HideBtnStyle = styled.button`
    background-color: #242424;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
`;

export default function HideBtn({isOpen, setIsOpen}) {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return <HideBtnStyle onClick={handleToggle}>{isOpen ? "<" : ">"}</HideBtnStyle>;
}
