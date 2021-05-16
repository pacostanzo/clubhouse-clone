import React from 'react';
import data from './../../data/dailyCard.json';

import {
  DailyCardContainer,
  ItemContainer,
  ItemTime,
  ItemInfo,
} from './DailyInfoCard.style';

const DailyInfoCard = (props) => {
  return (
    <DailyCardContainer>
      {data.map((item) => (
        <ItemContainer>
          <ItemTime>{item.time}</ItemTime>
          <ItemInfo>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </ItemInfo>
        </ItemContainer>
      ))}
    </DailyCardContainer>
  );
};
export default DailyInfoCard;
