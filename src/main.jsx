import React from "react"
import { createRoot } from "react-dom/client"
import AppRoutes from "./routes.jsx"

const container = document.getElementById("app")
const root = createRoot(container)
root.render(<AppRoutes />)
