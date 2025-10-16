import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { I18nProvider } from '@lingui/react'
import { i18n, dynamicActivate } from './i18n'
import { detectLocale } from './utils/detectLocale'
import AppRoutes from "./routes.jsx"

function App() {
  const [localeLoaded, setLocaleLoaded] = useState(false)

  useEffect(() => {
    const locale = detectLocale()
    dynamicActivate(locale).then(() => {
      setLocaleLoaded(true)
    })
  }, [])

  if (!localeLoaded) {
    return null
  }

  return (
    <I18nProvider i18n={i18n}>
      <AppRoutes />
    </I18nProvider>
  )
}

const container = document.getElementById("app")

if (!container._reactRoot) {
  const root = createRoot(container)
  container._reactRoot = root
  root.render(<App />)
} else {
  container._reactRoot.render(<App />)
}
