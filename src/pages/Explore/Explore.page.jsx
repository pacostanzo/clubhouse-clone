import React from 'react';
import { DownOutlined, FireOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {
  ExploreContainer,
  PeopleContainer,
  PeopleImageContainer,
  PeopleTitle,
  ShowMoreButton,
  ConversationCard,
  ExplorerHeader,
} from './Explore.style';

import data from '../../data/Explore.json';
import SubHeader from '../../components/SubHeader';

const ExplorePage = (props) => {
  const { people, conversation } = data;
  return (
    <ExploreContainer>
      <ExplorerHeader>
        <SubHeader pageTitle="EXPLORE" />
        <Input
          style={{
            backgroundColor: '#f4f4f4',
            borderRadius: '0.8em',
            padding: '0.3em 1em',
            border: 'none',
            boxShadow: 'none',
          }}
          size="large"
          placeholder="Find People and Clubs"
          prefix={<img src="/images/search.png" alt="" width="15px" />}
        ></Input>
      </ExplorerHeader>
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
      <h6>FIND CONVERSATION ABOUT...</h6>
      <div className="row mx-0">
        {conversation.map((item) => (
          <div className="col-6 px-2 mb-3">
            <ConversationCard>
              <h6>
                <FireOutlined />
                {item.title}
              </h6>
              <p>{item.description}</p>
            </ConversationCard>
          </div>
        ))}
      </div>
    </ExploreContainer>
  );
};
export default ExplorePage;
