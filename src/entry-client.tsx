import { HydrationBoundary, QueryClientProvider, dehydrate } from '@tanstack/react-query'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { getRouter } from './router'

async function main() {
  const router = getRouter()
  const memoryHistory = createMemoryHistory({
    initialEntries: [window.location.pathname],
  })

  router.history = memoryHistory

  const queryClient = router.context.queryClient
  const dehydratedState = (window as any).__DEHYDRATED_STATE__

  const rootElement = document.getElementById('app')!

  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={dehydratedState}>
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
          <HydrationBoundary state={dehydratedState}>
            <RouterProvider router={router} />
          </HydrationBoundary>
        </QueryClientProvider>
      </StrictMode>,
    )
  }
}

main().catch(console.error)
