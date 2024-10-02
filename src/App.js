import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import ToggleSwitch from "./components/ToggleSwitch";
import Carousel from "./components/Carousel";
import logo from "./assets/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showVideos, setShowVideos] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [showToggleSwitch, setShowToggleSwitch] = useState(false); // Estado para controlar o ToggleSwitch

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const videos = [
    "https://www.youtube.com/embed/IYDVEi_6wDE?si=3Ui-ivO6bYJ09c3Q",
    "https://www.youtube.com/embed/HKsDKAn6uQ0?si=SM_JnBFDySbJ2z9M",
    "https://www.youtube.com/embed/zbJbLdQ7RjU?si=5AxbplLr4vBdNyNY",
    "https://www.youtube.com/embed/TuL2sDAwYI4?si=QZRq6UUMarCnrPRF",
    "https://www.youtube.com/embed/gcKO4kAeoj4?si=RExoOsYJBVpyXArX",
    "https://www.youtube.com/embed/UDidPU-dIy8?si=F5VSYwQ19m1ucdtR",
  ];

  const produtos = [
    {
      id: 1,
      imagem:
        "https://marimaria.vteximg.com.br/arquivos/ids/164840/Brow-stick-color-marrom-fechado-mascara-sobrancelhas-mari-maria-make-up.png?v=638424079176570000",
      descricao: "Descrição do produto 1",
    },
    {
      id: 2,
      imagem:
        "https://marimaria.vteximg.com.br/arquivos/ids/164840/Brow-stick-color-marrom-fechado-mascara-sobrancelhas-mari-maria-make-up.png?v=638424079176570000",
      descricao: "Descrição do produto 2",
    },
    {
      id: 3,
      imagem:
        "https://marimaria.vteximg.com.br/arquivos/ids/164840/Brow-stick-color-marrom-fechado-mascara-sobrancelhas-mari-maria-make-up.png?v=638424079176570000",
      descricao: "Descrição do produto 3",
    },
    {
      id: 4,
      imagem:
        "https://marimaria.vteximg.com.br/arquivos/ids/164840/Brow-stick-color-marrom-fechado-mascara-sobrancelhas-mari-maria-make-up.png?v=638424079176570000",
      descricao: "Descrição do produto 4",
    },
    {
      id: 5,
      imagem:
        "https://marimaria.vteximg.com.br/arquivos/ids/164840/Brow-stick-color-marrom-fechado-mascara-sobrancelhas-mari-maria-make-up.png?v=638424079176570000",
      descricao: "Descrição do produto 5",
    },
    {
      id: 6,
      imagem:
        "https://marimaria.vteximg.com.br/arquivos/ids/164840/Brow-stick-color-marrom-fechado-mascara-sobrancelhas-mari-maria-make-up.png?v=638424079176570000",
      descricao: "Descrição do produto 6",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((oldValue) => {
        if (oldValue < 100) {
          return oldValue + 5; // Aumenta o valor em 5 a cada intervalo
        } else {
          clearInterval(interval); // Para o intervalo quando atingir 100
          return 100;
        }
      });
    }, 500); // Ajuste o tempo conforme necessário

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logotipo" className="logo" />
        <nav className="navbar">
          <button
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={menuOpen ? "menu open" : "menu"}>
            <li>Home</li>
            <li>Sobre</li>
            <li
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Serviços
              {dropdownOpen && (
                <ul className="dropdown">
                  <li>Subitem 1</li>
                  <li>Subitem 2</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <Button primary size="large" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />} {/* Ícone de sol ou lua */}
        </Button>
      </header>

      {/* Main Section */}
      <main className="main">
        <section className="content">
          <h1>Bem-vindo à Loja de Maquiagem</h1>
          <p>Explore nossos produtos e tutoriais incríveis!</p>

          <div className="button-progress-container">
            <Button
              primary
              size="large"
              onClick={() => setShowVideos(!showVideos)}
            >
              {showVideos ? "Ocultar Vídeos" : "Mostrar Vídeos"}
            </Button>
            {/* Barra de Progresso ao lado do botão */}
            <ProgressBar progress={progressValue} />
          </div>

          {/* Carousel de Imagens */}
          <Carousel />

          {showVideos && (
            <div className="video-section">
              {videos.map((videoUrl, index) => (
                <iframe
                  key={index}
                  width="560"
                  height="315"
                  src={videoUrl}
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          )}

          {/* Grid de Produtos */}
          <div className="products-grid">
            {produtos.map((produto) => (
              <div key={produto.id} className="product-card">
                <img src={produto.imagem} alt={`Produto ${produto.id}`} />
                <p>{produto.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Loja de Maquiagem</p>
        <div className="social-media">
          <a
            href="https://www.instagram.com/marimaria/?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@MariMaria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </footer>

      {/* Condicional para exibir o ToggleSwitch */}
      {showToggleSwitch && <ToggleSwitch />}
    </div>
  );
}

export default App;
