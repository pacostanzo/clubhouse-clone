import styled from 'styled-components';

export const PhoneConfirmationContainer = styled.div`
  padding: 3em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f0e4;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 0;
  color: var(--textColor);
`;

export const Paragraph = styled.p`
  font-size: 0.775em;
  font-weight: 400;
  margin: 0;
  width: 100%;
  max-width: 270px;
  text-align: center;
  justify-content: space-evenly;
`;

export const TermsOfService = styled.span`
  font-weight: 600;
`;
