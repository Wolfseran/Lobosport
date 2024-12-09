import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head"; // Importar Head para metadatos
import { CSSTransition } from "react-transition-group";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [inProp, setInProp] = useState(true); // Cambié el estado inicial a `true` para prevenir parpadeos iniciales

  useEffect(() => {
    const handleRouteChangeStart = () => setInProp(false); // Animación de salida
    const handleRouteChangeComplete = () => setInProp(true); // Animación de entrada

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        {/* Meta etiqueta viewport para diseño responsivo */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LoboSport</title> {/* Título predeterminado de la app */}
      </Head>
      {/* Transición de contenido */}
      <CSSTransition in={inProp} timeout={300} classNames="fade" unmountOnExit>
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      </CSSTransition>
    </>
  );
}
