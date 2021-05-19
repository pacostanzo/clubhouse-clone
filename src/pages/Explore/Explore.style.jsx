import styled from 'styled-components';

export const ExploreContainer = styled.div`
  padding: 0 0.5em;
  height: 100%;
  overflow: auto;
  padding-top: 5.2em;

  & h6 {
    font-size: 0.975em;
    font-weight: 500;
    color: #bbbbbb;
    margin: 1.5em 0 0.5em 0;
  }
`;

export const PeopleContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  margin: 0 -0.5em;
  padding: 0.5em 0.5em 1.5em 0.5em;
  & img {
    width: 40px;
    border-radius: 1.1em;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5em;
  }

  & h5 {
    color: var(--textColor);
    font-size: 1.1em;
  }

  & p {
    color: var(--textColor);
    font-size: 0.9em;
    margin: 0;
    display: block;
    display: -webkit-box;
    width: 173px;
    height: fit-content;
    line-height: 1.15;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: auto;
    text-overflow: ellipsis;
    color: #aaaaaa;
  }

  & button {
    background-color: transparent;
    border: 2px solid var(--btnBgColor);
    border-radius: 2em;
    color: var(--btnBgColor);
    font-weight: 400;
    font-size: 1em;
    padding: 0.1em 1.2em;
  }
`;

export const PeopleImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PeopleTitle = styled.div`
  margin-left: 2em;
`;

export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f4f4f4 !important;
  border: none !important;
  color: #aaaaaa !important;
  box-shadow: 0px 2px 3px #cccccc;
  font-weight: 500 !important;

  & span {
    font-size: 0.775em !important;
    margin-top: 0.4em;
    margin-left: 0.5em;
  }
`;

export const ConversationCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.5em;
  padding: 0.5em;
  box-shadow: 0px 2px 3px #cccccc;

  & h6 {
    color: var(--textColor);
    font-size: 1em;
    margin: 0;
    display: flex;
    align-items: center;

    & span {
      margin-right: 0.2em;
    }
  }
  & p {
    margin: 0;
    color: #aaaaaa;
    line-height: 1.2;
    font-size: 0.8em;
  }
`;
