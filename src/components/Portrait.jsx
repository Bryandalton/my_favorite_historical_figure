import React from "react";
import styled from "styled-components";

const Portrait = styled.button`
  border: white 1px solid;
  width: 75%;
  color: white;
  margin: 0 auto; //at largest break point centers the cards
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: transparent;

  img {
    width: clamp(70%, 100%, 100%);
    height: 200px;
    object-fit:cover;
    border-radius: 2rem;
  }

  /* .backgroundPortrait {
    background-image: url({img}) 
  } */

  :hover{
    cursor: pointer;
    box-shadow: inset white 1px 1px 10px 4px
  }
`;

export default function PortraitCard({img, name, onClick}) {
  return (
    <Portrait onClick={onClick}>
      <img src={img}/>
      <p>{name}</p>
    </Portrait>
  );
}
