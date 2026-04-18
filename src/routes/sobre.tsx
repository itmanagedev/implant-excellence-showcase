import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, GraduationCap, Award, Microscope } from "lucide-react";
import drJoao from "@/assets/dr-joao-wirlon.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Dr. João Wirlon — Especialista em Implantes & Prótese | Wirlon" },
      {
        name: "description",
        content:
          "Conheça a trajetória do Dr. João Wirlon, especialista em implantes dentários, próteses e reabilitação oral.",
      },
      { property: "og:title", content: "Dr. João Wirlon — Implantes & Prótese" },
      {
        property: "og:description",
        content:
          "Mais de 15 anos dedicados exclusivamente à reabilitação oral com excelência clínica e estética.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <Layout>
      <section className="container-luxe pt-16 md:pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <img
            src={drJoao}
            alt="Dr. João Wirlon"
            width={1024}
            height={1280}
            className="w-full aspect-[4/5] object-cover shadow-elegant"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-divider" />
            <span className="eyebrow">Sobre o especialista</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
            Dr. João Wirlon
          </h1>
          <p className="mt-3 text-gold text-sm tracking-[0.25em] uppercase">
            Implantodontia · Prótese Dentária · Reabilitação Oral
          </p>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Movido pela convicção de que um sorriso restaurado transforma a
              forma como uma pessoa habita o próprio rosto, o Dr. João Wirlon
              dedica-se há mais de quinze anos à reabilitação oral em sua forma
              mais sofisticada.
            </p>
            <p>
              Sua prática combina o rigor científico de uma formação acadêmica
              de excelência com uma sensibilidade estética rara, capaz de
              traduzir tecnologia em resultados profundamente naturais.
            </p>
            <p>
              Mais do que executar procedimentos, o Dr. Wirlon constrói
              relações: cada paciente é acolhido em sua história, com tempo,
              escuta e a precisão que somente quem ama o que faz é capaz de
              oferecer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="container-luxe">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="eyebrow">Formação & Credenciais</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              Uma trajetória dedicada à excelência.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={GraduationCap}
              title="Formação Acadêmica"
              items={[
                "Graduação em Odontologia — USP",
                "Especialização em Implantodontia",
                "Mestrado em Prótese Dentária",
                "Cursos avançados ITI Suíça",
              ]}
            />
            <Card
              icon={Microscope}
              title="Atuação Clínica"
              items={[
                "Implantes de carga imediata",
                "All-on-4 e All-on-6",
                "Enxertos ósseos e levantamento de seio",
                "Próteses em zircônia",
              ]}
            />
            <Card
              icon={Award}
              title="Reconhecimentos"
              items={[
                "Membro ABO e ITI",
                "Palestrante em congressos nacionais",
                "Publicações científicas indexadas",
                "Mentor de jovens implantodontistas",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-display text-6xl text-gold leading-none">“</span>
          <p className="mt-4 font-display italic text-3xl md:text-4xl text-primary leading-snug">
            Não trato dentes — cuido de pessoas que querem voltar a sorrir sem
            pedir licença ao mundo.
          </p>
          <div className="mt-8 eyebrow">— Dr. João Wirlon</div>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
          >
            Agendar conversa reservada
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function Card({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof GraduationCap;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-background border border-border p-8 md:p-10">
      <Icon className="w-8 h-8 text-gold mb-6" />
      <h3 className="font-display text-2xl text-primary mb-5">{title}</h3>
      <ul className="space-y-3">
        {items.map((it) => (
          <li
            key={it}
            className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
          >
            <span className="text-gold mt-1.5">·</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
