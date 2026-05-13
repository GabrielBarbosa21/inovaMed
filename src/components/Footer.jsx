import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footerContent">
        <div>
          <h2>
            <span>Inova</span>Med
          </h2>
          <p>
            Projeto acadêmico desenvolvido para apresentação no SENAC,
            com foco em inovação, tecnologia e saúde.
          </p>
        </div>

        <div className="footerInfo">
          <p>
            As imagens e representações visuais utilizadas neste projeto foram
            criadas ou auxiliadas com o uso de inteligência artificial.
          </p>

          <p>
            Este site foi desenvolvido com proposta responsiva, buscando boa
            visualização em diferentes tamanhos de tela.
          </p>
        </div>

        <div className="footerBottom">
          <span>Trabalho acadêmico SENAC</span>
          <span>© 2026 InovaMed</span>
        </div>
      </Reveal>
    </footer>
  );
}