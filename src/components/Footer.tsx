export default function Footer() {
    return (
      <footer className="bg-purpleWolf text-white py-6">
        <div className="container mx-auto px-4">
          {/* Sección de información */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Información de la empresa */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">LoboSport</h2>
              <p className="text-sm">Tu tienda deportiva de confianza.</p>
            </div>
  
            {/* Enlaces rápidos */}
            <div className="mb-4 md:mb-0 space-x-4">
              <a href="/about" className="text-lightGray hover:text-white transition-colors">
                Acerca de Nosotros
              </a>
              <a href="/privacy" className="text-lightGray hover:text-white transition-colors">
                Políticas de Privacidad
              </a>
              <a href="/terms" className="text-lightGray hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
  
            {/* Redes sociales */}
            <div className="space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 inline-block" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 inline-block" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 inline-block" />
              </a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-sm mt-6">
            &copy; {new Date().getFullYear()} LoboSport. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    );
  }
  