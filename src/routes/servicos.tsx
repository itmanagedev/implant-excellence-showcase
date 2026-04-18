import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import implant from "@/assets/implant-detail.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import smile from "@/assets/smile-hero.jpg";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Tratamentos — Implantes, Próteses e Reabilitação | Wirlon" },
      {
        name: "description",
        content:
          "Implantes dentários, próteses sobre implante, reabilitação oral e estética avançada com o Dr. João Wirlon.",
      },
      { property: "og:title", content: "Tratamentos | Wirlon Odontologia" },
      {
        property: "og:description",
        content:
          "Soluções clínicas premium em implantodontia, prótese e reabilitação oral.",
      },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    n: "01",
    title: "Implantes Dentários",
    img: implant,
    desc: "Substituição definitiva de dentes perdidos por meio de implantes em titânio de grau médico, planejados em tomografia 3D e instalados com cirurgia guiada por computador. Em casos selecionados, oferecemos carga imediata: você sai da clínica com dentes provisórios fixos no mesmo dia.",
    bullets: [
      "Implantes unitários, múltiplos e All-on-4 / All-on-6",
      "Cirurgia guiada minimamente invasiva",
      "Marcas de referência mundial: Straumann e Nobel Biocare",
    ],
  },
  {
    n: "02",
    title: "Próteses sobre Implante",
    img: smile,
    desc: "Coroas, protocolos e overdentures executados em zircônia de alta translucidez ou cerâmica e-max, reproduzindo com fidelidade a anatomia, a textura e a translucidez de um dente natural.",
    bullets: [
      "Coroas unitárias em zircônia monolítica",
      "Protocolos fixos sobre 4 ou 6 implantes",
      "Overdentures sobre barra para máximo conforto",
    ],
  },
  {
    n: "03",
    title: "Reabilitação Oral Completa",
    img: clinic,
    desc: "Para casos complexos que envolvem perda extensa de dentes, desgastes, problemas de oclusão ou comprometimento estético, conduzimos um plano multidisciplinar que devolve função, estética e harmonia facial.",
    bullets: [
      "Planejamento digital integrado (DSD)",
      "Reconstrução oclusal e dimensão vertical",
      "Acompanhamento de longo prazo",
    ],
  },
  {
    n: "04",
    title: "Estética Avançada",
    img: smile,
    desc: "Lentes de contato dental, facetas em porcelana e clareamento profissional para um sorriso natural, luminoso e absolutamente seu — sem o aspecto artificial dos tratamentos genéricos.",
    bullets: [
      "Lentes ultrafinas em porcelana",
      "Clareamento de consultório com proteção gengival",
      "Design do sorriso personalizado",
    ],
  },
];

function ServicosPage() {
  return (
    <Layout>
      <section className="container-luxe pt-16 md:pt-24 pb-12 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="gold-divider" />
          <span className="eyebrow">Tratamentos</span>
          <span className="gold-divider" />
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
          Soluções clínicas em sua expressão mais refinada.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Cada tratamento oferecido pela Wirlon Odontologia é fruto de
          planejamento minucioso, tecnologia de ponta e a sensibilidade estética
          do Dr. João Wirlon.
        </p>
      </section>

      <section className="container-luxe py-16 md:py-24 space-y-24 md:space-y-32">
        {services.map((s, i) => (
          <article
            key={s.n}
            className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="font-display text-gold text-sm tracking-[0.3em]">
                {s.n}
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl text-primary leading-tight">
                {s.title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-foreground/80 flex gap-3 leading-relaxed"
                  >
                    <span className="text-gold mt-1.5">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-luxe pb-24">
        <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Não tem certeza de qual tratamento é ideal para você?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Em uma consulta de avaliação, o Dr. Wirlon escuta sua história e
            apresenta o caminho clínico mais indicado.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:opacity-90"
          >
            Agendar Avaliação <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
