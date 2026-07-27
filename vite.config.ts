import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    
    // Desactiva la división de CSS para que todo vaya al HTML
    cssCodeSplit: false,
    // Opcional: si no quieres que se genere un archivo de mapa fuente
    sourcemap: true,
  },
});