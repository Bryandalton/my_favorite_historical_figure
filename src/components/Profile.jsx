import styled from "styled-components";

const ProfileFrame = styled.div`
  border: 1px solid blue;
  flex: 1;
`;
export default function Profile({ wiki }) {
  return (
    <ProfileFrame>
      <iframe width="100%" height="100%" src={wiki} />
    </ProfileFrame>
  );
}
