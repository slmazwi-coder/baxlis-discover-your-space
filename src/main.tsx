import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './styles.css'
import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: () => import('./routes/index').then(m => m.default),
      },
      {
        path: 'about',
        Component: () => import('./routes/about').then(m => m.default),
      },
      {
        path: 'agents',
        Component: () => import('./routes/agents').then(m => m.default),
      },
      {
        path: 'contact',
        Component: () => import('./routes/contact').then(m => m.default),
      },
      {
        path: 'listings',
        Component: () => import('./routes/listings').then(m => m.default),
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)