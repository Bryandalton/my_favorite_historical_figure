import { useState, useContext } from "react";
import { AppContext } from "../appcontext";
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
const { mode, setMode } = useContext(AppContext);
console.log(mode)

  const handleToggle = () => {
    setMode(mode === 'battle' ? 'figure' : 'battle')
  };
  const isBattle = mode === 'battle'
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
