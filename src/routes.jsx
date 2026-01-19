import { useEffect } from 'react'
import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { loadAnalytics } from './utils/analytics.js'
import { rlgTheme } from './theme.js'

import Home from './pages/home.jsx'
import NotFoundPage from './pages/404.jsx'
import SolutionsPage from './pages/solutions.jsx'

export default function AppRoutes() {
    return (
        <MantineProvider theme={rlgTheme}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/solutions"
                        element={<SolutionsPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    )
}
