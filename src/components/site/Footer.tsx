import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center font-display text-gold">
              W
            </div>
            <div>
              <div className="font-display text-xl">Wirlon Odontologia</div>
              <div className="eyebrow !text-[0.6rem] !text-primary-foreground/60">
                Implantes & Reabilitação Oral
              </div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed font-display text-lg italic">
            “Devolver um sorriso é restaurar a forma como alguém habita o próprio
            rosto.”
          </p>
          <div className="mt-4 text-xs tracking-[0.25em] uppercase text-gold">
            — Dr. João Wirlon
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-primary-foreground/60 mb-5">Navegação</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="hover:text-gold">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-gold">
                Dr. João Wirlon
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-gold">
                Tratamentos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-gold">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-primary-foreground/60 mb-5">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>Av. Paulista, 1842 — Sala 1208, São Paulo</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <a href="tel:+551130000000" className="hover:text-gold">
                +55 (11) 3000-0000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              <a href="mailto:contato@wirlon.com.br" className="hover:text-gold">
                contato@wirlon.com.br
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-4 h-4 text-gold" />
              <a href="#" className="hover:text-gold">
                @wirlon.odontologia
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/50">
          <span>
            © {new Date().getFullYear()} Wirlon Odontologia. Todos os direitos
            reservados.
          </span>
          <span>CRO-SP 00000 · Responsável Técnico: Dr. João Wirlon</span>
        </div>
      </div>
    </footer>
  );
}
