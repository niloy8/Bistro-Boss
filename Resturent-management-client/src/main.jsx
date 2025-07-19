import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {

  RouterProvider,
} from "react-router";
import { router } from './routers/Routers.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>

  </StrictMode>,
)
