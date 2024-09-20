import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact(),
        VitePWA({
            registerType: "autoUpdate",
            // devOptions: {
            //   enabled: true
            // },
            includeAssets: ["favicon.png", "apple-touch-icon.png", "masked-icon.svg"],
            manifest: {
                name: "Passwords",
                short_name: "Passwords",
                description: "A powerful generator for powerful passwords to protect your online accounts.",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "image/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    }
                ],
                screenshots: [
                    {
                        src: "image/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        form_factor: "wide",
                        label: "Application"
                    },
                    {
                        src: "image/android-chrome-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        form_factor: "narrow",
                        label: "Application"
                    }
                ]
            }
        })
    ],
    server: {
        port: 3030
    }

    // preview: {
    //   host: "127.0.0.1",
    //   port: 8080,
    // },
})
