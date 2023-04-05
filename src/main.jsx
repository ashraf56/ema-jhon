import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Order from './component/Order';
import Home from './component/Home/Home';
import { CartLoaderpro } from './component/Cartloader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
path:'/',
element:<Shop></Shop>

      },
      {
path:'order',
element:<Order></Order>,
loader: CartLoaderpro
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
   </React.StrictMode>,
)
