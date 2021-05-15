import React from 'react';
import { BackButtonContainer, BackIcon } from './BackButton.style';

const BackButton = ({ to, icon, ...rest }) => {
  return (
    <BackButtonContainer to={to} {...rest}>
      <BackIcon src={icon} alt="" />
    </BackButtonContainer>
  );
};
export default BackButton;
