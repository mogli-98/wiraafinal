import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footor from './Footor';

function  WithNav()  {
  return (
    <>
      <Header  />
      <Outlet />
      <Footor/>
    </>
  );
};
export default WithNav;