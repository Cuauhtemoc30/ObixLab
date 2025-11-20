import { useState } from "react";
import { Wrench, Twitter, Facebook, Instagram, Menu, X } from "lucide-react";

// IMPORTACIÓN DE FOTOS REALES DEL EQUIPO
import fotoSara from "./img/foto_sara.jpg";
import fotoJesus from "./img/foto_jesus.jpg";
import fotoDani from "./img/foto_dani.jpg";
import fotoTony from "./img/foto_tony.jpg";
import fotoCuauh from "./img/foto_cuauh.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sarahi De Leon",
      role: "Developer",
      img: fotoSara,
    },
    {
      name: "Jesus Morales",
      role: "Backend",
      img: fotoJesus,
    },
    {
      name: "Daniel Estrada",
      role: "Desarrollador de videojuegos",
      img: fotoDani,
    },
    {
      name: "Antonio Urrutia",
      role: "Front End",
      img: fotoTony,
    },
    {
      name: "Cuauhtémoc Montoya",
      role: "Scrum Master",
      img: fotoCuauh,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Wrench className="text-blue-600" /> ObixLab
          </h1>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 font-semibold">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#equipo" className="hover:text-blue-600">Equipo</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 font-semibold">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#equipo" className="hover:text-blue-600">Equipo</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </div>
        )}
      </nav>

      {/* EQUIPO */}
      <section id="equipo" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-3xl p-6 text-center">

              {/* FOTO DEL INTEGRANTE */}
              <div className="bg-white rounded-2xl overflow-hidden mb-4 shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className={`w-full h-48 object-cover object-center rounded-2xl
                    ${
                      member.img === fotoTony ||
                      member.img === fotoCuauh ||
                      member.img === fotoDani ||
                      member.img === fotoJesus
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
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-10 text-center shadow-inner">
        <p className="font-semibold text-gray-700 mb-4">
          Síguenos en nuestras redes
        </p>

        <div className="flex justify-center gap-6 text-blue-600">
          <Twitter size={30} className="hover:text-blue-800 cursor-pointer" />
          <Facebook size={30} className="hover:text-blue-800 cursor-pointer" />
          <Instagram size={30} className="hover:text-blue-800 cursor-pointer" />
        </div>

        <p className="mt-6 text-gray-500">© 2025 ObixLab. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
