import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Create from './components/Create';
import Search from './components/Search';
import Find from './components/Find';
import Uad from './components/Uad';
import Loginhere from './components/loginComponents/Loginhere';
import Signup from './components/loginComponents/Signup';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Find />} />
      <Route path="Create" element={<Create />} />
      <Route path="Search" element={<Search />} />
      <Route path="/uad" element={<Uad />} />
      <Route path="Loginhere" element={<Loginhere />} />
      <Route path="Signup" element={<Signup />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
