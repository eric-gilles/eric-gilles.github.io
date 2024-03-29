import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { Icon } from '@iconify/react';

const HeroComponent = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <br/>
          <br/>
          <h1 className="mb-3 display-0 fw-bold">Eric Gilles</h1>
          <h4>Welcome to my portfolio!</h4>
          <div>
          <a href="https://github.com/eric-gilles" aria-label="Check out my GitHub profile." class="link-icons">
            <Icon icon="akar-icons:github-fill" width="50" height="50" />
          </a>
            <a href="https://www.linkedin.com/in/eric-gilles1/" aria-label="Check out my LinkedIn profile." class="link-icons">
              <Icon icon="akar-icons:linkedin-fill" width="50" height="50" />
            </a>
            <a href="https://www.facebook.com/eric.gilles.988" aria-label="Check out my Facebook profile." class="link-icons">
              <Icon icon="akar-icons:facebook-fill" width="50" height="50" />
            </a>
          </div>
          <div>
            <Switch checked={theme === 'dark'} onChange={toggleTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
