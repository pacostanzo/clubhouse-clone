import React from 'react';
import { Link } from 'react-router-dom';
import {
  WelcomePageContainer,
  WelcomePageTitle,
  WelcomePageInfoContainer,
  WelcomePageInfoParagraph,
  WelcomePageActionButtonsContainer,
} from './Welcome.style';

const WelcomePage = (props) => {
  return (
    <WelcomePageContainer>
      <WelcomePageTitle>Welcome!</WelcomePageTitle>
      <WelcomePageInfoContainer>
        <WelcomePageInfoParagraph>
          We're working hard to get Clubhouse ready to everyone! While we wrap
          up the finishing touches, we're adding people gradually to make sure
          nothing breaks.
        </WelcomePageInfoParagraph>
        <WelcomePageInfoParagraph>
          Anyone can join with an invite from an existing user - or reserve your
          username and we'll text you if you have a friend on the app who can
          let you in. We are so grateful you're here and can't wait to have you
          join!
        </WelcomePageInfoParagraph>
        <WelcomePageInfoParagraph>
          Paul, Rohan & the Clubhouse team
        </WelcomePageInfoParagraph>
      </WelcomePageInfoContainer>
      <WelcomePageActionButtonsContainer>
        <Link
          exact
          to="/invite"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your username{' '}
        </Link>
        <Link>Have an invite text? Sign in</Link>
      </WelcomePageActionButtonsContainer>
    </WelcomePageContainer>
  );
};
export default WelcomePage;
