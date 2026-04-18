import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Award, Heart, ShieldCheck, Sparkles } from "lucide-react";
import drJoao from "@/assets/dr-joao-wirlon.jpg";
import smile from "@/assets/smile-hero.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import implant from "@/assets/implant-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wirlon Odontologia — Implantes & Reabilitação Oral | Dr. João Wirlon" },
      {
        name: "description",
        content:
          "Especialista em implantes dentários, próteses e reabilitação oral. Atendimento exclusivo do Dr. João Wirlon em São Paulo.",
      },
      {
        property: "og:title",
        content: "Wirlon Odontologia — Implantes & Reabilitação Oral",
      },
      {
        property: "og:description",
        content:
          "Devolvemos sorrisos com excelência clínica, estética refinada e conforto humanizado.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <DoctorIntro />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 pt-20 overflow-hidden">
      <div className="container-luxe pt-16 md:pt-24 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-divider" />
            <span className="eyebrow">Implantes · Próteses · Reabilitação Oral</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-primary">
            A arte de devolver
            <br />
            <span className="italic text-gold">sorrisos</span> que
            <br />
            transformam vidas.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            No consultório do{" "}
            <span className="text-primary font-medium">Dr. João Wirlon</span>, cada
            tratamento é conduzido com precisão clínica, estética refinada e o
            cuidado humano que a sua história merece.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contato"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
            >
              Agendar Avaliação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-3 border border-primary/30 text-primary px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Conheça o Dr. Wirlon
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden shadow-elegant">
            <img
              src={smile}
              alt="Sorriso natural reabilitado pelo Dr. João Wirlon"
              width={1080}
              height={1350}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block bg-background border border-border p-6 max-w-[240px] shadow-soft">
            <div className="eyebrow mb-2">desde 2008</div>
            <div className="font-display text-3xl text-primary leading-tight">
              +2.400
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              implantes instalados com taxa de sucesso superior a 98%.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-luxe opacity-20 blur-3xl pointer-events-none" />
    </section>
  );
}

function TrustBar() {
  const items = [
    "ABO · Associação Brasileira",
    "ITI · International Team for Implantology",
    "USP — Pós-graduação",
    "Straumann · Nobel Biocare",
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container-luxe py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {items.map((it) => (
          <span
            key={it}
            className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground"
          >
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}

function DoctorIntro() {
  return (
    <section className="container-luxe py-24 md:py-36 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={drJoao}
            alt="Dr. João Wirlon, especialista em implantes e prótese"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold hidden md:block" />
      </div>
      <div className="lg:col-span-7 lg:pl-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-divider" />
          <span className="eyebrow">Quem conduz seu tratamento</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
          Dr. João Wirlon
        </h2>
        <p className="mt-2 text-gold text-sm tracking-[0.2em] uppercase">
          Especialista em Implantes & Prótese Dentária
        </p>
        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Há mais de uma década dedicado exclusivamente à reabilitação oral, o
            Dr. João Wirlon reúne formação acadêmica de excelência e a sensibilidade
            estética necessária para devolver sorrisos com naturalidade absoluta.
          </p>
          <p>
            Seu trabalho é reconhecido pela combinação rara de planejamento digital
            de última geração, técnica cirúrgica minimamente invasiva e um cuidado
            humano que acolhe cada paciente em sua singularidade.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
          <Stat n="15+" label="Anos de experiência" />
          <Stat n="2.400+" label="Implantes realizados" />
          <Stat n="98%" label="Taxa de sucesso" />
        </div>
        <Link
          to="/sobre"
          className="mt-10 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-primary border-b border-gold pb-1 hover:text-gold transition-colors"
        >
          Conhecer trajetória completa
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs text-muted-foreground mt-1 leading-snug">{label}</div>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Implantes Dentários",
      desc: "Substituição definitiva de dentes perdidos com tecnologia de carga imediata e planejamento 3D.",
    },
    {
      icon: Sparkles,
      title: "Próteses sobre Implante",
      desc: "Coroas, protocolos e overdentures em zircônia de alta performance estética.",
    },
    {
      icon: Heart,
      title: "Reabilitação Oral",
      desc: "Devolução completa da função e harmonia do sorriso, com abordagem multidisciplinar.",
    },
    {
      icon: Award,
      title: "Estética Avançada",
      desc: "Lentes de contato, facetas e clareamento para um sorriso natural e luminoso.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <img
        src={clinic}
        alt=""
        loading="lazy"
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      <div className="relative container-luxe">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-divider" />
            <span className="eyebrow">Tratamentos</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Excelência clínica em cada detalhe.
          </h2>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Cada procedimento é planejado com precisão e executado com a técnica
            que apenas anos de prática refinada permitem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-primary p-10 md:p-12 hover:bg-primary-foreground/[0.04] transition-colors"
            >
              <s.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-gold-foreground transition-colors"
          >
            Ver todos os tratamentos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Consulta de Acolhimento",
      d: "Escutamos sua história, expectativas e realizamos um diagnóstico completo.",
    },
    {
      n: "02",
      t: "Planejamento Digital",
      d: "Tomografia 3D e simulação virtual do sorriso antes de qualquer procedimento.",
    },
    {
      n: "03",
      t: "Cirurgia Minimamente Invasiva",
      d: "Técnica guiada por computador, anestesia confortável e recuperação acelerada.",
    },
    {
      n: "04",
      t: "Sorriso Entregue",
      d: "Acompanhamento contínuo e manutenção para resultados que duram décadas.",
    },
  ];

  return (
    <section className="container-luxe py-24 md:py-36">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-divider" />
            <span className="eyebrow">Metodologia</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Um protocolo desenhado para o seu conforto.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 self-end">
          <p className="text-muted-foreground leading-relaxed">
            Da primeira conversa até a entrega final do sorriso, cada etapa é
            conduzida com transparência, previsibilidade e atenção minuciosa aos
            detalhes que fazem a diferença.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {steps.map((s) => (
          <div key={s.n} className="bg-background p-8 md:p-10 group">
            <div className="font-display text-5xl text-gold/40 group-hover:text-gold transition-colors">
              {s.n}
            </div>
            <h3 className="font-display text-xl text-primary mt-4">{s.t}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Eu havia perdido a confiança em sorrir. Hoje, voltei a me reconhecer no espelho. O Dr. Wirlon devolveu muito mais do que dentes.",
      a: "Marina C.",
      r: "Reabilitação oral completa",
    },
    {
      q: "Profissionalismo absoluto. O planejamento foi tão detalhado que eu já sabia exatamente como ficaria meu sorriso antes da cirurgia.",
      a: "Ricardo A.",
      r: "Implantes superiores · Carga imediata",
    },
    {
      q: "Cuidado humano que se sente em cada visita. A clínica é um refúgio e o trabalho do Dr. João é simplesmente arte.",
      a: "Helena V.",
      r: "Próteses sobre implante",
    },
  ];
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-divider" />
            <span className="eyebrow">Histórias de quem voltou a sorrir</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary">
            Confiança construída sorriso a sorriso.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t) => (
            <figure
              key={t.a}
              className="bg-background border border-border p-8 md:p-10 flex flex-col"
            >
              <div className="text-gold font-display text-5xl leading-none">“</div>
              <blockquote className="mt-2 font-display text-xl text-primary leading-snug italic">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="text-sm font-medium text-primary">{t.a}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-luxe py-24 md:py-32">
      <div className="relative overflow-hidden bg-primary text-primary-foreground p-12 md:p-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-divider" />
            <span className="eyebrow">O primeiro passo</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Vamos planejar o sorriso que devolverá a sua confiança?
          </h2>
          <p className="mt-6 text-primary-foreground/70 max-w-xl leading-relaxed">
            Agende uma avaliação reservada com o Dr. João Wirlon e descubra o
            tratamento ideal para a sua história.
          </p>
        </div>
        <div className="lg:col-span-5 relative z-10 flex flex-col gap-4">
          <Link
            to="/contato"
            className="inline-flex items-center justify-between gap-3 bg-gold text-gold-foreground px-8 py-5 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Agendar avaliação <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/5511300000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-between gap-3 border border-primary-foreground/30 px-8 py-5 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Conversar no WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <img
          src={implant}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>
    </section>
  );
}
