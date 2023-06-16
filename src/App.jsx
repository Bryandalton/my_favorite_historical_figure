import { useState } from "react";
import PortraitCard from "./components/Portrait";
import "./App.css";
import styled from "styled-components";
import Map from "./components/Map";
import Profile from "./components/Profile";
import figures from "./assets/data";
import HideBtn from "./components/HideBtn";

const PageWrapper = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
`;
const MainSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* border: 1px solid white; */
  max-width: 100%;
  transition: max-width 1s;

  &.closed {
    max-width: 0%;
  }
`;
const LeftContent = styled.section`
  display: flex;
  flex: 2;
`;
const RightContent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* border: 1px solid white; */
`;
const PortraitGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 15rem);
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  overflow-y: auto;

  @media (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
const HeadSpan = styled.span`
  display: flex;
  justify-content:center;
  gap: 1rem;

  &.closedHead{
    position:relative;
    left: 5rem;
  }
`;

function App() {
  const [curFigure, setFigure] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const currentFigure = figures[curFigure];

  return (
    <>
      <PageWrapper>
        <LeftContent>
          <MainSection className={isOpen && "closed"}>
            <HeadSpan className={isOpen && 'closedHead'}>
              Profile
              <HideBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            </HeadSpan>

            <Profile wiki={currentFigure.wiki} />
          </MainSection>
          <MainSection>
            <HeadSpan>Location</HeadSpan>
            <Map mapCoord={currentFigure.mapCoord} />
          </MainSection>
        </LeftContent>
        <RightContent>
          <HeadSpan>Portraits</HeadSpan>
          <PortraitGrid>
            {figures.map((figure, idx) => {
              return (
                <PortraitCard
                  key={idx}
                  img={figure.img}
                  name={figure.name}
                  onClick={() => {
                    setFigure(idx);
                  }}
                />
              );
            })}
          </PortraitGrid>
        </RightContent>
      </PageWrapper>
    </>
  );
}

export default App;
