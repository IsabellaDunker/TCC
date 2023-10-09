import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NewsPage from './Pages/NewsPage';
import Data from './data';
// configurando router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, {
    path: "news",
    element: <NewsPage />
  },
  {
  path: "test",
  element: <Data />
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

