import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RefForm from './componenets/RefForm/RefForm.jsx';
import HookForm from './componenets/HookForm/HookForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <HookForm></HookForm>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
