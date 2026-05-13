import {
  useState,
  lazy,
  Suspense,
  useEffect,
} from "react";

import Cabine3D from "./Cabine3D";
import { X } from "lucide-react";
import Reveal from "./Reveal";

const ModelViewer = lazy(() => import("./ModelViewer"));

const items = [
  {
    title: "Espelho medicinal touch",
    model: "/models/espelho.glb",
    scale: 1.6,
    position: [0, 0, 0],
    description:
      "Interface interativa para perguntas clínicas, coleta de informações e orientação do paciente durante a triagem.",
    specs: [
      "Monitor atrás do espelho",
      "Perguntas automáticas",
      "Histórico de saúde",
      "Encaminhamento dos dados ao médico",
    ],
  },

  {
    title: "Balança digital",
    model: "/models/balanca.glb",
    scale: 1.6,
    position: [0, 0, 0],
    description:
      "Sistema integrado para medir o peso corporal automaticamente durante o atendimento.",
    specs: [
      "Célula de carga",
      "Módulo HX711",
      "Medição automática",
      "Integração com o sistema",
    ],
  },

  {
    title: "Sensores vitais",
    model: "/models/sensores.glb",
    scale: 1.6,
    position: [0, 0, 0],
    description:
      "Sensores responsáveis pela coleta inicial dos sinais vitais do paciente.",
    specs: [
      "MLX90640 para temperatura",
      "MAX30102 para coração e oxigênio",
      "HC-SR501 para presença",
      "Coleta de dados em tempo real",
    ],
  },

  {
    title: "Sistema de higienização",
    model: "/models/higienizacao.glb",
    scale: 1.6,
    position: [0, 0, 0],
    description:
      "Estrutura pensada para segurança, limpeza e uso contínuo em ambientes hospitalares.",
    specs: [
      "Superfícies de fácil limpeza",
      "Fluxo seguro",
      "Redução de contato manual",
      "Apoio à biossegurança",
    ],
  },
];

function preloadModels() {
  items.forEach((item) => {
    if (item.model) {
      fetch(item.model);
    }
  });
}

export default function TecnologiaSection() {
  const [activeItem, setActiveItem] = useState(null);
  const [isLoadingModel, setIsLoadingModel] = useState(false);

  function openModel(item) {
    setIsLoadingModel(true);
    setActiveItem(item);

    setTimeout(() => {
      setIsLoadingModel(false);
    }, 2000);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      preloadModels();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="tecnologia" className="tecnologiaSection">
      <Reveal className="techHeader">
        <span className="sectionTag">Tecnologia</span>

        <h2>Cabine inteligente em 3D</h2>

        <p>
          Interaja com o modelo 3D da cabine e clique nos cards para visualizar
          o modelo do componente e suas especificações técnicas.
        </p>
      </Reveal>

      <Reveal className="tech3dBox" delay={0.1}>
        <Cabine3D />
      </Reveal>

      <div className="techCards">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.12}>
            <button
              className="techCard"
              onClick={() => openModel(item)}
            >
              <h3>{item.title}</h3>

              <p>Ver modelo 3D e especificações</p>
            </button>
          </Reveal>
        ))}
      </div>

      {activeItem && (
        <div className="specOverlay">
          <div className="specModal componentModal">
            <button
              className="closeSpec"
              onClick={() => setActiveItem(null)}
            >
              <X size={20} />
            </button>

            <div className="componentModelBox">
              {isLoadingModel ? (
                <div className="loading3d">
                  <div className="loaderRing" />

                  <h3>Carregando modelo 3D</h3>

                  <p>
                    Aguarde alguns segundos enquanto o componente é preparado.
                  </p>
                </div>
              ) : (
                <Suspense
                  fallback={
                    <div className="loading3d">
                      <div className="loaderRing" />

                      <h3>Carregando modelo 3D</h3>

                      <p>
                        Aguarde alguns segundos enquanto o componente é preparado.
                      </p>
                    </div>
                  }
                >
                  <ModelViewer
                    path={activeItem.model}
                    scale={activeItem.scale}
                    position={activeItem.position}
                  />
                </Suspense>
              )}
            </div>

            <div className="componentInfo">
              <h3>{activeItem.title}</h3>

              <p>{activeItem.description}</p>

              <ul>
                {activeItem.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}