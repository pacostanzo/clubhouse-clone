import React from 'react';
import { Link } from 'react-router-dom';
import { BsAt, BsUpload } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

import {
  ProfilePageContainer,
  ProfileHeaderContainer,
  ProfileHead,
  ActionButton,
} from './Profile.style';
import { from } from 'readable-stream';

const ProfilePage = (props) => {
  return (
    <>
      <ProfilePageContainer>
        <ProfileHeaderContainer>
          <ProfileHead>
            <Link to={'/home'}>
              <img src="images/arrow.png" alt="" />
            </Link>
            <ActionButton>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </ActionButton>
          </ProfileHead>
        </ProfileHeaderContainer>
      </ProfilePageContainer>
    </>
  );
};
export default ProfilePage;
