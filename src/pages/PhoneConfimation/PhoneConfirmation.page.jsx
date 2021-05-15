import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import BackButton from '../../components/BackButton';
import NextButton from '../../components/NextButton';

import {
  PhoneConfirmationContainer,
  Title,
  Paragraph,
  TermsOfService,
} from './PhoneConfirmation.style';

const PhoneConfirmationPage = (props) => {
  const [phone, setPhone] = useState('');
  return (
    <PhoneConfirmationContainer>
      <BackButton to={'/'} icon="/images/arrow.png" />
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
      <NextButton to="/code_confirm" icon="/images/nextArrowIcon.svg" />
    </PhoneConfirmationContainer>
  );
};
export default PhoneConfirmationPage;
