import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NewsPage from './Pages/NewsPage';
// configurando router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, {
    path: "news/:id",
    element: <NewsPage />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

