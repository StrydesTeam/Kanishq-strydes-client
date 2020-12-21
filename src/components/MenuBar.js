import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StrydesWord from '../pages/img/StrydesLogoWord.png'
import StrydesLogo from '../pages/img/StrydesLogoNoWord.png'

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const menuBar = user ? (
    <div class="d-flex flex-row justify-content-center">
      <div class="d-flex flex-row justify-content-center" style={{width: '8%'}}>
        <img src={StrydesLogo} style={{height: 'auto', width: '30%', paddingRight: '6px'}}/>
        <img src={StrydesWord} style={{height: 'auto', width: '100%', paddingRight: '40px'}}/>
      </div>
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item name="Home" active as={Link} to="/" />
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={logout} />
        </Menu.Menu>
      </Menu>
    </div>
  ) : (
    <div class="d-flex flex-row justify-content-center">
      <div class="d-flex flex-row justify-content-center" style={{width: '7%'}}>
        <img src={StrydesLogo} style={{height: 'auto', width: '30%', paddingRight: '6px'}}/>
        <img src={StrydesWord} style={{height: 'auto', width: '100%', paddingRight: '40px'}}/>
      </div>
        <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );

  return menuBar;
}

export default MenuBar;