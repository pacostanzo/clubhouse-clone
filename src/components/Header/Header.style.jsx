import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: #f2f0e4;

  & img {
    width: 25px;
  }
`;

export const NavigationItems = styled.div`
  & img {
    margin: 0 0.8em;
  }
`;
