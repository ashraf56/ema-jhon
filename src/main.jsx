import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Order from './component/Order';
import Home from './component/Home/Home';
import { CartLoaderpro } from './component/Cartloader';
import Login from './component/LOgin/Login';
import SIgnup from './component/SIgnup/SIgnup';
import Authprovider, { Authcontext } from './component/Authprovider';
import Checkout from './component/Checkout';
import Privateraoute from './component/Privateraoute';

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
      {
path:'login',
element:<Login></Login>,
      },
      {
path:'check',
element:<Privateraoute>
  <Checkout></Checkout>
</Privateraoute>,
      },
      {
path:'signup',
element:<SIgnup></SIgnup>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Authprovider>
      <RouterProvider router={router} />    

        </Authprovider>
 
   </React.StrictMode>,
)
