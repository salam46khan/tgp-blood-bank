import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './Routers/MainRouter.jsx'
import AuthProvider from './Profider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={MainRouter} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
