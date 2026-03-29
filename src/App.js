import React from 'react';
import { UserCircle, Mail, ExternalLink, Code, MessageSquare } from 'lucide-react';

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Aplikasi Kasir POS",
      description: "Sistem kasir modern berbasis web dengan fitur laporan harian dan manajemen stok.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      link: "#"
    },
    {
      id: 2,
      title: "Dashboard Analitik",
      description: "Dashboard interaktif untuk memantau trafik website dan interaksi pengguna secara real-time.",
      tags: ["React", "Chart.js", "Node.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Landing Page Startup",
      description: "Halaman konversi tinggi untuk startup teknologi dengan animasi halus dan responsif.",
      tags: ["React", "Tailwind", "Vite"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed w-full backdrop-blur-md bg-gray-900/80 border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-white">Cantika<span className="text-blue-500">.</span></span>
          <div className="flex gap-6 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* HERO SECTION DENGAN FOTO */}
        <section id="about" className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Kolom Teks (Kiri) */}
          <div className="flex-1 flex flex-col items-start">
            <p className="text-blue-500 font-mono mb-4 flex items-center gap-2">
              <Code size={20} /> Halo, nama saya
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animasi-masuk">
              Cantika.
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-8 tracking-tight">
              Saya membangun antarmuka web.
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Saya seorang *Frontend Developer* yang fokus merancang dan membangun pengalaman digital yang luar biasa. Saat ini, saya tertarik mengeksplorasi ekosistem React, Tailwind CSS, dan desain web modern.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Hubungi Saya
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all">
                <Code size={20} /> GitHub
              </a>
            </div>
          </div>

          {/* Kolom Foto (Kanan) */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Efek cahaya di belakang foto */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Tag Img untuk Foto */}
              <img 
                src="/almet.jpeg" 
                alt="Foto Profil Cantika" 
                className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl group-hover:border-blue-500 transition-all duration-500"
              />
            </div>
          </div>

        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gray-600"></span>
            Beberapa Proyek Saya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300 flex flex-col group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                    <Code size={24} className="text-blue-500" />
                  </div>
                  <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h4 className="text-xl font-bold text-gray-100 mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">Mari Bekerja Sama</h3>
          <p className="text-gray-400 mb-10">
            Saya selalu terbuka untuk peluang baru, proyek *freelance*, atau sekadar berdiskusi tentang teknologi web. Jangan ragu untuk menyapa!
          </p>
          <a href="mailto:email@anda.com" className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 rounded-lg font-bold transition-colors">
            <Mail size={20} /> Kirim Pesan
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-white transition-colors"><UserCircle size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><MessageSquare size={20} /></a>
        </div>
        <p>Dibuat oleh Cantika.</p>
      </footer>
    </div>
  );
}