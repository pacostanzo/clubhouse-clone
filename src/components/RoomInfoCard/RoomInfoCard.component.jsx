import React from 'react';
import { RoomInfoCardContainer, RoomMembers } from './RoomInfoCard.style';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';
import data from './../../data/roomCard.json';

const RoomInfoCard = (props) => {
  return (
    <>
      {data.map((item) => (
        <div>
          <div>
            <RoomInfoCardContainer>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <RoomMembers>
                <div>
                  <img src="/images/user-img.jpg" alt="" />
                  <img src="/images/user-img2.jpg" alt="" />
                </div>
                <div>
                  {item.members.map((member) => (
                    <p>
                      {member.first_name} {member.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="mr-2">1.8</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>{' '}
                    <span className="mr-2">5</span> <BsChatDotsFill />
                  </p>
                </div>
              </RoomMembers>
            </RoomInfoCardContainer>
          </div>
        </div>
      ))}
    </>
  );
};
export default RoomInfoCard;
