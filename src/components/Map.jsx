import styled from "styled-components";

const MapFrame = styled.div`
  /* border: 1px solid blue; */
  flex: 1;
`;

export default function Map({mapCoord}) {
  return (
    <MapFrame>
      <iframe
        width="99%"
        height="99.5%"
        scrolling="no"
        src= {mapCoord}
      ></iframe>
    </MapFrame>
  );
}
