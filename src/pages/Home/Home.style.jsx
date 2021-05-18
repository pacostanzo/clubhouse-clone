import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding-top: 3.5em;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 3.5em;
  height: 100%;
  overflow: auto;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4em 1.5em 2em 1.5em;
  position: sticky;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  background-image: linear-gradient(transparent 20%, #f2f0e4 80%);

  & button {
    background-color: transparent;
    border: none;
    margin-left: auto;

    & svg {
      font-size: 1.3em;
    }
  }

  & > button:first-child {
    border-radius: 2em;
    background-color: #28ae61;
    color: #ffffff;
    padding: 0.3em 1em;
    font-size: 1.1em;
    font-weight: 400;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  & > button:nth-child(2) {
    line-height: 1;
  }
  & > button:nth-child(2) > svg {
    color: var(--textColor);
  }
`;

export const HomeLoader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
