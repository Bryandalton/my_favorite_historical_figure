import styled from "styled-components";

const MapFrame = styled.div`
  /* border: 1px solid blue; */
  flex: 1;
`;

export default function Map({ mapCoord }) {
  return (
    <MapFrame>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          src={mapCoord}
        />
    </MapFrame>
  );
}
