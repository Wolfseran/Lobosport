const products = [
  { id: 1, name: 'Balón Pro', image: '/images/balonpro.jpg' },
  { id: 2, name: 'Zapatos Trail', image: '/images/zapatostrail.jpg' },
  { id: 3, name: 'Camiseta DryFit', image: '/images/camisetadryfit.jpg' },
  { id: 4, name: 'Pantalones Deportivos', image: '/images/pantolonesdeportivos.jpg' },
  { id: 5, name: 'Botella Térmica', image: '/images/botellatermica.jpg' },
  { id: 6, name: 'Mochila Fitness', image: '/images/mochilafitness.jpg' },
  { id: 7, name: 'Banda para la Cabeza', image: '/images/bandaparalacabeza.jpg' },
  { id: 8, name: 'Guantes de Entrenamiento', image: '/images/guantesdeentrenamiento.jpg' },
  { id: 9, name: 'Rodillera Deportiva', image: '/images/rodilleradeportiva.jpg' },
];

export default function Catalog() {
  return (
    <section id="catalog" className="py-16 bg-darkGray">
      <h2 className="text-4xl font-bold text-white text-center">Catálogo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-purpleWolf p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform">
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
