import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-purpleWolf shadow-lg">
      {/* Logo y Título del sitio */}
      <div className="flex items-center space-x-4">
        <Image 
          src="/images/loboicon.jpg"  // Asegúrate de que la imagen esté en 'public/images/loboicon.jpg'
          alt="Logo LoboSport" 
          width={40} 
          height={40} 
          className="rounded-full" 
        />
        <h1 className="text-3xl font-bold text-white">LoboSport</h1>
      </div>

      {/* Navegación con rectángulos para separar las opciones */}
      <nav className="space-x-4">
        <Link href="#catalog" className="bg-darkGray px-6 py-2 rounded-lg text-lightGray hover:text-white transition-colors">
          Catálogo
        </Link>
        <Link href="#offers" className="bg-darkGray px-6 py-2 rounded-lg text-lightGray hover:text-white transition-colors">
          Ofertas
        </Link>
      </nav>
    </header>
  );
}
