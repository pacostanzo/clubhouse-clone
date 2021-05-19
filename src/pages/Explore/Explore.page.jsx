import React from 'react';
import { DownOutlined, FireOutlined } from '@ant-design/icons';
import {
  ExploreContainer,
  PeopleContainer,
  PeopleImageContainer,
  PeopleTitle,
  ShowMoreButton,
} from './Explore.style';
import data from '../../data/Explore.json';

const ExplorePage = (props) => {
  const { people, conversation } = data;
  return (
    <ExploreContainer>
      <h6>PEOPLE TO FOLLOW</h6>
      <PeopleContainer>
        {people.map((item) => (
          <div>
            <PeopleImageContainer>
              <img src="/images/user-img.jpg" alt="" />
              <PeopleTitle>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </PeopleTitle>
            </PeopleImageContainer>
            <button>Follow</button>
          </div>
        ))}
        <ShowMoreButton>
          Show more people <DownOutlined />
        </ShowMoreButton>
      </PeopleContainer>
    </ExploreContainer>
  );
};
export default ExplorePage;
