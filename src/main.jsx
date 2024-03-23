import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';

import Contact from './components/Contact/Contact';
import Bal from './components/Bal/Bal';
import Usermore from './components/Usermore/Usermore';
import Errorpage from './components/ErrorPage/Errorpage';


const router = createBrowserRouter([

  {
    path: '/',
 
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage> ,
    children: [
      {
        path : '/bal',
        element :<Bal></Bal>
      },
      {
        path : '/contact',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Contact></Contact>,

      },
      {
        path: '/contact/:userid',
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
       
        element:<Usermore></Usermore>,
      }
    ]
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
