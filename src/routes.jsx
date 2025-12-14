import { useEffect } from 'react'
import '@mantine/core/styles.css'
import './style.css'

import { MantineProvider, createTheme } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { loadAnalytics } from './utils/analytics.js'

import Home from './pages/home.jsx'
import NotFoundPage from './pages/404.jsx'
import SolutionsPage from './pages/solutions.jsx'

const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Montserrat, sans-serif' },
})

export default function AppRoutes() {
    useEffect(() => {
        loadAnalytics()
    }, [])

    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    {/* <Route
                        path="/about"
                        element={<About />}
                    /> */}
                    {/* <Route
                        path="/contact"
                        element={<Contact />}
                    /> */}
                    {/* <Route
                        path="/ai-agents"
                        element={<AIAgentsPage />}
                    /> */}
                    {/* <Route
                        path="/salesforce"
                        element={<SalesforcePage />}
                    /> */}
                    {/* <Route
                        path="/saas"
                        element={<SaaSPage />}
                    /> */}
                    {/* <Route
                        path="/ai-integration"
                        element={<AIIntegrationPage />}
                    /> */}
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
