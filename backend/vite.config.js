import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    base: '/admin/',
    plugins: [
        laravel({
            input: [
                'public/css/global.css',
                "public/css/admin/style.css",
                'public/css/dashboard/style.css',
                "public/css/create/style.css",
                "public/css/edit/style.css",
                "public/js/main.js",
                "public/js/upload.js",
                "public/js/anime-register.js"
            ],
            refresh: true,
        }),
    ],
})
