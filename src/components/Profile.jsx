import styled from "styled-components";

const ProfileFrame = styled.div`
  border: 1px solid blue;
  flex: 1;
`;

export default function Profile() {
  return (
    <ProfileFrame>
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://en.wikipedia.org/wiki/Benjamin_Franklin"
        />
    </ProfileFrame>
  );
}