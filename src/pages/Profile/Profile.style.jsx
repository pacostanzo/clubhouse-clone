import styled from 'styled-components';

export const ProfilePageContainer = styled.div``;

export const ProfileHeaderContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #f2f0e4;
  z-index: 5;
  padding: 0.5em;
`;

export const ProfileHead = styled.div`
  text-align: right;
  padding: 0.5em 0.5em;
  position: relative;
  margin-bottom: 0;
  & img {
    width: 15px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  & h3 {
    margin: 0;
    font-size: 1.2em;
  }
`;

export const ActionButton = styled.div``;
