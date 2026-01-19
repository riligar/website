import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import { PostHogProvider } from 'posthog-js/react'

function App() {
    return (
        <PostHogProvider
            apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
            options={{
                api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
                defaults: '2025-05-24',
                capture_exceptions: true,
                debug: import.meta.env.MODE === 'development',
            }}
        >
            <AppRoutes />
        </PostHogProvider>
    )
}

const container = document.getElementById('app')

if (!container._reactRoot) {
    const root = createRoot(container)
    container._reactRoot = root
    root.render(<App />)
} else {
    container._reactRoot.render(<App />)
}
