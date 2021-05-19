import styled from 'styled-components';

export const RoomDetailContainer = styled.div`
  height: 100%;
  background: #f2f0e4;
  margin: -1.5em -1em;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8em 0.5em 1.5em 0.5em;

  & span {
    font-size: 1em;
    margin-left: 1.2em;
  }

  & svg {
    font-size: 1.4em;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowImage = styled.img`
  width: 15px;
  transform: rotate(-90deg);
  margin-top: 0.5em;
`;

export const ProfileImage = styled.img`
  width: 25px;
  border-radius: 0.8em;
  margin-left: 1.2em;
`;

export const RoomDetailCardContainer = styled.div`
  background-color: #ffffff;
  padding: 1em 1em 3em 1em;
  border-radius: 1.5em 1.5em 0 0;
  height: 90vh;
`;
export const RoomDetailCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  overflow: auto;
  & img {
    width: 70px;
    border-radius: 1.7em;
  }

  & h6 {
    font-size: 0.67em;
    color: var(--textColor);
    font-weight: 500;
    margin-bottom: 0.6em;
  }
`;

export const MemberContainer = styled.div`
  text-align: center;
  width: 70px;
  position: relative;

  & p {
    display: flex;
    align-items: center;
    font-size: 1em;
    font-weight: 500;
    color: #000000;
  }

  & span {
    font-size: 2em;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #28ae61;
    color: #ffffff;
    margin-right: 0.1em;
    line-height: 0.8;
  }
`;

export const AudioIcon = styled.div`
  position: absolute;
  right: -5px;
  bottom: 36px;
  z-index: 5px;
  background-color: #ffffff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 3px #cccccc;

  & svg {
    color: #28ae61;
  }
`;
