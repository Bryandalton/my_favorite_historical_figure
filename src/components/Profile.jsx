import styled from "styled-components";

const ProfileFrame = styled.div`
  /* border: 1px solid blue; */
  flex: 1;
`;
export default function Profile({ wiki }) {
  return (
    <ProfileFrame>
      <iframe width="99%" height="99.5%" src={wiki} />
    </ProfileFrame>
  );
}
