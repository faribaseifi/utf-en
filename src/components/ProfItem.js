import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const ProfItem = props => (
  <li >
    <NavLink activeClassName={'current'} {...props} />
  </li>
);

export default ProfItem;
