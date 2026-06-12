import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ClerkProvider } from '@clerk/react'
import { shadesOfPurple } from '@clerk/themes'
const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider appearance={{
    baseTheme: shadesOfPurple
  }} publishableKey={PUBLISHABLE_KEY}>
  <App />
  </ClerkProvider>
 
  </StrictMode>,
)
