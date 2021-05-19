import React, { useState } from 'react';
import DailyInfoCard from '../../components/DailyInfoCard';
import RoomInfoCard from '../../components/RoomInfoCard';
import Header from '../../components/Header';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HomeLoader, HomeContainer, ActionButtonContainer } from './Home.style';
import data from './../../data/roomCard.json';
import newRoomData from './../../data/newRoom.json';
import BottomSheet from '../../components/BottomSheet';

const HomePage = (props) => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      {loaderVisibility ? (
        <HomeLoader>
          <img src="/images/loader.gif" alt="" />
        </HomeLoader>
      ) : (
        <>
          <Header />
          <HomeContainer>
            <DailyInfoCard />
            <RoomInfoCard />
          </HomeContainer>
          <ActionButtonContainer>
            <button onClick={() => setSheetVisible(true)}>
              <AiOutlinePlus className="mr-2" />
              Start a room
            </button>
            <button>
              <BsGrid3X3Gap />
            </button>
          </ActionButtonContainer>
          <BottomSheet
            sheetTitle={'start room'}
            setSheetVisible={(item) => setSheetVisible(item)}
            sheetVisible={sheetVisible}
            cardDetail={data.find((item) => item.id === cardId)}
            setItemsVisible={(item) => setItemsVisible(item)}
            setSheetCreateRoom={(item) => {
              setLoaderVisibility(true);
              setTimeout(() => {
                setSheetCreateRoom(item);
                setLoaderVisibility(false);
              }, 1000);
            }}
          />
          <BottomSheet
            sheetTitle={'new room'}
            setSheetVisible={(item) => setSheetCreateRoom(item)}
            sheetVisible={sheetCreateRoom}
            cardDetail={newRoomData}
            setItemsVisible={(item) => setItemsVisible(item)}
          />
        </>
      )}
    </>
  );
};
export default HomePage;
