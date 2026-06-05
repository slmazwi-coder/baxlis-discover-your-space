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
        lazy: () => import('./routes/index').then(m => ({ Component: m.default })),
      },
      {
        path: 'about',
        lazy: () => import('./routes/about').then(m => ({ Component: m.default })),
      },
      {
        path: 'agents',
        lazy: () => import('./routes/agents').then(m => ({ Component: m.default })),
      },
      {
        path: 'contact',
        lazy: () => import('./routes/contact').then(m => ({ Component: m.default })),
      },
      {
        path: 'listings',
        lazy: () => import('./routes/listings').then(m => ({ Component: m.default })),
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