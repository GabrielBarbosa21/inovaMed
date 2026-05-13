import { useState } from "react";
import Reveal from "./Reveal";
import { Bot, Mail, Send, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O que é a cabine InovaMed?",
    answer:
      "É uma cabine inteligente de triagem médica que ajuda na coleta inicial de informações e sinais vitais do paciente.",
  },
  {
    question: "A cabine substitui um médico?",
    answer:
      "Não. A InovaMed apoia a triagem inicial e organiza os dados para facilitar o atendimento profissional.",
  },
  {
    question: "Quais dados podem ser coletados?",
    answer:
      "A cabine pode coletar informações de triagem, peso, temperatura, presença e sinais vitais conforme os sensores integrados.",
  },
];

export default function DuvidasSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  async function handleSend() {
    setError("");
    setResponse("");

    if (!message.trim()) {
      setError("Digite uma pergunta.");
      return;
    }

    if (!email.trim()) {
      setError("Digite seu email.");
      return;
    }

    try {
      setLoading(true);

      const makeResponse = await fetch(import.meta.env.VITE_MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: message.trim(),
          email: email.trim().toLowerCase(),
          source: "site-inovamed",
          createdAt: new Date().toISOString(),
        }),
      });

      if (!makeResponse.ok) {
        throw new Error("Erro ao enviar pergunta para o Make.");
      }

      const data = await makeResponse.json();

      setResponse(data.answer || "Pergunta enviada com sucesso.");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Não foi possível enviar sua pergunta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="duvidas" className="duvidasSection">
      <Reveal className="duvidasHeader">
        <span className="sectionTag">Dúvidas?</span>
        <h2>Fale com a IA da InovaMed</h2>
        <p>
          Tire dúvidas sobre a cabine, sensores, funcionamento e aplicação do
          produto. Caso a IA não consiga responder, sua pergunta será
          encaminhada para a equipe responsável.
        </p>
      </Reveal>

      <div className="duvidasContent">
        <Reveal className="faqBox">
          <h3>
            <HelpCircle size={24} />
            Perguntas frequentes
          </h3>

          {faqs.map((faq, index) => (
            <button
              key={faq.question}
              className={`faqItem ${openFaq === index ? "active" : ""}`}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              type="button"
            >
              <strong>{faq.question}</strong>

              {openFaq === index && <p>{faq.answer}</p>}
            </button>
          ))}
        </Reveal>

        <Reveal className="chatBox" delay={0.15}>
          <div className="chatTop">
            <div className="botIcon">
              <Bot />
            </div>

            <div>
              <h3>Assistente InovaMed</h3>
              <p>Resposta automática sobre o produto</p>
            </div>
          </div>

          <label>
            Sua pergunta
            <textarea
              placeholder="Ex: Como funciona o espelho medicinal?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={800}
            />
          </label>

          <label>
            Seu email para retorno
            <div className="emailInput">
              <Mail size={18} />
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>

          <button
            className="sendQuestion"
            onClick={handleSend}
            disabled={loading}
            type="button"
          >
            <Send size={18} />
            {loading ? "Enviando..." : "Enviar pergunta"}
          </button>

          <small>
            Se a IA não conseguir responder, a pergunta será enviada para os
            responsáveis pela InovaMed.
          </small>

          {loading && (
            <div className="aiStatus loading">
              A IA está analisando sua pergunta...
            </div>
          )}

          {response && (
            <div className="aiResponse">
              <strong>Resposta da IA:</strong>
              <p>{response}</p>
            </div>
          )}

          {error && <div className="aiError">{error}</div>}
        </Reveal>
      </div>
    </section>
  );
}