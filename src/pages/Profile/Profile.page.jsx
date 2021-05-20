import React from 'react';
import { Link } from 'react-router-dom';
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs';
import {
  AiOutlineSetting,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';

import {
  ProfilePageContainer,
  ProfileHeaderContainer,
  ProfileHead,
  ActionButton,
  ProfileImage,
  FollowContainer,
  Nominated,
  AddmemberButton,
} from './Profile.style';

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
        <ProfileImage src="/images/user-img.jpg" alt="" />
        <h4>Pablo Costanzo</h4>
        <p>@pacostanzo</p>
        <FollowContainer>
          <p>
            <span>0</span>followers
          </p>
          <p>
            <span>51</span>following
          </p>
        </FollowContainer>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <Nominated>
          <img src="/images/user-img.jpg" alt="" />
          <div>
            <p>{new Date().toDateString()}</p>
            <p>
              Nominated by <span>Carlos Garcia</span>
            </p>
          </div>
        </Nominated>
        <p>Member of</p>
        <AddmemberButton>
          <BsPlus />
        </AddmemberButton>
      </ProfilePageContainer>
    </>
  );
};
export default ProfilePage;
