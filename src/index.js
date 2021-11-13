import React from 'react';
import ReactDOM from 'react-dom';
import { UserResponse } from './userResponse/userResponse';
import "./main.scss";
import { UserMenu } from './userMenu/UserMenu';


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <UserMenu/>
      <UserResponse/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
