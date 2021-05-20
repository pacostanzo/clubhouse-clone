import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeaderContainer } from './SubHeader.style';

const SubHeader = ({ pageTitle }) => {
  return (
    <SubHeaderContainer>
      <Link to="/home">
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h3>{pageTitle}</h3>
    </SubHeaderContainer>
  );
};
export default SubHeader;
