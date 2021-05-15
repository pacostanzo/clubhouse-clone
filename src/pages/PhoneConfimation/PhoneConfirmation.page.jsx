import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import {
  PhoneConfirmationContainer,
  Title,
  Paragraph,
  TermsOfService,
  BackButton,
  NextButton,
  BackIcon,
  NextIcon,
} from './PhoneConfirmation.style';

const PhoneConfirmationPage = (props) => {
  const [phone, setPhone] = useState('');
  return (
    <PhoneConfirmationContainer>
      <BackButton exact to="/">
        <BackIcon src="/images/arrow.png" alt="" />
      </BackButton>
      <Title>Enter your phone</Title>
      <PhoneInput
        international
        defaultCountry="US"
        value={phone}
        onChange={setPhone}
      />
      <Paragraph>
        By entering your number, you're agreeing to our{' '}
        <TermsOfService>Terms of Service and Privacy Policy. </TermsOfService>
        Thanks!
      </Paragraph>
      <NextButton
        exact
        to="/code_confirm"
        className="d-flex align-items-center"
      >
        Next <NextIcon src="/images/nextArrowIcon.svg" alt="" />
      </NextButton>
    </PhoneConfirmationContainer>
  );
};
export default PhoneConfirmationPage;
