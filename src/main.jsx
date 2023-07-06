import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ProductProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductProvider>
    </QueryClientProvider >
  </React.StrictMode>,
)
