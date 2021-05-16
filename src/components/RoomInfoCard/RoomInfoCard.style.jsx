import styled from 'styled-components';

export const RoomInfoCardContainer = styled.div`
  background-color: #ffffff;
  padding: 1em 1em;
  border-radius: 1em;
  border: none;
  margin-top: 0.5em;

  & h6 {
    font-size: 0.675em;
    color: var(--textColor);
    font-weight: 500;
  }

  & h2 {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1;
    color: #000000;
  }
`;

export const RoomMembers = styled.div`
  display: flex;
  align-items: flex-start;

  & img {
    width: 35px;
    height: 35px;
    border-radius: 0.6em;
  }

  & p {
    font-size: 0.975em;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0.5em;
    color: var(--textColor);
  }

  & > div:first-child {
    position: relative;
    margin-right: 2em;
  }

  & > div:first-child > img:nth-child(2) {
    position: absolute;
    left: 1em;
    top: 1em;
  }
`;
