import { useEffect } from 'react'
import '@mantine/core/styles.css'
import './assets/style.css'

import { MantineProvider, createTheme } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { loadAnalytics } from './utils/analytics.js'

import Home from './pages/home.jsx'
import About from './pages/about.jsx'
// import Generator from "./pages/generator.jsx"
// import Manager from "./pages/manager.jsx"
// import SendPassword from "./pages/send-password.jsx"
// import SendText from "./pages/send-text.jsx"

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
// import NotFound from './pages/404.jsx'

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
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    {/* <Route path="/manager" element={<Manager />} />
                    <Route path="/generator" element={<Generator />} />
                    <Route path="/send-password" element={<SendPassword />} />
                    <Route path="/send-text" element={<SendText />} /> */}
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    )
}
