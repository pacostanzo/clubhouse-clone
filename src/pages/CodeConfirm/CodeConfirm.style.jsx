import styled from 'styled-components';

export const CodeConfirmContainer = styled.div`
  padding: 3em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f0e4;
  position: relative;
  text-align: center;
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 250px;
  margin-bottom: '1em';
`;

export const CodeInput = styled.input`
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
`;

export const Paragraph = styled.p`
  margin-top: 1em;
`;

export const ResetButton = styled.span`
  font-weight: 600;
`;
