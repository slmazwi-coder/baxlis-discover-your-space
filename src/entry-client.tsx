import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserHistory } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { getRouter } from './router'

const history = createBrowserHistory()
const router = getRouter()

router.history = history

const queryClient = router.context.queryClient

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={undefined}>
          <RouterProvider router={router} />
        </HydrationBoundary>
      </QueryClientProvider>
    </StrictMode>,
  )
} else {
  const root = ReactDOM.hydrateRoot(
    rootElement,
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={undefined}>
          <RouterProvider router={router} />
        </HydrationBoundary>
      </QueryClientProvider>
    </StrictMode>,
  )
}
