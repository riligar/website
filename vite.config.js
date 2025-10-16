import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
            '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
        },
    },
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            // devOptions: {
            //   enabled: true
            // },
            includeAssets: ['favicon.png', 'apple-touch-icon.png', 'masked-icon.svg'],
            manifest: {
                name: 'RiLiGar - AI Agents, Salesforce & SaaS Solutions',
                short_name: 'RiLiGar',
                description:
                    'Intelligent AI Agents, custom Salesforce solutions, and scalable SaaS platforms. Purpose-driven technology that delivers results.',
                theme_color: '#228be6',
                background_color: '#ffffff',
                icons: [
                    {
                        src: 'image/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
                screenshots: [
                    {
                        src: 'image/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        form_factor: 'wide',
                        label: 'Application',
                    },
                    {
                        src: 'image/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        form_factor: 'narrow',
                        label: 'Application',
                    },
                ],
            },
        }),
    ],
    server: {
        port: 3030,
    },

    // preview: {
    //   host: "127.0.0.1",
    //   port: 8080,
    // },
})
