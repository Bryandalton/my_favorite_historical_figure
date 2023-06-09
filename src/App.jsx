import { useState } from "react";
import PortraitCard from "./components/Portrait";
import "./App.css";
import styled from "styled-components";
import Map from "./components/Map";
import Profile from "./components/Profile";

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
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PageWrapper>
        <MainSection> Profile
          <Profile/>
        </MainSection>
        <MainSection> Location
          <Map/>
        </MainSection>
        <MainSection> Portraits
        <PortraitGrid> 
          <PortraitCard />
          <PortraitCard />
          <PortraitCard />
          <PortraitCard />
          <PortraitCard />
          <PortraitCard />
        </PortraitGrid>
        </MainSection>
      </PageWrapper>
    </>
  );
}

export default App;
