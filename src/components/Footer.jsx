export default function Footer() {
  const currentYear = new Date().getFullYear();
  const services = [
    "Service AC",
    "Instalasi AC",
    "Perbaikan AC",
    "Bongkar Pasang AC",
    "Isi Freon",
    "Cuci AC"
  ];

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Testimoni", href: "/testimonials" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1565C0] to-[#2196F3] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src="./icon/logo-icon.png"
                    alt="Dinasti AC Services Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="text-2xl font-bold text-white">
                Dinasti AC Services
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Solusi terpercaya untuk semua kebutuhan AC Anda. Dengan pengalaman
              lebih dari 10 tahun, kami berkomitmen memberikan pelayanan terbaik
              dengan harga yang kompetitif.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-white/90">+62 895-4060-11514</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-white/90">dinastiac@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-white/90">
                  Sidokepung, Kec. Buduran
                  <br />
                  Sidoarjo, Jawa Timur
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Menu Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">
                Follow Sosial Media Kami
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="group w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white hover:text-[#2196F3] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white hover:text-[#040404] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className="bx bxl-tiktok"></i>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-[#25d366] hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className="bx bxl-whatsapp"></i>
                </a>
                <a
                  href="https://www.instagram.com/dinasti.ac/?theme=dark" target="_blank"
                  className="group w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-pink-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 mb-4 md:mb-0">
              © {currentYear} Dinasti AC Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/62895406011514"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25d366] hover:bg-[#128C7E] text-[#FFF] hover:text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 transform hover:scale-110 group"
      >
        <svg
          className="w-6 h-6 group-hover:animate-bounce"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </footer>
  );
}
