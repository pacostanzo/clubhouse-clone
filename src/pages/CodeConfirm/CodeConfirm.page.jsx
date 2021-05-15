import React from 'react';
import BackButton from '../../components/BackButton';
import NextButton from '../../components/NextButton';
import {
  CodeConfirmContainer,
  Title,
  CodeInput,
  Paragraph,
  ResetButton,
} from './CodeConfirm.style';

const CodeConfirmPage = (props) => {
  return (
    <CodeConfirmContainer>
      <BackButton to={'/get_username'} icon="/images/arrow.png" />
      <Title>Enter the code we just texted you</Title>
      <CodeInput type="text" />
      <Paragraph>
        Didn't receive it? <ResetButton>Tap to reset</ResetButton>
      </Paragraph>
      <NextButton to="/allow_notification" icon="/images/nextArrowIcon.svg" />
    </CodeConfirmContainer>
  );
};
export default CodeConfirmPage;
