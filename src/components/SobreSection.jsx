import Reveal from "./Reveal";
import { Users, Target, Lightbulb, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: <Target />,
    title: "Nossa missão",
    text: "Transformar a triagem médica em um processo mais rápido, acessível e inteligente.",
  },
  {
    icon: <Lightbulb />,
    title: "Inovação",
    text: "Unimos tecnologia, sensores e automação para apoiar profissionais da saúde.",
  },
  {
    icon: <HeartHandshake />,
    title: "Cuidado humano",
    text: "Mesmo com tecnologia, o foco continua sendo melhorar a experiência do paciente.",
  },
  {
    icon: <Users />,
    title: "Equipe InovaMed",
    text: "Um projeto criado para responder aos desafios da saúde na rotina moderna.",
  },
];

export default function SobreSection() {
  return (
    <section id="sobre" className="sobreSection">
      <Reveal className="sobreHeader">
        <span className="sectionTag">Sobre nós</span>
        <h2>A saúde não pode esperar.</h2>
        <p>
          A InovaMed nasceu da ideia de reduzir filas, otimizar a triagem e
          aproximar tecnologia do cuidado médico.
        </p>
      </Reveal>

      <div className="sobreGrid">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.12}>
            <div className="sobreCard">
              <div className="sobreIcon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}