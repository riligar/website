import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'

function App() {
    return <AppRoutes />
}

const container = document.getElementById('app')

if (!container._reactRoot) {
    const root = createRoot(container)
    container._reactRoot = root
    root.render(<App />)
} else {
    container._reactRoot.render(<App />)
}
