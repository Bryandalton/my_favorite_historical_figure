import { useState } from "react";
import styled from "styled-components";

const BattleBtnStyle = styled.button`
  background-color: #242424;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;

  &.activeToggle {
    box-shadow: inset white 1px 1px 10px 4px;
  }
`;

const FiguresBtnStyle = styled.button`
  background-color: #242424;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;

  &.activeToggle {
    box-shadow: inset white 1px 1px 5px 4px;
  }
`;

export default function BattleToggle() {
const [isBattle, setIsBattle] = useState(false)

  const handleToggle = () => {
    setIsBattle(!isBattle);
  };

  return (
    <div>
      <BattleBtnStyle
        isBattle={isBattle}
        className={isBattle && "activeToggle"}
        onClick={handleToggle}
      >
        Battles
      </BattleBtnStyle>
      <FiguresBtnStyle 
      className={!isBattle && "activeToggle"}
      onClick={handleToggle}>
      Figures
      </FiguresBtnStyle>
    </div>
  );
}
