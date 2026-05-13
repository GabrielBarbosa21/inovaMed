import { useState } from "react";
import Cabine3D from "./Cabine3D";
import ModelViewer from "./ModelViewer";
import { X } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    title: "Espelho medicinal touch",
    model: "/models/espelho.glb",
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

export default function TecnologiaSection() {
  const [activeItem, setActiveItem] = useState(null);

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
            <button className="techCard" onClick={() => setActiveItem(item)}>
              <h3>{item.title}</h3>
              <p>Ver modelo 3D e especificações</p>
            </button>
          </Reveal>
        ))}
      </div>

      {activeItem && (
        <div className="specOverlay">
          <div className="specModal componentModal">
            <button className="closeSpec" onClick={() => setActiveItem(null)}>
              <X size={20} />
            </button>

            <div className="componentModelBox">
              {activeItem.model ? (
                <ModelViewer
                  path={activeItem.model}
                  scale={1.6}
                  position={[0, -0, 0]}
                />
              ) : (
                <div className="modelPlaceholder">
                  <h3>Modelo 3D em desenvolvimento</h3>
                  <p>Este componente será adicionado em breve.</p>
                </div>
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