import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

import './style.css';

const Landing = () => {
  const history = useHistory();

  return (
    <div className="home_wrapper">
      <h1 className="home__title">
        Welcome to my Chat Application! Login or Signup below!
      </h1>
      <div className="home__btns-wrapper">
        <Button
          size="large"
          shape="round"
          onClick={() => history.push('/login')}
        >
          Login
        </Button>
        <Button
          size="large"
          shape="round"
          onClick={() => history.push('/signup')}
        >
          Sign Up
        </Button>
      </div>
      
    </div>
  );
};

export default Landing;
