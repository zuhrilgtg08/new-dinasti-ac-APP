import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("beranda");
  const location = useLocation();

  useEffect(() => {
    // Set aktif menu navbar berdasarkan location yang berubah
    const path = location.pathname;
    if (path === "/" || path === "/beranda") {
      setActiveMenu("beranda");
    } else if (path === "/about") {
      setActiveMenu("about");
    } else if (path === "/services") {
      setActiveMenu("services");
    } else if (path === "/testimonials") {
      setActiveMenu("testimonials");
    } else if (path === "/contact") {
      setActiveMenu("contact");
    }
  }, [location.pathname]); // Listen to location changes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda", href: "/" },
    { id: "about", label: "Tentang Kami", href: "/about" },
    { id: "services", label: "Layanan", href: "/services" },
    { id: "testimonials", label: "Testimoni", href: "/testimonials" },
    { id: "contact", label: "Kontak Kami", href: "/contact" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg px-6 py-4 sticky top-0 z-50 transition-all duration-300 border-b border-blue-100">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src="./icon/logo-icon.png" 
              alt="Dinasti AC Services Icon" 
              className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-[#2196F3] to-[#1565C0] bg-clip-text text-transparent">
            Dinasti AC Services
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[#64748B]">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                onClick={() => handleMenuClick(item.id)}
                className={`relative py-2 px-1 transition-all duration-300 group ${
                  activeMenu === item.id 
                    ? "text-[#2196F3] font-semibold" 
                    : "hover:text-[#2196F3]"
                }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2196F3] to-[#1565C0] transition-all duration-300 ${
                    activeMenu === item.id 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {activeMenu === item.id && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-2 h-2 bg-[#A7F3D0] rounded-full animate-pulse-slow"></div>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-xl bg-[#E3F2FD] hover:bg-[#2196F3] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 border-t border-blue-100 pt-4 animate-fade-in">
          <ul className="flex flex-col gap-2 text-[#64748B]">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  onClick={() => handleMenuClick(item.id)}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeMenu === item.id
                      ? "bg-gradient-to-r from-[#E3F2FD] to-[#A7F3D0] text-[#2196F3] font-semibold shadow-md"
                      : "hover:bg-[#E3F2FD] hover:text-[#2196F3]"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeMenu === item.id && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#2196F3] rounded-full animate-pulse-slow"></div>
                      <svg className="w-4 h-4 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}