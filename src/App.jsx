import { useState } from "react";
import PortraitCard from "./components/Portrait";
import "./App.css";
import styled from "styled-components";
import Map from "./components/Map";
import Profile from "./components/Profile";
import figures from "./assets/data";

// console.log(figures);

const PageWrapper = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
`;
const MainSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 33vw;
  height: auto;
  text-align: center;
  border: 1px solid white;
`;
const PortraitGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 15rem);
  gap: 2rem;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 1350px) {
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  const [curFigure, setFigure] = useState(0);
  const currentFigure = figures[curFigure];
  // console.log(figures)
  console.log(currentFigure.wiki)
  console.log(curFigure)

  return (
    <>
      <PageWrapper>
        <MainSection>
          Profile
          <Profile wiki={currentFigure.wiki}/>
        </MainSection>
        <MainSection>
          Location
          <Map mapCoord={currentFigure.mapCoord}/>
        </MainSection>
        <MainSection>
          Portraits
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
        </MainSection>
      </PageWrapper>
    </>
  );
}

export default App;
