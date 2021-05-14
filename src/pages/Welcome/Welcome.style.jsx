import styled from 'styled-components';

export const WelcomePageContainer = styled.div`
  padding: 3em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  background-color: #f2f0e4;
`;

export const WelcomePageTitle = styled.h1`
  font-size: 1.7em;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 0;
  color: var(--textColor);
`;

export const WelcomePageInfoContainer = styled.div`
  height: 253px;
  overflow: auto;
`;

export const WelcomePageInfoParagraph = styled.p`
  margin-bottom: 2em;
  color: var(--textColor);
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
`;

export const WelcomePageActionButtonsContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > a:last-child {
    color: var(--btnBgColor);
    font-size: 0.875em;
    font-weight: 400;
    font-style: normal;
  }
`;
