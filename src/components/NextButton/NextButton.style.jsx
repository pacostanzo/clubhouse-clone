import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NextButtonContainer = styled(Link)`
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
