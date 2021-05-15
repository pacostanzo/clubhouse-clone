import styled from 'styled-components';

export const AllowNotificationContainer = styled.div`
  padding: 3em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f0e4;
  position: relative;
  text-align: center;
`;

export const NotificationContainer = styled.div`
  border-radius: 1em;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #cccccc;
`;

export const NotificationTitle = styled.h3`
  font-size: 1em;
  font-weight: 600;
  color: #000000;
  width: 100%;
  margin: auto;
  margin-bottom: 0.3em;
`;

export const NotificationParagraph = styled.p`
  font-size: 0.825em;
  font-weight: 500;
  line-height: 1.3;
  margin: auto;
`;

export const ActionContainer = styled.div`
  position: relative;

  & > a {
    display: inline-block;
    width: 50%;
    padding: 0.5em;
    border-top: 1px solid #cccccc;
    color: var(--btnBgColor);
  }

  & > a:first-child {
    border-right: 1px solid #cccccc;
  }
`;

export const HandIcon = styled.img`
  position: absolute;
  bottom: -90px;
  right: 20px;
  width: 80px;
`;
