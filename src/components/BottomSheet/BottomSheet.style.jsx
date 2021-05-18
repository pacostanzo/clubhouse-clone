import styled from 'styled-components';

export const BottomSheetContainer = styled.div`
  background-color: ${(props) =>
    props.sheetTitle === 'profile' ? 'transparent' : '#ffffff'};
  border-radius: 1.5em 1.5 em 0 0;
  padding: 1.5em 1em;
  position: relative;
  height: 100%;
`;
