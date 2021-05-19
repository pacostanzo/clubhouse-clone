import React, { useState } from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import { BsMicMuteFill } from 'react-icons/bs';
import {
  RoomDetailContainer,
  Head,
  ImageContainer,
  ArrowImage,
  ProfileImage,
  RoomDetailCardContainer,
  RoomDetailCard,
  MemberContainer,
  AudioIcon,
} from './NewRoom.styled';

const NewRoom = ({ cardDetail, setSheetVisible }) => {
  const [micMuteVisible, setMicMuteVisible] = useState(true);
  return (
    <>
      <RoomDetailContainer>
        <Head>
          <ImageContainer>
            <a
              href="#"
              onClick={() => {
                setSheetVisible(false);
              }}
            >
              <ArrowImage src="/images/arrow.png" alt="" />
            </a>
            <span>Hallway</span>
          </ImageContainer>
          <div>
            <AiOutlineFile />
            <ProfileImage src="/images/user-img.jpg" alt="" />
          </div>
        </Head>
        <RoomDetailCardContainer>
          <RoomDetailCard>
            {cardDetail.members.map((item) => (
              <MemberContainer>
                {micMuteVisible ? (
                  <AudioIcon>
                    <BsMicMuteFill></BsMicMuteFill>
                  </AudioIcon>
                ) : (
                  ''
                )}
                <img src="/images/user-img.jpg" alt="" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </MemberContainer>
            ))}
          </RoomDetailCard>
        </RoomDetailCardContainer>
      </RoomDetailContainer>
    </>
  );
};
export default NewRoom;
