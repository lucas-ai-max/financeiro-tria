import { Link, useLocation } from "react-router-dom";
import { FileSpreadsheet, Upload } from "lucide-react";
import logoTriaa from "@/assets/logo-triaa.png";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Controle de Notas",
    href: "/notas-fiscais",
    icon: FileSpreadsheet,
  },
  {
    label: "Upload Faturas Marcos",
    href: "/upload",
    icon: Upload,
  },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-14 items-center gap-6 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoTriaa} alt="Triaa" className="h-8 w-auto" />
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
