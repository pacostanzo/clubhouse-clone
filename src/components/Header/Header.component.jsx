import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { HeaderContainer, NavigationItems } from './Header.style';

const Header = (props) => {
  return (
    <HeaderContainer>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="" />
      </Link>
      <NavigationItems>
        <Link exact to="/friends_invite">
          <img src="/images/invite.png" alt="" />
        </Link>
        <Link exact to="/upcoming">
          <img src="/images/calendar.png" alt="" />
        </Link>
        <Link exact to="/activity">
          <img src="/images/noti.png" alt="" />
        </Link>
        <Link exact to="/profile">
          <img src="/images/b1.png" alt="" />
        </Link>
      </NavigationItems>
    </HeaderContainer>
  );
};
export default Header;
