import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { BottomSheetContainer } from './BottomSheet.style';
import StartRoom from './StartRoom';
import NewRoom from './NewRoom';

const BottomSheet = ({
  sheetVisible,
  setSheetVisible,
  setItemsVisible,
  sheetTitle,
  setSheetCreateRoom,
  cardDetail,
}) => {
  const onChange = () => {
    setSheetVisible(!sheetVisible);
    setItemsVisible(true);
  };

  return (
    <SwipeableBottomSheet
      open={sheetVisible}
      onChange={onChange}
      fullSCreen={sheetTitle === 'room detail' ? true : false}
    >
      <BottomSheetContainer sheetTitle={sheetTitle}>
        {sheetTitle === 'new room' ? (
          <NewRoom
            cardDetail={cardDetail}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemsVisible(true);
            }}
          />
        ) : sheetTitle === 'start room' ? (
          <StartRoom
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemsVisible(true);
            }}
          />
        ) : (
          ''
        )}
      </BottomSheetContainer>
    </SwipeableBottomSheet>
  );
};
export default BottomSheet;
