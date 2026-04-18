import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Dr. João Wirlon" },
  { to: "/servicos", label: "Tratamentos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center font-display text-gold text-lg group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
            W
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-primary">Wirlon</div>
            <div className="eyebrow !text-[0.55rem] !tracking-[0.32em] !text-muted-foreground">
              Odontologia
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 hover:text-gold transition-colors relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-primary/80 text-primary px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Agendar Avaliação
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container-luxe py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center text-xs tracking-[0.2em] uppercase border border-primary text-primary px-5 py-3"
            >
              Agendar Avaliação
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
