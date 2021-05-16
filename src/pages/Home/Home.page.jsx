import React from 'react';
import DailyInfoCard from '../../components/DailyInfoCard';
import RoomInfoCard from '../../components/RoomInfoCard';
import Header from '../../components/Header';
import { HomeContainer } from './Home.style';

const HomePage = (props) => {
  return (
    <>
      <Header />
      <HomeContainer>
        <DailyInfoCard />
        <RoomInfoCard />
      </HomeContainer>
    </>
  );
};
export default HomePage;
