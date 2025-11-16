 import React from "react";
import { Home as HomeIcon, Server, Grid, User, Github, Instagram, MessageCircle } from "lucide-react";

// ================= App =================
const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-display bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex flex-1 flex-col items-center gap-16">
        <Home />
        <Servicos />
        <Sobre />
        <CEO />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

// ================= Header =================
const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-500">
    <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
      <a href="#" className="flex items-center gap-4 text-gray-900 dark:text-white">
        <Logo />
        <h2 className="font-bold text-lg">Hybrid Tech</h2>
      </a>
      <div className="hidden lg:flex gap-6 items-center">
        <a href="#servicos" className="hover:text-blue-600 transition-colors duration-300">Serviços</a>
        <a href="#sobre" className="hover:text-blue-600 transition-colors duration-300">Sobre</a>
        <a href="#depoimentos" className="hover:text-blue-600 transition-colors duration-300">Depoimentos</a>
        <a href="#contato" className="hover:text-blue-600 transition-colors duration-300">Contato</a>
        <div className="flex gap-3 ml-4">
          <a href="https://github.com/" target="_blank" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"><Github /></a>
          <a href="https://instagram.com/" target="_blank" className="text-pink-500 hover:text-pink-600 transition-colors duration-300"><Instagram /></a>
          <a href="https://wa.me/1234567890" target="_blank" className="text-green-500 hover:text-green-600 transition-colors duration-300"><MessageCircle /></a>
        </div>
      </div>
      <a
        href="#contato"
        className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold hover:scale-105 transition-transform duration-300"
      >
        Solicitar Orçamento
      </a>
    </nav>
  </header>
);

const Logo: React.FC = () => (
  <div className="w-6 h-6 text-blue-600">
    <svg fill="currentColor" viewBox="0 0 48 48">
      <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" />
    </svg>
  </div>
);

// ================= Home =================
const Home: React.FC = () => (
  <section
    id="home"
    className="py-20 md:py-28 w-full px-4 max-w-6xl flex flex-col items-center justify-center gap-6 rounded-lg bg-cover bg-center text-center animate-fadeIn"
    style={{
      backgroundImage:
        "linear-gradient(rgba(16,22,34,0.8), rgba(16,22,34,1)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuGbwCnJSqgnWhtyzh-o8dz8dq6rXRVtVwgqw_61kh3-st1qpFCENyd4n07PAcqPXNyGdFnu8FB-3wibrdRkv5bCaZNT32VBpCtidY-kZlY5jwuCJG33ZCOZi7B4dQfBBRmPx9dRiPNQnfl2Dy8kzfRlR7N12UKLpyYOr5d22pa3OIcgAZ16UL3RC-zn0nHBpHMUhlIRDHjMkYa09EhUpVhmRftnKTj9wj8hSdCU4EbxlyHq6WVcoLe5iNYy-5ZswzERgsVoP3DnGB')",
    }}
  >
    <h1 className="text-white text-4xl md:text-6xl font-black">Transformando Ideias em Soluções Digitais</h1>
    <h2 className="text-gray-400 text-base md:text-lg mt-2">Especialistas em desenvolvimento de software e aplicações web modernas.</h2>
    <div className="flex gap-4 flex-wrap mt-4">
      <a className="px-5 py-2 rounded-full bg-blue-600 text-white font-bold hover:scale-105 transition-all duration-300">Ver Serviços</a>
      <a className="px-5 py-2 rounded-full bg-gray-800 text-white font-bold hover:scale-105 transition-all duration-300">Fale Conosco</a>
    </div>
  </section>
);

// ================= Servicos =================
const Servicos: React.FC = () => {
  const servicos = [
    { icon: <HomeIcon />, title: "Desenvolvimento de Sites", desc: "Criamos sites responsivos e otimizados para performance e SEO, usando as melhores práticas de desenvolvimento." },
    { icon: <Server />, title: "Landing Pages Profissionais", desc: "Páginas focadas em conversão com design moderno, performance otimizada e integração com ferramentas web." },
    { icon: <Grid />, title: "Sistemas e Apps Customizados", desc: "Desenvolvemos soluções sob medida para automatizar processos, com backends robustos e frontends responsivos." },
    { icon: <User />, title: "Integração de APIs & Serviços", desc: "Integramos sistemas, APIs e serviços em nuvem para criar ecossistemas digitais completos e escaláveis." },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 w-full max-w-6xl px-4 animate-fadeIn">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-white">Nossas Soluções</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Do conceito à implementação, entregamos software de qualidade com inovação e performance.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicos.map((s, i) => (
          <div key={i} className="flex flex-col gap-4 p-6 rounded-lg bg-gray-800 hover:-translate-y-2 hover:shadow-lg transition-all duration-500">
            <span className="text-blue-600 text-4xl">{s.icon}</span>
            <h3 className="text-white font-bold">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================= Sobre =================
const Sobre: React.FC = () => (
  <section id="sobre" className="py-16 sm:py-24 w-full max-w-6xl px-4 animate-fadeIn">
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-white">Sobre a Hybrid Tech</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A Hybrid Tech é uma empresa de tecnologia dedicada a criar soluções digitais inovadoras, sistemas web e aplicações escaláveis para transformar ideias em produtos reais e funcionais.
      </p>
    </div>
  </section>
);

// ================= CEO =================
const CEO: React.FC = () => (
  <section className="py-16 sm:py-24 w-full max-w-6xl px-4 animate-fadeIn">
    <div className="grid lg:grid-cols-3 gap-12 items-center">
      {/* Card do CEO */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
        <img
          className="w-40 h-40 rounded-full border-4 border-blue-600 object-cover mb-4"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO478pTbIEi-6FBU0Icav4ibum-qjAA0Yc5XZ7Th6-AhEGdv3SuuNmWRMLP9e47zDQBfz0iTnbo__fkDAHyL13PMZMbipWE1m83iLgXNNBqHjgknU4bbG_VS1jcfTjlrc0CiCQ3MdJ7O-qS3y3_4iaBZI07pt0MV67_xaIhnGFPbtQHBiSi4h6o7jyRX7Udaolq0VfAz1KlBP7HbGnZmnmn4uuu3wqCI7pzEu5moTuVIncca03vheDQ_9fMGLe7ucB5RstkfAJo66b"
          alt="Mario Estima"
        />
        <h3 className="text-2xl font-bold text-white">Mario Estima</h3>
        <p className="text-blue-600 font-semibold mb-2">CEO & Fundador</p>
        <p className="text-gray-100 text-sm mb-2">
          Fundador da Hybrid Tech, com paixão por criar soluções digitais que unem design, performance e inovação.
        </p>
        <p className="text-gray-100 text-sm mb-2">
          Mais de 10 anos de experiência em desenvolvimento web, mobile e sistemas customizados.
        </p>
        <p className="text-gray-100 text-sm">
          Especialista em JavaScript, TypeScript, React, Node.js e integrações complexas com APIs e serviços em nuvem.
        </p>
      </div>

      {/* Conteúdo adicional sobre o CEO */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-white text-center lg:text-left">Conheça Nosso CEO</h2>
        <p className="text-gray-400 text-base">
          "Desde a primeira linha de código que escrevi, soube que a tecnologia seria mais do que uma profissão; seria minha paixão. Ao longo dos anos, liderei projetos complexos, desenvolvendo soluções que impactaram empresas e usuários em escala global."
        </p>
        <p className="text-gray-400 text-base">
          Ele acredita em escrever código limpo, escalável e eficiente, sempre focado na experiência do usuário e na inovação tecnológica.
        </p>
        <p className="text-gray-400 text-base">
          Na Hybrid Tech, Mario lidera a equipe para transformar ideias em produtos digitais robustos, utilizando as melhores práticas de desenvolvimento, design e arquitetura de sistemas.
        </p>
      </div>
    </div>
  </section>
);

// ================= Depoimentos =================
const Depoimentos: React.FC = () => (
  <section id="depoimentos" className="py-16 sm:py-24 w-full max-w-6xl px-4 animate-fadeIn">
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-white">O que nossos clientes dizem</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">Resultados reais de projetos de desenvolvimento de software e sistemas web.</p>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: "Carlos Silva", role: "CEO da InovaCorp", text: "O novo sistema customizado otimizou nossos processos em 40%..." },
        { name: "Ana Pereira", role: "Diretora de Tecnologia", text: "A landing page teve uma taxa de conversão 25% maior e integração completa com nossos serviços..." },
        { name: "Juliana Martins", role: "Gerente de Produto", text: "As soluções digitais entregues pela Hybrid Tech transformaram nossa operação..." },
      ].map((d, i) => (
        <div key={i} className="p-6 rounded-lg bg-gray-800 border border-gray-700 flex flex-col gap-4 hover:scale-105 transition-transform">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-bold text-white">{d.name}</p>
              <p className="text-gray-400 text-sm">{d.role}</p>
            </div>
          </div>
          <p className="text-gray-100 text-sm">{d.text}</p>
        </div>
      ))}
    </div>
  </section>
);

// ================= Contato =================
const Contato: React.FC = () => (
  <section id="contato" className="py-16 sm:py-24 w-full max-w-6xl px-4 animate-fadeIn">
    <div className="bg-gray-800 p-8 md:p-12 rounded-lg">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white">Vamos construir algo incrível juntos.</h2>
          <p className="text-gray-400">Tem uma ideia ou projeto de software? Preencha o formulário e nossa equipe entrará em contato.</p>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Seu nome" className="w-full rounded-full px-4 py-3 bg-gray-900 text-white ring-1 ring-gray-700 focus:ring-blue-600" />
          <input type="email" placeholder="Seu e-mail" className="w-full rounded-full px-4 py-3 bg-gray-900 text-white ring-1 ring-gray-700 focus:ring-blue-600" />
          <textarea placeholder="Sua mensagem" rows={4} className="w-full rounded-lg px-4 py-3 bg-gray-900 text-white ring-1 ring-gray-700 focus:ring-blue-600" />
          <button type="submit" className="w-full sm:w-auto px-5 py-3 rounded-full bg-blue-600 text-white font-bold hover:scale-105 transition-transform">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>
);

// ================= Footer =================
const Footer: React.FC = () => (
  <footer className="w-full border-t border-gray-700 bg-gray-900 animate-fadeIn">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4 text-white">
        <Logo />
        <h2 className="font-bold text-lg">Hybrid Tech</h2>
      </div>
      <p className="text-sm text-gray-400">© 2024 Hybrid Tech. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default App;
