import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Layout from './Components/Layout';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Sidebar from './Components/SideBar';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contacts';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route  element={<Layout />} />
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
