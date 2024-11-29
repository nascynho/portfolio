import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import './App.css';
import minhaFoto from './assets/minhaFoto.jpg'; // Certifique-se de que a imagem está na pasta 'assets'
import Pokedex from './assets/Pokedex.jpg';
import velha from './assets/velha.jpg';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Seção de Sobre */}
        <div className="about-section">
          <h1>Sobre Mim</h1>
          <div className="about-container">
            {/* Foto */}
            <div className="photo-container">
              <img src={minhaFoto} alt="Minha Foto" className="profile-photo" />
            </div>

            {/* Descrição */}
            <div className="description">
              <p>
              "Sou um desenvolvedor no segundo período de Análise e Desenvolvimento de Sistemas (ADS) e atualmente faço parte da empresa júnior Nassausoft. Tenho experiência com várias tecnologias, como HTML, CSS, JavaScript, Java, PHP, e Programação Orientada a Objetos (POO). Ao longo da minha trajetória, também participei de projetos inovadores, como a criação de órteses com impressão 3D. Sou fluente em inglês e estou constantemente me dedicando ao aprendizado de novas tecnologias e conceitos para aprimorar minhas habilidades como desenvolvedor."
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Projetos */}
        <div className="projects-section">
          <h2>Meus Projetos</h2>
          <div className="projects-container">
            <div className="project">
              <img src={Pokedex} alt="Projeto 1" />
              <a href="https://github.com/joao-analista/Pokedex" target="_blank" rel="noopener noreferrer">Ver Projeto Pokedex com API</a>
            </div>
            <div className="project">
              <img src={velha}alt="Projeto 2" />
              <a href="https://github.com/joao-analista/Jogo-da-velha" target="_blank" rel="noopener noreferrer">Ver Projeto Jogo da velha</a>
            </div>
          </div>
        </div>

        {/* Seção de Contato */}
        <div className="contact-section">
          <h2>Entre em Contato</h2>
          <p>Se você tem um projeto ou oportunidade interessante, entre em contato comigo!</p>
          <a href="mailto:analistajggl@gmail.com">Enviar Email</a>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
