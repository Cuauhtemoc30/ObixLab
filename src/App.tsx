import { useState } from 'react';
import { Wrench, Twitter, Facebook, Instagram, Menu, X } from 'lucide-react';
import fotoSara from "./img/foto_sara.jpg";
import fotoTony from "./img/foto_tony.jpg";
import fotoCuauh from "./img/foto_cuauh.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/icono.png" alt="ObixLab Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold">ObixLab</span>
            </div>

            {/* Botón menú móvil */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Navegación */}
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">Acerca de ObixLab</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900 font-medium">Equipo de Trabajo</a>
            </nav>
          </div>

          {/* Menú móvil */}
          {menuOpen && (
            <nav className="flex flex-col gap-4 mt-4 pb-4 border-t md:hidden">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Acerca de ObixLab</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Equipo de Trabajo</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Encuentra Tu Próximo Trabajo En Construcción
            </h1>
            <p className="text-gray-600 mb-12 text-lg">
              Conectamos profesionales de la construcción con las mejores oportunidades laborales. Miles de ofertas actualizadas diariamente.
            </p>
            <div className="flex gap-12 flex-wrap">
              <div>
                <div className="text-4xl font-bold">15,000+</div>
                <div className="text-gray-600">Trabajos Activos</div>
              </div>
              <div>
                <div className="text-4xl font-bold">8,500+</div>
                <div className="text-gray-600">Empresas</div>
              </div>
              <div>
                <div className="text-4xl font-bold">50,000+</div>
                <div className="text-gray-600">Profesionales</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Trabajadores de construcción"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <div className="font-bold">Nuevo Trabajo!</div>
                <div className="text-sm text-gray-600">Operador de grua</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Acerca de ObixLab</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                En ObixLab, creemos que el mundo de la construcción también puede ser moderno y eficiente. Nacimos para solucionar los desafíos diarios de contratistas y profesionales del sector, usando la tecnología para hacer el trabajo más sencillo, rápido y organizado.
              </p>
              <p>
                Nuestra misión es clara: desarrollar herramientas digitales que modernicen la industria. Queremos que la tecnología sea un aliado real en cada obra, ayudando a los contratistas a gestionar sus proyectos, a su equipo y su tiempo de forma más inteligente.
              </p>
              <p>
                Buscamos ser líderes en innovación tecnológica para la construcción. Aspiramos a transformar la manera en que se gestiona el trabajo, creando soluciones prácticas y confiables que reduzcan el estrés, ahorren tiempo y mejoren los resultados para todos los involucrados.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative inline-block">
                <div className="flex gap-4">
                  <div className="w-56 h-56 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Trabajador 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-56 h-56 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Trabajador 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 w-80">
                  <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                    <Wrench className="w-7 h-7 text-gray-800" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Vacante aceptada</div>
                    <div className="text-gray-600">Chalan</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-8">Nuestro equipo de trabajo</h2>
          <p className="text-center text-gray-700 italic max-w-4xl mx-auto mb-16 text-lg leading-relaxed">
            Un equipo de trabajo es un grupo de personas que colaboran con una meta en común. Cada miembro aporta sus habilidades y conocimientos únicos para alcanzar objetivos compartidos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'Sarahi De Leon',
                role: 'Developer',
                img: fotoSara,
              },
              {
                name: 'Jesus Morales',
                role: 'Backend',
                img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                name: 'Daniel Estrada',
                role: 'Desarrollador de videojuegos',
                img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
              },
              {
                name: 'Antonio Urrutia',
                role: 'Front End',
                img: fotoTony,
              },
              {
                name: 'Cuauhtémoc Montoya',
                role: 'Scrum Master',
                img: fotoCuauh,
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-3xl p-6 text-center">
                <div className="bg-white rounded-2xl overflow-hidden mb-4 shadow-md">
                  <img
                    src={member.img}
                    alt={member.name}
                    className={`w-full h-48 object-cover object-center rounded-2xl ${
                      member.img === fotoTony || member.img === fotoCuauh
                        ? "scale-125"
                        : ""
                    }`}
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600 italic">{member.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-600 space-y-1">
              <div>Declaración de Accesibilidad</div>
              <div>Términos y Condiciones</div>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="font-semibold">Contáctanos</div>
              <div>Tel: 123-456-7890</div>
              <div>Correo: obixlab@gmail.com</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600 font-semibold">Síguenos en</div>
              <div className="flex gap-4">
                <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
