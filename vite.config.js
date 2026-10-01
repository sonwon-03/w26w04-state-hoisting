import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/w26w04-state-hoisting/', // 이 줄을 꼭 추가해 주세요!
})