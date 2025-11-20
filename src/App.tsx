import { useState } from 'react';
import { Wrench, Twitter, Facebook, Instagram, Menu, X } from 'lucide-react';

import fotoSara from "./img/foto_sara.jpg";
import fotoJesus from "./img/foto_jesus.jpg";
import fotoDani from "./img/foto_dani.jpg";
import fotoTony from "./img/foto_tony.jpg";
import fotoCuauh from "./img/foto_cuauh.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const team = [
    {
      name: 'Sarahi De Leon',
      role: 'Developer',
      img: fotoSara,
    },
    {
      name: 'Jesus Morales',
      role: 'Backend',
      img: fotoJesus,
    },
    {
      name: 'Daniel Estrada',
      role: 'Desarrollador de videojuegos',
      img: fotoDani,
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
  ];

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

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-5xl font-bold text-center mb-8">Nuestro equipo de trabajo</h2>
          <p className="text-center text-gray-700 italic max-w-4xl mx-auto mb-16 text-lg">
            Un equipo de trabajo es un grupo de personas que colaboran con una meta en común. Cada miembro aporta sus habilidades y conocimientos únicos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-3xl p-6 text-center">

                <div className="bg-white rounded-2xl overflow-hidden mb-4 shadow-md">
                  <img
                    src={member.img}
                    alt={member.name}
                    className={`w-full h-48 object-cover object-center rounded-2xl
                      ${
                        // Solo Tony, Cuauh y Dani necesitan zoom para ocultar borde gris
                        member.img === fotoTony ||
                        member.img === fotoCuauh ||
                        member.img === fotoDani
                          ? "scale-125"
                          : ""
                      }
                    `}
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
