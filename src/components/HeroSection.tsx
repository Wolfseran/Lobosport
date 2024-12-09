export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Fondo con el GIF */}
      <div className="hero-background">
        <img
          src="/images/background.gif" // Reemplaza "your-animated-gif.gif" por el nombre exacto de tu GIF
          alt="Animación de bienvenida"
        />
      </div>

      {/* Contenido del HeroSection */}
      <div className="hero-content">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a LoboSport</h1>
        <p className="text-lg mb-6">
          Tu tienda líder en equipamiento deportivo de calidad.
        </p>
        <a href="#catalog" className="hero-button">
          Ver Catálogo
        </a>
      </div>
    </section>
  );
}
