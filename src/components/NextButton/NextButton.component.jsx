import React from 'react';
import { NextButtonContainer, NextIcon } from './NextButton.style';

const NextButton = ({ to, icon, ...rest }) => {
  return (
    <NextButtonContainer
      {...rest}
      to={to}
      className="d-flex align-items-center"
    >
      Next <NextIcon src={icon} alt="" />
    </NextButtonContainer>
  );
};
export default NextButton;
