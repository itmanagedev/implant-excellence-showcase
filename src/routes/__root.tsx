import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wirlon Odontologia — Implantes & Reabilitação Oral" },
      {
        name: "description",
        content:
          "Clínica do Dr. João Wirlon, especialista em implantes dentários, próteses e reabilitação oral. Excelência clínica, estética e conforto.",
      },
      { name: "author", content: "Wirlon Odontologia" },
      { property: "og:title", content: "Wirlon Odontologia — Implantes & Reabilitação Oral" },
      {
        property: "og:description",
        content: "Implantes, próteses e reabilitação oral com excelência clínica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wirlon Odontologia — Implantes & Reabilitação Oral" },
      { name: "description", content: "Oral Elegance Studio is a sophisticated website for a dental clinic specializing in implants and oral rehabilitation." },
      { property: "og:description", content: "Oral Elegance Studio is a sophisticated website for a dental clinic specializing in implants and oral rehabilitation." },
      { name: "twitter:description", content: "Oral Elegance Studio is a sophisticated website for a dental clinic specializing in implants and oral rehabilitation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b0afa980-b7dd-44fe-b9c6-e81c175fff17/id-preview-a9bc9dd0--730edd86-c95a-439c-a895-6b9c3aaef859.lovable.app-1776477641893.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b0afa980-b7dd-44fe-b9c6-e81c175fff17/id-preview-a9bc9dd0--730edd86-c95a-439c-a895-6b9c3aaef859.lovable.app-1776477641893.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
