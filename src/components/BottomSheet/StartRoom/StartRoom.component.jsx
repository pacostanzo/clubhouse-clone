import React, { useState } from 'react';
import { FcGlobe } from 'react-icons/fc';
import {
  SwitchLine,
  AddTopicContainer,
  AddTopicButton,
  SelectRoom,
  LetsGoContainer,
  LetsGoButton,
  StartRoomParagraph,
} from './StartRoom.style';

const StartRoom = ({ setSheetCreateRoom, setSheetVisible }) => {
  const [room, setRoom] = useState('open');
  return (
    <>
      <SwitchLine />
      <AddTopicContainer>
        <AddTopicButton>+ Add a topic</AddTopicButton>
      </AddTopicContainer>
      <SelectRoom>
        <button
          className={room === 'open' ? 'active' : ''}
          onClick={() => setRoom('open')}
        >
          <div>
            <FcGlobe />
          </div>
          Open
        </button>
        <button
          className={room === 'social' ? 'active' : ''}
          onClick={() => setRoom('social')}
        >
          <div>
            <FcGlobe />
          </div>
          Social
        </button>
        <button
          className={room === 'closed' ? 'active' : ''}
          onClick={() => setRoom('closed')}
        >
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </SelectRoom>
      <StartRoomParagraph>
        Start a room{' '}
        <span>
          {room === 'closed'
            ? 'for people I choose'
            : room === 'social'
            ? 'with people I follow'
            : 'open to everyone'}
        </span>
      </StartRoomParagraph>
      <LetsGoContainer>
        <LetsGoButton
          onClick={() => {
            setSheetCreateRoom(true);
            setSheetVisible(true);
          }}
        >
          🎉 Let's go
        </LetsGoButton>
      </LetsGoContainer>
    </>
  );
};
export default StartRoom;
