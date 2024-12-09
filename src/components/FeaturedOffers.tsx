const featuredProducts = [
  { id: 1, name: 'Balón Pro', image: '/images/balonpro.jpg' },
  { id: 2, name: 'Zapatos Trail', image: '/images/zapatostrail.jpg' },
  { id: 3, name: 'Camiseta DryFit', image: '/images/camisetadryfit.jpg' },
  { id: 4, name: 'Pantalones Deportivos', image: '/images/pantolonesdeportivos.jpg' },
];

export default function FeaturedOffers() {
  return (
    <section id="offers" className="py-16 bg-purpleWolf">
      {/* Título de la sección */}
      <h2 className="text-4xl font-bold text-white text-center">Ofertas Destacadas</h2>

      {/* Descripción de la oferta */}
      <div className="mt-8 text-center">
        <p className="text-2xl text-lightGray">
          ¡Descuentos de hasta el <span className="text-white font-semibold">50%</span> en equipo deportivo!
        </p>
      </div>

      {/* Productos en oferta */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-darkGray p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-white mt-4">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
