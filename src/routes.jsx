import "@mantine/core/styles.css"
import "./assets/style.css"

import { MantineProvider, createTheme } from "@mantine/core"
import { LocationProvider, Router } from "preact-iso"

import Home from "./pages/home.jsx"
import Generator from "./pages/generator.jsx"
import Manager from "./pages/manager.jsx"
import SendPassword from "./pages/send-password.jsx"
import SendText from "./pages/send-text.jsx"

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
// import NotFound from './pages/404.jsx'

const theme = createTheme({
    fontFamily: "Montserrat, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    headings: { fontFamily: "Montserrat, sans-serif" }
})

export default () => (
    <LocationProvider>
        <MantineProvider theme={theme}>
            <Router>
                <Home path="/" />
                <Manager path="/manager" />
                <Generator path="/generator" />
                <SendPassword path="/send-password" />
                <SendText path="/send-text" />
                {/* <NotFound default /> */}
            </Router>
        </MantineProvider>
    </LocationProvider>
)
