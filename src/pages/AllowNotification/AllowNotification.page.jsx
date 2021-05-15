import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';

import {
  AllowNotificationContainer,
  NotificationContainer,
  NotificationTitle,
  NotificationParagraph,
  ActionContainer,
  HandIcon,
} from './AllowNotification.style';

const AllowNotificationPage = (props) => {
  return (
    <AllowNotificationContainer>
      <BackButton to={'/code_confirm'} icon="/images/arrow.png" />
      <h1 className="mb-4">Last, important step!</h1>
      <h1 className="mb-3">
        Enable notifications to know when people are talking
      </h1>
      <NotificationContainer>
        <div className="p-3">
          <NotificationTitle>
            "Clubhouse" Would Like to send You Notifications
          </NotificationTitle>
          <NotificationParagraph>
            Notifications may include alerts, sounds and icons badges{' '}
          </NotificationParagraph>
        </div>
        <ActionContainer>
          <Link exact to="/home">
            Don't Allow
          </Link>
          <Link exact to="/home">
            Allow
          </Link>
          <HandIcon src="/images/handIcon.svg" alt="" />
        </ActionContainer>
      </NotificationContainer>
    </AllowNotificationContainer>
  );
};
export default AllowNotificationPage;
