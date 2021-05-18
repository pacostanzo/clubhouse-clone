import styled from 'styled-components';

export const SwitchLine = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX('-50%');
  height: 4px;
  width: 40px;
  background-color: #cccccc;
  border-radius: 1em;
`;

export const AddTopicContainer = styled.div`
  text-align: end;
`;

export const AddTopicButton = styled.button`
  background-color: transparent;
  border: none;
  color: #28ae61;
`;

export const SelectRoom = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 1.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    border: none;
    background-color: transparent;
    border-radius: 1em;
    padding: 0.5em 1.3em 0.2em 1.3em;
    color: var(--textColor);
    line-height: 1.2;

    & div {
      background-color: lightgreen;
      border-radius: 1.5em;
    }
    & svg {
      font-size: 4em;
    }
  }

  & button.active {
    border: 1px solid lightgreen;
    background-color: ligthblue;
  }
`;

export const StartRoomParagraph = styled.p`
  font-size: 1em;
  color: var(--textColor);
  text-align: center;
  font-weight: 500;
`;

export const LetsGoContainer = styled.div`
  text-align: center;
`;

export const LetsGoButton = styled.button`
  font-size: 1.3em;
  font-weight: 500;
  border: none;
  border-radius: 2em;
  color: #ffffff;
  background-color: #28ae61;
  padding: 0.3em 2em;
  text-align: center;
`;
