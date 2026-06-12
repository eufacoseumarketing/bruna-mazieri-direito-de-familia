import { createFileRoute, Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.jpg";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

const serif = { fontFamily: "var(--font-serif)" };
const sans = { fontFamily: "var(--font-sans)" };

function PrivacyPolicy() {
  return (
    <div className="bg-[#16202c] text-white min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-[#16202c]/80 backdrop-blur-sm sticky top-0 z-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logoImg}
              alt="Bruna Mazieri Advocacia"
              className="h-12 w-12 rounded-full object-cover border border-[#c19e72]/30"
            />
            <span className="text-white font-semibold text-lg" style={serif}>
              Bruna Mazieri Advocacia
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-zinc-300 hover:text-[#c19e72] transition-colors"
            style={sans}
          >
            &larr; Voltar para o início
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#c19e72] mb-8" style={serif}>
          Política de Privacidade
        </h1>
        <div className="space-y-8 text-zinc-300 font-light leading-relaxed" style={sans}>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={serif}>
              1. Introdução
            </h2>
            <p>
              A sua privacidade é importante para nós. É política do escritório Bruna Mazieri Advocacia respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={serif}>
              2. Coleta de Dados
            </h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="mt-4">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={serif}>
              3. Uso de Cookies
            </h2>
            <p>
              Nosso site pode utilizar cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para que os sites funcionem, ou funcionem de forma mais eficiente, bem como para fornecer informações de relatórios.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={serif}>
              4. Links para Sites de Terceiros
            </h2>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={serif}>
              5. Consentimento
            </h2>
            <p>
              O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4" style={serif}>
              6. Contato
            </h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato através do e-mail: contato@brunamazieri.adv.br.
            </p>
          </section>
          <p className="mt-12 text-sm text-zinc-500">
            Esta política é efetiva a partir de {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}.
          </p>
        </div>
      </main>
    </div>
  );
}