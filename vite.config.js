    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'


    // https://vite.dev/config/
    export default defineConfig({
       build: {
    rollupOptions: {
      external: ['react-icons/hi'],
    },
  },
      plugins: [react(), tailwindcss(),
      ],
      base : '/'
    })
