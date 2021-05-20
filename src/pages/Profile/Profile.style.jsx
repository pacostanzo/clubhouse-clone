import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  height: 100%;
  overflow: auto;
  padding: 0 0.5em;
  padding-top: 5em;

  & svg > :last-child {
    margin-right: 0;
  }

  & h4 {
    font-size: 1.5em;
    color: var(--textColor);
    margin: 0.5em 0 0.1em 0;
  }

  & p {
    font-size: 1.1em;
    color: #aaaaaa;
    margin: 0;
  }

  & button {
    border: none;
    background-color: transparent;
    color: var(--btnBgColor);
  }
`;

export const ProfileHeaderContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #f2f0e4;
  z-index: 5;
  padding: 0.5em;
`;

export const ProfileHead = styled.div`
  text-align: right;
  padding: 0.5em 0.5em;
  position: relative;
  margin-bottom: 0;
  & img {
    width: 15px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  & h3 {
    margin: 0;
    font-size: 1.2em;
  }
`;

export const ActionButton = styled.div`
  & svg {
    font-size: 2em;
    margin-right: 1em;
  }
`;

export const ProfileImage = styled.img`
  width: 80px;
  border-radius: 2.2em;
`;

export const FollowContainer = styled.div`
  display: flex;
  margin-bottom: 2.5em;

  & > p:first-child {
    margin-right: 2.3em;
  }

  & p {
    & span {
      font-weight: 500;
      color: var(--textColor);
      margin-right: 0.2em;
      font-size: 1.3em;
    }
  }
`;

export const Nominated = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  & img {
    width: 40px;
    border-radius: 1em;
    margin-right: 0.5em;
  }
  & p {
    font-size: 0.975em;
    line-height: 1.4;

    & span {
      font-weight: 500;
      color: var(--textColor);
    }
  }
`;

export const AddmemberButton = styled.button`
  background-color: lightblue !important;
  margin-bottom: 0 !important;
  padding: 0.8em 1em;
  line-height: 1;
  border-radius: 1em;
  margin-top: 0.3em;
`;
