import React from 'react';
import DailyInfoCard from '../../components/DailyInfoCard';
import Header from '../../components/Header';
import { HomeContainer } from './Home.style';

const HomePage = (props) => {
  return (
    <>
      <Header />
      <HomeContainer>
        <DailyInfoCard />
      </HomeContainer>
    </>
  );
};
export default HomePage;
