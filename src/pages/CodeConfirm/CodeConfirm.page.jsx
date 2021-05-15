import React from 'react';
import { CodeConfirmContainer } from './CodeConfirm.style';

const CodeConfirmPage = (props) => {
  return (
    <CodeConfirmContainer>
      <h1>Enter the code we just texted you</h1>
      <p>
        Didn't receive it? <span>Tap to reset</span>
      </p>
    </CodeConfirmContainer>
  );
};
export default CodeConfirmPage;
