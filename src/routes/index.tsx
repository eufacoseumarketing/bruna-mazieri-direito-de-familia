import { createFileRoute } from "@tanstack/react-router";
import bannerImage from "@/assets/banner.webp";
import mobileBanner from "@/assets/mobile-banner.webp";
import { useState, useEffect, useRef } from "react";
// Assumindo a instalação: npm install framer-motion
import { motion, AnimatePresence, useScroll } from "framer-motion";

// --- IMPORTAÇÃO DAS IMAGENS DE SERVIÇOS ---
import divorcioImg from "@/assets/divorcio.jpg";
import guardaImg from "@/assets/guarda.jpg";
import pensaoImg from "@/assets/pensao.jpg";
import inventarioImg from "@/assets/inventario.jpg";

// --- IMPORTAÇÃO DE FUNDOS ---
import fundoDepoimentos from "@/assets/fundo.jpg";
import lpImage from "@/assets/lp.webp";
import sobreImage from "@/assets/sobre.webp";
import fundo2Image from "@/assets/fundo2.webp";
import logoImg from "@/assets/logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bruna Mazieri Advocacia — Direito de Família e Sucessões" },
      { name: "description", content: "Assessoria jurídica estratégica em Direito de Família e Sucessões. Proteja seus filhos, patrimônio e estabilidade emocional com sigilo e discrição." },
      { property: "og:title", content: "Bruna Mazieri Advocacia — Direito de Família" },
      { property: "og:description", content: "Assessoria jurídica estratégica para conflitos familiares, sucessório e patrimonial." },
    ],
  }),
  component: Index,
});

// Constantes de estilo e animação
const serif = { fontFamily: "var(--font-serif)" };
const sans = { fontFamily: "var(--font-sans)" };
const GOLD = "#c19e72";
const WA_LINK = "https://api.whatsapp.com/send?phone=5515996142970&text=Quero%20falar%20com%20a%20Dra.%20Bruna%20Mazieri";

// Variantes de Animação
const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: customEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const hover3DEffect = {
  rotateX: 5,
  rotateY: 5,
  z: 10,
  transition: { duration: 0.4, ease: customEase }
};

const hover3DEffectReverse = {
  rotateX: -5,
  rotateY: -5,
  z: 10,
  transition: { duration: 0.4, ease: customEase }
};

const neonGlow = {
  boxShadow: `0 0 15px 2px rgba(193, 158, 114, 0.3)`,
};

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="relative w-full bg-[#16202c] text-white">
      {/* Wrapper principal do Hero Original */}
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={bannerImage}
            alt=""
            className="hidden md:block h-full w-full object-cover object-center"
          />
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={mobileBanner}
            alt=""
            className="md:hidden h-full w-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(22,32,44,0.4) 0%, rgba(22,32,44,0.7) 60%, #16202c 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: "linear-gradient(90deg, #16202c 0%, #16202c 20%, rgba(22,32,44,0.3) 40%, rgba(22,32,44,0.0) 65%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#16202c] to-transparent pointer-events-none" />
        </div>

        {/* Floating pill header */}
        <header className="relative z-20 flex items-center justify-center gap-4 px-4 pt-6 md:pt-8">
          <motion.img
            src={logoImg}
            alt="Bruna Mazieri Advocacia"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover shadow-2xl border border-[#c19e72]/30 shrink-0"
          />
          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: customEase }}
            className="flex items-center gap-2 rounded-full px-2 py-1.5 md:px-3 md:py-2 shadow-2xl border border-[#c19e72]/20"
            style={{
              background: "linear-gradient(180deg, #e8c79a 0%, #d4ad7c 50%, #c19e72 100%)",
              boxShadow: `0 4px 20px rgba(22,32,44,0.8), 0 0 10px rgba(193, 158, 114, 0.2)`
            }}
          >
            <ul className="hidden md:flex items-center gap-8 px-6" style={serif}>
              {["início", "serviços", "sobre", "depoimentos"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-xl text-[#16202c] transition-colors hover:text-[#2a1a0d] relative group font-medium">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#16202c] transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-full text-[#16202c] hover:bg-[#16202c]/10 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </>
                )}
              </svg>
            </button>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#16202c] px-5 py-2 text-sm md:px-7 md:text-lg text-white transition-all hover:scale-[1.02] hover:bg-zinc-800 whitespace-nowrap"
              style={{...serif, ...neonGlow}}
            >
              contato
            </a>
          </motion.nav>
        </header>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: customEase }}
              className="md:hidden absolute top-20 left-4 right-4 z-30 rounded-2xl border border-[#c19e72]/30 shadow-2xl overflow-hidden"
              style={{ background: "linear-gradient(180deg, #e8c79a 0%, #d4ad7c 50%, #c19e72 100%)" }}
            >
              <ul className="flex flex-col py-2" style={serif}>
                {["início", "serviços", "sobre", "depoimentos"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-6 py-3 text-lg text-[#16202c] font-medium hover:bg-[#16202c]/10 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero content - Original layout restored */}
        <section className="relative z-20 mx-auto grid w-full flex-grow max-w-7xl grid-cols-1 items-end md:items-center gap-0 px-6 pt-44 pb-16 md:py-48 lg:grid-cols-1 overflow-visible">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl pb-8 relative">

            <motion.h1 variants={fadeInUp} className="text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-5xl" style={serif}>
              Proteja seus filhos, patrimônio e estabilidade emocional diante de{" "}
              <motion.span
                animate={{ textShadow: [`0 0 5px ${GOLD}`, `0 0 15px ${GOLD}`, `0 0 5px ${GOLD}`] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#c19e72] underline decoration-[#c19e72] decoration-2 underline-offset-[6px]"
              >
                conflitos familiares.
              </motion.span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-8 border-l-2 border-[#c19e72] bg-black/60 px-6 py-5 backdrop-blur-sm shadow-xl" style={{boxShadow: `0 10px 30px rgba(0,0,0,0.5)`}}>
              <p className="text-sm leading-relaxed text-zinc-200 sm:text-base font-light" style={sans}>
                Assessoria jurídica estratégica para a estruturação sucessória, governança patrimonial e resolução de litígios complexos, assegurando a blindagem de ativos e a máxima mitigação de riscos com o sigilo e a discrição que a sua trajetória exige.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#c19e72] px-8 py-4 text-base font-medium text-[#16202c] transition-all hover:bg-[#d4ad7c] hover:scale-105 group" style={{...sans, boxShadow: `0 4px 15px rgba(193, 158, 114, 0.4)`}}>
                Quero falar com a Dra. Bruna
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} aria-hidden>→</motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right column intentionally empty */}
          <div aria-hidden className="hidden lg:block relative" />
        </section>
        <DiferenciaisCarrossel />
      </div>

      {/* --- SEÇÕES SUBSEQUENTES ALTERNADAS --- */}
      <Servicos />
      <Depoimentos />
      <Atendimento />
      <Sobre />
      <QuebraObjecao />
      <PorQueMeMarquee />
      <FAQSection />
      <CTAFinal />
      <Footer />
    </main>
  );
}

// Carrossel de Diferenciais (Barra no rodapé do Hero)
function DiferenciaisCarrossel() {
  const items = [
    { icon: "⚖️", title: "+15 Anos", text: "de experiência, atuação técnica e estratégica na área de direito de família." },
    { icon: "🤝", title: "Consensual", text: "Foco na solução amigável para evitar processos longos, mas com força total na esfera judicial." },
    { icon: "📱", title: "Humanizado", text: "Atendimento 100% digital ou presencial, priorizando sua total comodidade, discrição e acolhimento." },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % items.length), 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="w-full px-6 pb-6 md:pb-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1, ease: customEase }}
          className="group relative overflow-hidden rounded-2xl border border-[#c19e72]/30 bg-[#16202c]/60 backdrop-blur-md transition-all"
          style={{boxShadow: `0 15px 40px rgba(0,0,0,0.6)`}}
        >
          <div className="relative flex h-[150px] md:h-[90px] w-full items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-start md:gap-8 md:px-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{items[currentIndex].icon}</span>
                  <div>
                    <p className="font-bold text-white" style={serif}>{items[currentIndex].title}</p>
                  </div>
                </div>
                <p className="text-center text-sm text-zinc-300 md:text-left" style={sans}>
                  {items[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, children, textColor = "text-white", kickerColor = "text-[#c19e72]", containerClassName = "" }: { kicker?: string; children: React.ReactNode; textColor?: string; kickerColor?: string; containerClassName?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className={`mb-14 text-center ${containerClassName}`}>
      {kicker && (
        <p className={`mb-3 text-xs uppercase tracking-[0.3em] ${kickerColor} font-semibold`} style={sans}>
          {kicker}
        </p>
      )}
      <h2 className={`text-3xl font-semibold sm:text-4xl lg:text-5xl ${textColor}`} style={serif}>
        {children}
      </h2>
    </motion.div>
  );
}

// 1. SERVIÇOS (DARK)
function Servicos() {
  const items = [
    { title: "Divórcio Consensual e Litigioso", desc: "Resolução ágil na via extrajudicial (cartório) ou judicial.", img: divorcioImg },
    { title: "Guarda e Regime de Convivência", desc: "Fixação focada no bem-estar da criança e equilíbrio parental, priorizando o modelo compartilhado.", img: guardaImg },
    { title: "Pensão Alimentícia", desc: "Fixação, revisão ou execução pautada no trinômio: necessidade, possibilidade e proporcionalidade.", img: pensaoImg },
    { title: "Inventário e Sucessório", desc: "Organização patrimonial e partilha rápida e harmoniosa, evitando disputas longas e caras.", img: inventarioImg },
  ];
  return (
    <section id="serviços" className="relative bg-[#eaddcf] px-6 py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#16202c]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-5xl z-10">
        <SectionTitle kicker="Áreas de Atuação" textColor="text-[#16202c]" kickerColor="text-[#16202c]" containerClassName="bg-[#c19e72] p-4 rounded-lg shadow-lg">Como posso te ajudar?</SectionTitle>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          {items.map((s, i) => (
            <motion.div key={i} variants={fadeInUp} whileHover={hover3DEffect} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm" style={{ perspective: "1000px" }}>
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16202c] via-[#16202c]/40 to-transparent" />
              </div>
              <div className="flex flex-col p-6 flex-grow bg-[#16202c]/50">
                <h3 className="mb-3 text-lg text-white group-hover:text-[#c19e72] transition-colors duration-500" style={serif}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400 font-light group-hover:text-zinc-200 transition-colors duration-500" style={sans}>{s.desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none border border-[#c19e72]/0 group-hover:border-[#c19e72]/50" style={{boxShadow: `inset 0 0 20px rgba(193, 158, 114, 0.1)`}}/>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} className="mt-16 text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#c19e72] px-8 py-4 text-base font-medium text-[#16202c] transition-all hover:bg-[#d4ad7c] hover:scale-105 shadow-lg" style={sans}>
            Agendar uma consulta estratégica <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// 2. DEPOIMENTOS (LIGHT + FUNDO IMAGEM) — Carrossel
function Depoimentos() {
  const items = [
    { name: "Ana Silva", city: "Sorocaba/SP", text: "A Dra. Bruna salvou minha sanidade mental no meu divórcio. Enquanto eu achava que ia durar anos, ela resolveu tudo com um acordo que protegeu meus filhos e patrimônio de forma rápida e humana." },
    { name: "Mariana Rocha", city: "São Paulo/SP", text: "Atendimento extremamente discreto e estratégico. Recebi clareza sobre cada passo e jamais me senti perdida no processo judicial." },
    { name: "Carla Lopes", city: "Campinas/SP", text: "Conseguimos resolver o inventário da família sem brigas e em tempo recorde. Eternamente grata pela condução humana e técnica impecável." },
    { name: "Renata Pereira", city: "Itu/SP", text: "Fui acolhida em um momento muito difícil. A Dra. Bruna conduziu a guarda compartilhada do meu filho com total respeito e estratégia." },
    { name: "Júlia Mendes", city: "Sorocaba/SP", text: "Profissionalismo raro. Em poucas semanas resolvemos a pensão alimentícia de forma justa e sem desgaste para ninguém." },
    { name: "Patrícia Almeida", city: "Jundiaí/SP", text: "Recomendo de olhos fechados. Sentimento de segurança jurídica do início ao fim, com comunicação clara em cada etapa." },
    { name: "Fernanda Castro", city: "Votorantim/SP", text: "Resolveu o divórcio consensual em cartório com agilidade impressionante. Saí leve e tranquila para iniciar uma nova fase." },
    { name: "Beatriz Oliveira", city: "Tatuí/SP", text: "Atendimento humano de verdade. Senti que meu caso era tratado com a atenção que merecia, e o resultado superou minhas expectativas." },
  ];

  const [index, setIndex] = useState(0);
  const perView = 3;
  const total = items.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const next = () => setIndex((p) => (p + 1) % total);
  const prev = () => setIndex((p) => (p - 1 + total) % total);

  const initials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  const visible = Array.from({ length: perView }, (_, i) => items[(index + i) % total]);

  return (
    <section id="depoimentos" className="relative border-t border-zinc-200 bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url(${fundoDepoimentos})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
      <div className="absolute inset-0 bg-white/90 z-0" />

      <div className="relative mx-auto max-w-6xl z-10">
        <SectionTitle textColor="text-[#16202c]">O que nossos clientes estão falando</SectionTitle>

        <div className="relative mt-12">
          {/* Mobile: single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm flex flex-col"
              >
                <TestimonialCardInner t={items[index]} initials={initials} />
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {visible.map((t, i) => (
              <AnimatePresence key={`${index}-${i}`} mode="wait">
                <motion.figure
                  key={`${index}-${i}-${t.name}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:border-[#c19e72]/50 hover:shadow-xl transition-all flex flex-col"
                >
                  <TestimonialCardInner t={t} initials={initials} />
                </motion.figure>
              </AnimatePresence>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c19e72]/40 bg-white text-[#16202c] transition-all hover:bg-[#c19e72] hover:text-white"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#c19e72]" : "w-2 bg-zinc-300 hover:bg-zinc-400"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c19e72]/40 bg-white text-[#16202c] transition-all hover:bg-[#c19e72] hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCardInner({ t, initials }: { t: { name: string; city: string; text: string }; initials: (n: string) => string }) {
  return (
    <>
      <div className="mb-4 text-5xl leading-none text-[#c19e72]/60" style={serif}>“</div>
      <blockquote className="text-base leading-relaxed text-zinc-700 flex-grow font-light" style={sans}>{t.text}</blockquote>
      <figcaption className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-4" style={sans}>
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white font-semibold text-sm shadow-md"
          style={{ background: "linear-gradient(135deg, #c19e72 0%, #8a6e4a 100%)", fontFamily: "var(--font-serif)" }}
        >
          {initials(t.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#16202c]">{t.name}</p>
          <p className="text-xs text-zinc-500">{t.city}</p>
        </div>
      </figcaption>
    </>
  );
}

// 3. ATENDIMENTO TIMELINE (DARK + FUNDO IMAGEM)
function Atendimento() {
  const steps = [
    { title: "Análise de Viabilidade Online", desc: "Estudo prévio do seu caso alinhando expectativas com total transparência." },
    { title: "Reunião Estratégica Digital", desc: "Alinhamento de detalhes garantindo praticidade e o desenho do melhor caminho." },
    { title: "Execução Ágil e Humanizada", desc: "Procedimentos focados na resolução rápida, poupando seu tempo e emocional." },
    { title: "Acompanhamento até a Conclusão", desc: "Você sempre informado em cada etapa até a resolução final." },
  ];
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });

  return (
    <section className="relative bg-[#eaddcf] px-6 py-24 border-t border-white/5" ref={containerRef}>
      <img src={lpImage} alt="" className="absolute top-0 left-0 h-full w-full object-cover opacity-5 pointer-events-none mix-blend-luminosity" />
      <div className="mx-auto max-w-5xl relative z-10">
        <SectionTitle kicker="Metodologia" textColor="text-[#16202c]" kickerColor="text-[#16202c]">Como é o meu atendimento</SectionTitle>
        <div className="relative mt-20 max-w-4xl mx-auto">
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
          <motion.div style={{ scaleY: scrollYProgress, transformOrigin: "top", boxShadow: `0 0 10px ${GOLD}` }} className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#c19e72] -translate-x-1/2 z-0" />
          {steps.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`relative z-10 flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} justify-between items-start md:items-center mb-16 md:mb-24 w-full`}>
                <div className="hidden md:block w-[45%]" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }} className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-[#c19e72] bg-[#16202c] text-base font-bold text-[#c19e72] shadow-xl z-20" style={serif}>
                  {i + 1}
                </motion.div>
                <motion.div initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: customEase }} className="w-full md:w-[45%] pl-[60px] md:pl-0 pt-1 md:pt-0">
                  <motion.div whileHover={isEven ? hover3DEffectReverse : hover3DEffect} className="group relative rounded-2xl border border-white/5 bg-black/40 p-8 backdrop-blur-md transition-all hover:border-[#c19e72]/50 hover:bg-black/60" style={{ perspective: "1000px" }}>
                    <h3 className="mb-3 text-xl text-white group-hover:text-[#c19e72] transition-colors" style={serif}>{s.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400 font-light" style={sans}>{s.desc}</p>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="mt-20 text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#c19e72] px-8 py-4 text-base font-medium text-[#16202c] transition-all hover:bg-[#d4ad7c] hover:scale-105 shadow-lg" style={sans}>
            Quero iniciar meu atendimento <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// 4. SOBRE (LIGHT + FUNDO IMAGEM)
function Sobre() {
  const highlights = [
    "Mais de uma década e meia de atuação.",
    "Especialista em resolução de conflitos.",
    "Foco em segurança jurídica e acolhimento.",
  ];
  return (
    <section id="sobre" className="relative border-t border-zinc-200 bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block opacity-[0.10] pointer-events-none" style={{ backgroundImage: `url(${fundo2Image})`, backgroundSize: 'cover' }} />
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c19e72] font-semibold" style={sans}>Sobre</p>
          <h2 className="mb-8 text-3xl font-semibold text-[#16202c] sm:text-4xl lg:text-5xl" style={serif}>Dra. Bruna Mazieri</h2>
          <p className="text-base leading-relaxed text-zinc-700 font-light mb-8" style={sans}>
            Advogada há mais de 15 anos. Unindo uma sólida bagagem técnica à sensibilidade necessária para lidar com dilemas familiares, estruturou um escritório autoral focado em oferecer uma advocacia moderna, preventiva, acolhedora e estrategicamente eficiente.
          </p>
          <ul className="space-y-4">
            {highlights.map((h, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }} className="flex gap-3 text-sm text-zinc-800 font-medium" style={sans}>
                <span className="text-[#c19e72]">◆</span> <span>{h}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* Adicionado a imagem limpa da Doutora de volta no Sobre */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: customEase }} className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-200">
          <img src={sobreImage} alt="Dra. Bruna Mazieri" className="w-full h-auto object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

// 5. QUEBRA DE OBJEÇÃO (DARK + FUNDO IMAGEM)
function QuebraObjecao() {
  return (
    <section className="relative bg-[#eaddcf] px-6 py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url(${guardaImg})`, backgroundSize: 'cover' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c19e72]/10 blur-[150px] pointer-events-none rounded-full z-0" />
      
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: customEase }} className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#c19e72]/40 backdrop-blur-sm shadow-2xl z-10" style={{ background: "linear-gradient(135deg, rgba(234,221,207,0.95) 0%, rgba(224,193,148,0.85) 100%)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0">
          <div className="relative h-72 md:h-full min-h-[420px] overflow-hidden">
            <img src={fundoDepoimentos} alt="Atendimento humanizado" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#eaddcf]/30 md:to-[#eaddcf]/60" />
          </div>
          <div className="px-8 py-12 sm:px-12 sm:py-16 relative z-10">
            <h2 className="mb-6 text-3xl font-semibold text-[#16202c] sm:text-4xl" style={serif}>
              Resolva sua situação <span className="text-[#8a6e4a]">familiar.</span>
            </h2>
            <p className="text-base leading-relaxed text-zinc-800 font-light" style={sans}>
              Nossa prioridade absoluta é buscar a resolução extrajudicial. Esse caminho evita os custos elevados e o desgaste emocional de um processo longo. Caso a via judicial seja necessária, atuamos com total transparência e estratégia. Mapeamos cada ato processual para antecipar cenários e blindar você contra novos conflitos, garantindo que o processo caminhe direto para o resultado.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// 6. POR QUE ME ESCOLHER (MARQUEE ESTEIRA) (LIGHT)
function PorQueMeMarquee() {
  const items = [
    { title: "Pagamento Flexível", desc: "Suporte sem comprometer o orçamento." },
    { title: "Experiência", desc: "15+ anos com soluções sob medida." },
    { title: "Acesso Fácil", desc: "Contato direto e ágil via WhatsApp." },
    { title: "Resultados", desc: "Foco na paz e segurança jurídica." },
  ];

  return (
    <section className="relative border-t border-zinc-200 bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 mb-16 relative z-10">
        <SectionTitle kicker="Diferenciais" textColor="text-[#16202c]">Por que me escolher?</SectionTitle>
        <p className="mx-auto text-center text-base leading-relaxed text-zinc-600 font-light" style={sans}>
          Conheça nossos diferenciais estratégicos e permita-nos resguardar os seus direitos.
        </p>
      </div>

      {/* Infinite marquee — two identical sets for seamless loop */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* First set */}
          {items.map((it, i) => (
            <motion.div
              key={`a-${i}`}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)", borderColor: GOLD }}
              className="shrink-0 w-72 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 cursor-default"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#16202c] to-[#2a3a4d] text-white font-bold mb-4 shadow-md" style={serif}>✓</div>
              <h3 className="mb-2 text-lg font-semibold text-[#16202c]" style={serif}>{it.title}</h3>
              <p className="text-sm text-zinc-600 font-light" style={sans}>{it.desc}</p>
            </motion.div>
          ))}
          {/* Second set (identical) */}
          {items.map((it, i) => (
            <motion.div
              key={`b-${i}`}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)", borderColor: GOLD }}
              className="shrink-0 w-72 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-300 cursor-default"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#16202c] to-[#2a3a4d] text-white font-bold mb-4 shadow-md" style={serif}>✓</div>
              <h3 className="mb-2 text-lg font-semibold text-[#16202c]" style={serif}>{it.title}</h3>
              <p className="text-sm text-zinc-600 font-light" style={sans}>{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#16202c] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#2a3a4d] hover:scale-105 shadow-lg" style={sans}>
          Falar com a Dra. Bruna <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

// 7. FAQ (DARK)
function FAQSection() {
  const faqs = [
    { q: "O divórcio pode ser feito diretamente em cartório?", a: "Sim, se houver consenso entre o casal e não houver filhos menores ou incapazes, o divórcio extrajudicial é a via mais rápida e econômica." },
    { q: "Quanto tempo demora um divórcio amigável?", a: "Em cartório, pode ser resolvido em poucos dias ou semanas. Na via judicial depende do fluxo do tribunal." },
    { q: "Como é definida a pensão alimentícia?", a: "Calculada com base no trinômio: Necessidade de quem recebe, Possibilidade de quem paga e Proporcionalidade." },
    { q: "Guarda compartilhada significa tempo igual com os pais?", a: "Não. Significa compartilhamento das decisões sobre a vida do filho. A residência base é definida buscando o melhor para a criança." },
    { q: "E se um herdeiro não concordar com o inventário?", a: "Se não houver acordo, o inventário deve seguir a via judicial (litigioso), o que torna o processo mais lento e oneroso." },
  ];
  return (
    <section id="faq" className="relative bg-[#16202c] px-6 py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c19e72]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-4xl z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c19e72] font-semibold" style={sans}>Dúvidas Frequentes</p>
          <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl text-white" style={serif}>FAQ jurídicos</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: customEase }} className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm mt-12 overflow-hidden shadow-2xl">
          {faqs.map((f, i) => (
            <details key={i} className="group px-7 py-5 [&_summary::-webkit-details-marker]:hidden transition-colors duration-500 hover:bg-white/[0.02]">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-left text-base text-white font-medium outline-none" style={serif}>
                <span>{f.q}</span>
                <motion.span animate={{ rotate: 0 }} className="text-2xl text-[#c19e72] shrink-0 group-open:rotate-45 transition-transform duration-300">+</motion.span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 font-light pl-2 border-l-2 border-[#c19e72]/50" style={sans}>{f.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// 8. CTA FINAL (LIGHT)
function CTAFinal() {
  return (
    <section id="contato" className="relative bg-white px-6 py-32 overflow-hidden border-t border-zinc-200">
      <img src={fundoDepoimentos} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70 pointer-events-none" />
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: customEase }} className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-20 text-center shadow-2xl border border-[#c19e72]/40" style={{ background: "linear-gradient(135deg, #c19e72 0%, #a8875b 50%, #8a6e4a 100%)" }}>
        <h2 className="relative mb-8 text-3xl font-semibold leading-tight text-white sm:text-4xl" style={serif}>
          Retome o controle do seu futuro e conquiste a paz que você merece.
        </h2>
        <p className="relative mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/90 font-medium" style={sans}>
          Resolva esse conflito com tranquilidade. É possível resolver de forma extrajudicial, com menos custos e burocracia, resguardando o emocional da sua família.
        </p>
        <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, boxShadow: `0 10px 30px rgba(0,0,0,0.3)`}} whileTap={{ scale: 0.98 }} className="relative inline-flex items-center gap-3 rounded-full bg-[#16202c] px-10 py-5 text-base font-semibold text-white transition-all hover:bg-black group" style={sans}>
          Agende sua consulta estratégica <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} aria-hidden>→</motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}

// 9. FOOTER (DARK)
function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#16202c] px-6 pt-20 pb-10 overflow-hidden">
      {/* Floating WhatsApp button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
        style={{ boxShadow: "0 8px 25px rgba(37,211,102,0.5)" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
        </svg>
      </a>

      <div className="relative mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}>
            <img src={logoImg} alt="Bruna Mazieri Advocacia" className="h-28 w-28 rounded-lg object-cover mb-4" />
            <p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed max-w-xs" style={sans}>
              Advocacia previdenciária técnica, transparente e humana. Defendendo seus direitos com precisão e clareza.
            </p>
          </motion.div>

          {/* Contato */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15, ease: customEase }}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c19e72] font-semibold mb-5" style={sans}>Contato</p>
            <ul className="space-y-3 text-sm text-zinc-400 font-light" style={sans}>
              <li>
                <a href="mailto:contato@brunamazieri.adv.br" className="hover:text-[#c19e72] transition-colors">
                  contato@brunamazieri.adv.br
                </a>
              </li>
              <li>Sorocaba/SP</li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-white transition-colors font-medium"
                >
                  Falar no WhatsApp <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Navegação */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: customEase }}>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c19e72] font-semibold mb-5" style={sans}>Navegação</p>
            <ul className="space-y-3 text-sm text-zinc-400 font-light" style={sans}>
              <li><a href="#serviços" className="hover:text-[#c19e72] transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-[#c19e72] transition-colors">Sobre</a></li>
              <li><a href="#faq" className="hover:text-[#c19e72] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#c19e72] transition-colors">Política de Privacidade</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light" style={sans}>
          <p>© {new Date().getFullYear()} Bruna Mazieri Advocacia. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://lp.eufacoseu.marketing?utm_source=brunamazieri&utm_medium=footer&utm_campaign=site" target="_blank" rel="noopener noreferrer" className="text-[#c19e72] hover:underline">EFSM</a></p>
        </div>
      </div>
    </footer>
  );
}