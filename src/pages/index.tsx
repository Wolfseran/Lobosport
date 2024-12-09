import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Catalog from '@/components/Catalog';
import FeaturedOffers from '@/components/FeaturedOffers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Contenido del héroe sin imagen de fondo estática */}
      <div className="relative min-h-screen">
        {/* Capa de opacidad para mejorar contraste */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Contenido del héroe con el GIF animado */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
        </div>
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-10">
        <section id="catalog">
          <Catalog />
        </section>

        {/* Separador entre secciones */}
        <div className="my-10"></div>

        <section id="offers">
          <FeaturedOffers />
        </section>

        <Footer />
      </main>
    </>
  );
}
