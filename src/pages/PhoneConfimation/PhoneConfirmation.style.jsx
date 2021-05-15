import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const BackIcon = styled.img`
  width: 20px;
`;

export const NextButton = styled(Link)`
  background-color: var(--btnBgColor);
  color: #ffff;
  border-radius: 2em;
  padding: 0.5em 1.5em;
  font-size: 1.2em;
  font-weight: 500;
  font-style: normal;
  text-align: center;
`;

export const NextIcon = styled.img`
  margin-left: 0.5em;
`;
