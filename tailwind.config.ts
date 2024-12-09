import type { Config } from 'tailwindcss';

const config: Config = {
  // Rutas donde Tailwind buscará las clases
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Directorio de páginas
    './components/**/*.{js,ts,jsx,tsx}',  // Directorio de componentes
    './app/**/*.{js,ts,jsx,tsx}',  // Si usas el App Router
  ],
  theme: {
    extend: {
      // Colores personalizados
      colors: {
        // Color morado (puedes ajustar los valores de morado)
        'lobo-morado': '#6A4C9C',  // Morado principal
        'lobo-gris': '#A1A1A1',  // Gris oscuro (para complementar)
        'lobo-negro': '#1A1A1A', // Negro (para detalles)
        'lobo-blanco': '#F0F0F0',  // Blanco (para contraste)
      },
      fontFamily: {
        // Fuentes personalizadas (puedes usar alguna fuente deportiva o relacionada con lobos)
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      // Tamaños de fuente personalizadas (si necesitas algo más grande para encabezados, etc.)
      fontSize: {
        'xxl': '2.5rem', // Tamaño extra grande para títulos o encabezados destacados
        'xl': '2rem',  // Tamaño grande para subtítulos
      },
      // Animaciones personalizadas
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      // Agregar la animación de "fade-in" desde la base
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
