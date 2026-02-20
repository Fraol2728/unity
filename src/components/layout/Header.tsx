import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // keep import at the top

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "bg-[#333032] border-[#333032]"
          : "bg-white/10 border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Logo Image */}
            <img
              src={logo}
              alt="UWS Settle Logo"
              className="w-10 h-10 object-contain rounded-full"
            />

            <div className="flex flex-col">
              <span
                className={`font-display text-lg font-bold leading-tight transition-colors ${
                  isScrolled ? "text-white" : "text-primary"
                }`}
              >
                Unity Welcome
              </span>
              <span
                className={`text-xs leading-tight transition-colors ${
                  isScrolled ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                Settlement Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === item.href
                    ? isScrolled
                      ? "text-white"
                      : "text-primary"
                    : isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="warm" size="lg" asChild>
              <Link to="/contact">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-white" : "text-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-white" : "text-foreground"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? isScrolled
                        ? "text-white"
                        : "text-primary"
                      : isScrolled
                        ? "text-white/80 hover:text-white"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="warm" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
