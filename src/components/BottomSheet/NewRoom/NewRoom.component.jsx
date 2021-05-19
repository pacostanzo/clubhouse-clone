import React, { useState } from 'react';
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';
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
  RoomDetailFooter,
} from './NewRoom.styled';

const NewRoom = ({ cardDetail, setSheetVisible }) => {
  const [micMuteVisible, setMicMuteVisible] = useState(true);
  const [itemsVisible, setItemsVisible] = useState(true);
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
        <RoomDetailFooter>
          <button
            onClick={() => {
              setSheetVisible(false);
            }}
          >
            <img src="/images/hand-peace.png" alt="" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stopHandIcon.png" alt="" />
            </button>
            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </RoomDetailFooter>
      </RoomDetailContainer>
    </>
  );
};
export default NewRoom;
