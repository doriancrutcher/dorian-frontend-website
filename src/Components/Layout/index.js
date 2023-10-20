import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar';
import './index.scss';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container className="App">
      <Sidebar />
      <div className="page">
        <span  className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </Container>
  );
};

export default Layout;
