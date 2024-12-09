import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es"> {/* Cambié el idioma a español */}
      <Head>
        {/* Mejora SEO y accesibilidad */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Tu tienda deportiva LoboSport con las mejores ofertas y productos para tu rendimiento." />
        {/* Otros meta tags si es necesario */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
