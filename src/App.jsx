import { motion } from "framer-motion";
import {
  ArrowDown,
  HeartPulse,
  ShieldCheck,
  Clock,
} from "lucide-react";

import "./App.css";

import TecnologiaSection from "./components/TecnologiaSection";
import Reveal from "./components/Reveal";
import SobreSection from "./components/SobreSection";
import DuvidasSection from "./components/DuvidasSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="site">
      <Header />
      <Hero />
      <CabineSection />
      <TecnologiaSection />
      <SobreSection />  
      <DuvidasSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logoIcon">+</div>

        <span>
          <strong>Inova</strong>Med
        </span>
      </div>

      <nav>
        <a href="#cabine">A cabine</a>
        <a href="#tecnologia">Tecnologia</a>
        <a href="#sobre">Sobre nós</a>
        <a href="#duvidas">Dúvidas?</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="heroGlow heroGlowPink" />
      <div className="heroGlow heroGlowBlue" />

      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="tag">Triagem médica inteligente</span>

        <h1>
          Tecnologia que transforma cuidado em{" "}
          <span>praticidade.</span>
        </h1>

        <p>
          Uma cabine inteligente para agilizar a triagem,
          coletar sinais vitais e apoiar o atendimento
          hospitalar com mais segurança e eficiência.
        </p>

        <div className="heroButtons">
          <a href="#cabine" className="primaryButton">
            Conhecer a cabine
          </a>

          <a href="#tecnologia" className="secondaryButton">
            Ver tecnologia
          </a>
        </div>
      </motion.div>

      <a href="#cabine" className="scrollButton">
        <ArrowDown size={24} />
      </a>
    </section>
  );
}

function CabineSection() {
  return (
    <section id="cabine" className="cabineSection">
      <Reveal className="cabineText">
        <span className="sectionTag">A cabine</span>

        <h2>
          Atendimento inicial mais{" "}
          <span>rápido</span>, seguro e eficiente.
        </h2>

        <p>
          A InovaMed é uma cabine inteligente de triagem
          equipada com espelho medicinal interativo,
          sensores integrados e sistema de encaminhamento
          dos dados para apoiar médicos, hospitais e
          clínicas.
        </p>

        <div className="benefits">
          <Reveal className="benefitCard" delay={0.1}>
            <Clock />

            <strong>Agilidade</strong>

            <small>
              Reduz o tempo de espera.
            </small>
          </Reveal>

          <Reveal className="benefitCard" delay={0.2}>
            <ShieldCheck />

            <strong>Segurança</strong>

            <small>
              Dados mais organizados.
            </small>
          </Reveal>

          <Reveal className="benefitCard" delay={0.3}>
            <HeartPulse />

            <strong>Cuidado</strong>

            <small>
              Experiência mais humana.
            </small>
          </Reveal>
        </div>
      </Reveal>

      <Reveal className="cabineImageBox" delay={0.15}>
        <div className="imageGlow" />

        <img
          src="/cabine.png"
          alt="Cabine inteligente InovaMed"
        />
      </Reveal>
    </section>
  );
}

export default App;