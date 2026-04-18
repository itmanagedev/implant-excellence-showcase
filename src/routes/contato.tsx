import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato & Agendamento — Wirlon Odontologia" },
      {
        name: "description",
        content:
          "Agende sua avaliação com o Dr. João Wirlon. Atendimento exclusivo em São Paulo.",
      },
      { property: "og:title", content: "Contato | Wirlon Odontologia" },
      {
        property: "og:description",
        content: "Agende sua avaliação com o Dr. João Wirlon.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="container-luxe pt-16 md:pt-24 pb-12 text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="gold-divider" />
          <span className="eyebrow">Agendamento</span>
          <span className="gold-divider" />
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
          Vamos conversar sobre o seu sorriso.
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Preencha o formulário ou entre em contato pelos canais abaixo. Nossa
          equipe responde em até 24 horas úteis.
        </p>
      </section>

      <section className="container-luxe pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <Info
            icon={MapPin}
            title="Endereço"
            lines={["Av. Paulista, 1842 — Sala 1208", "Bela Vista, São Paulo — SP"]}
          />
          <Info
            icon={Phone}
            title="Telefone"
            lines={["+55 (11) 3000-0000", "WhatsApp: +55 (11) 90000-0000"]}
          />
          <Info
            icon={Mail}
            title="E-mail"
            lines={["contato@wirlon.com.br", "agendamento@wirlon.com.br"]}
          />
          <Info
            icon={Clock}
            title="Horário"
            lines={["Segunda a sexta · 09h às 19h", "Sábados · 09h às 13h"]}
          />
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border p-8 md:p-10 space-y-6 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nome completo" name="nome" required />
              <Field label="Telefone" name="telefone" required />
            </div>
            <Field label="E-mail" name="email" type="email" required />
            <div>
              <label className="eyebrow !text-foreground/60 block mb-2">
                Tratamento de interesse
              </label>
              <select className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold">
                <option>Implantes Dentários</option>
                <option>Próteses sobre Implante</option>
                <option>Reabilitação Oral Completa</option>
                <option>Estética Avançada</option>
                <option>Avaliação geral</option>
              </select>
            </div>
            <div>
              <label className="eyebrow !text-foreground/60 block mb-2">
                Mensagem
              </label>
              <textarea
                rows={5}
                placeholder="Conte um pouco sobre o que você busca..."
                className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors disabled:bg-gold disabled:text-gold-foreground"
            >
              {sent ? "Mensagem enviada · Em breve entraremos em contato" : (
                <>
                  Enviar mensagem <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Seus dados são tratados com sigilo, conforme a LGPD.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow !text-foreground/60 block mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}

function Info({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 shrink-0 border border-gold flex items-center justify-center text-gold">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="eyebrow mb-2">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-foreground/80 leading-relaxed">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
