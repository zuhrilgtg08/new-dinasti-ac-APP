import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const [activeServiceType, setActiveServiceType] = useState(0);
  const [activePriceCategory, setActivePriceCategory] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Keunggulan Layanan
  const advantages = [
    {
      icon: <i className="bx bx-wrench text-6xl"></i>,
      title: "Teknisi Berpengalaman",
      description: "Lebih dari 10 tahun pengalaman dalam bidang service AC",
      color: "from-[#2196F3] to-[#1565C0]",
      bgPattern: "bg-gradient-to-br"
    },
    {
      icon: <i className="bx bx-time text-6xl"></i>,
      title: "Layanan Cepat",
      description: "Respon 30 menit, siap melayani 24/7 termasuk hari libur",
      color: "from-[#A7F3D0] to-[#2196F3]",
      bgPattern: "bg-gradient-to-br"
    },
    {
      icon: <i className="bx bx-shield-quarter text-6xl"></i>,
      title: "Garansi Terpercaya",
      description: "Garansi service 30 hari dan spare part original bergaransi",
      color: "from-[#1565C0] to-[#A7F3D0]",
      bgPattern: "bg-gradient-to-br"
    }
  ];

  // Jenis Layanan AC
  const serviceTypes = [
    {
      category: "Layanan Umum",
      icon: <i className="bx bx-cog text-xl"></i>,
      services: [
        { name: "Service Rutin AC", desc: "Pembersihan filter, evaporator, dan cek komponen", price: "Mulai 75k" },
        { name: "Instalasi AC Baru", desc: "Pemasangan AC split, cassette, dan standing floor", price: "Mulai 200k" },
        { name: "Perbaikan AC", desc: "Diagnosa dan repair semua jenis kerusakan", price: "Mulai 100k" },
        { name: "Bongkar Pasang AC", desc: "Layanan pindahan AC dengan aman dan profesional", price: "Mulai 150k" }
      ]
    },
    {
      category: "Tipe AC",
      icon: <i className="bx bx-wind text-xl"></i>,
      services: [
        { name: "AC Split Wall", desc: "1/2 PK - 2.5 PK untuk rumah dan kantor", price: "Service 75k" },
        { name: "AC Cassette", desc: "Ceiling cassette 2 PK - 5 PK untuk ruang besar", price: "Service 150k" },
        { name: "AC Standing Floor", desc: "3 PK - 10 PK untuk ruang komersial", price: "Service 200k" },
        { name: "AC Central", desc: "System VRV/VRF untuk gedung dan mall", price: "Survey gratis" }
      ]
    },
    {
      category: "Spesialisasi", 
      icon: <i className="bx bx-star text-xl"></i>,
      services: [
        { name: "AC Inverter", desc: "Service dan instalasi AC hemat energi", price: "Service 100k" },
        { name: "AC R32", desc: "Teknologi refrigerant ramah lingkungan", price: "Freon 150k" },
        { name: "Smart AC", desc: "AC dengan fitur WiFi dan IoT", price: "Setup 50k" },
        { name: "AC Industrial", desc: "Sistem pendingin untuk industri", price: "Konsultasi gratis" }
      ]
    }
  ];

  // Daftar Harga
  const priceCategories = [
    {
      name: "Service AC",
      icon: <i className="bx bx-wrench text-xl"></i>,
      items: [
        { service: "AC Split 1/2 - 1 PK", price: "Rp 75.000", detail: "Cuci evaporator + filter", popular: false },
        { service: "AC Split 1.5 - 2 PK", price: "Rp 100.000", detail: "Cuci evaporator + filter", popular: true },
        { service: "AC Cassette 2 - 3 PK", price: "Rp 150.000", detail: "Deep cleaning lengkap", popular: false },
        { service: "Paket Tahunan", price: "Rp 800.000", detail: "12x service + gratis panggilan", popular: true }
      ]
    },
    {
      name: "Instalasi",
      icon: <i className="bx bx-buildings text-xl"></i>,
      items: [
        { service: "AC Split 1/2 - 1 PK", price: "Rp 200.000", detail: "Instalasi standar s/d 3 meter", popular: false },
        { service: "AC Split 1.5 - 2 PK", price: "Rp 300.000", detail: "Instalasi standar s/d 5 meter", popular: true },
        { service: "AC Cassette", price: "Rp 500.000", detail: "Instalasi + ducting", popular: false },
        { service: "Pipa Tambahan", price: "Rp 25.000/m", detail: "Diluar paket standar", popular: false }
      ]
    },
    {
      name: "Perbaikan",
      icon: <i className="bx bx-grid text-xl"></i>,
      items: [
        { service: "Ganti Freon R22", price: "Rp 120.000", detail: "Per 1/2 PK + service", popular: false },
        { service: "Ganti Freon R32", price: "Rp 150.000", detail: "Per 1/2 PK + service", popular: true },
        { service: "Ganti Kapasitor", price: "Rp 75.000", detail: "Termasuk komponen", popular: false },
        { service: "Tambal Bocor", price: "Rp 100.000", detail: "Las titik + pressure test", popular: false }
      ]
    }
  ];

  // Cara Order
  const orderSteps = [
    {
      step: "1",
      title: "Hubungi Kami",
      desc: "Call/WA ke 0895-4060-11514 atau isi form online",
      icon: <i className="bx bx-phone text-4xl animate-float"></i>,
      color: "bg-blue-500",
    },
    {
      step: "2",
      title: "Konsultasi Gratis",
      desc: "Jelaskan keluhan AC dan dapatkan estimasi biaya",
      icon: <i className="bx bx-chat text-4xl animate-float"></i>,
      color: "bg-green-500",
    },
    {
      step: "3",
      title: "Jadwal Kunjungan",
      desc: "Tentukan waktu yang sesuai untuk teknisi datang",
      icon: <i className="bx bx-calendar text-4xl animate-float"></i>,
      color: "bg-purple-500",
    },
    {
      step: "4",
      title: "Pelayanan & Pembayaran",
      desc: "Teknisi datang, kerjakan service, bayar setelah selesai",
      icon: <i className="bx bx-check-circle text-4xl animate-float"></i>,
      color: "bg-orange-500",
    },
  ];

  // Area Layanan
  const serviceAreas = [
    { city: "Surabaya Timur", zones: ["Rungkut", "Mulyorejo", "Tenggilis", "Gubeng"], available: true },
    { city: "Surabaya Barat", zones: ["Lakarsantri", "Tandes", "Benowo", "Pakal"], available: true },
    { city: "Surabaya Selatan", zones: ["Wonokromo", "Wiyung", "Karangpilang", "Jambangan"], available: true },
    { city: "Surabaya Utara", zones: ["Semampir", "Pabean Cantian", "Krembangan", "Bulak"], available: true },
    { city: "Surabaya Pusat", zones: ["Genteng", "Tegalsari", "Bubutan", "Simokerto"], available: true },
    { city: "Sidoarjo", zones: ["Waru", "Taman", "Gedangan", "Buduran"], available: true },
    { city: "Krian", zones: ["Krian", "Balongbendo", "Sukodono", "Prambon"], available: true },
    { city: "Gresik", zones: ["Gresik Kota", "Kebomas", "Menganti", "Driyorejo"], available: true }
  ];

  // Garansi
  const warranties = [
    { type: "Service Rutin", period: "30 Hari", coverage: "Garansi kembali jika masalah sama terulang", icon: "🛡️" },
    { type: "Instalasi Baru", period: "90 Hari", coverage: "Garansi kebocoran dan instalasi", icon: <i className="bx bx-buildings text-xl"></i> },
    { type: "Spare Part", period: "1 Tahun", coverage: "Garansi resmi dari distributor", icon: "⚙️" },
    { type: "Workmanship", period: "60 Hari", coverage: "Garansi hasil kerja teknisi", icon: "👨‍🔧" }
  ];

  // FAQ
  const faqs = [
    {
      question: "Berapa lama waktu service AC?",
      answer: "Service rutin AC biasanya memakan waktu 30-60 menit tergantung kondisi AC dan jenis layanan yang dibutuhkan."
    },
    {
      question: "Apakah ada biaya survey sebelum instalasi?",
      answer: "Survey untuk instalasi AC split gratis dalam radius 10km dari kantor kami. Untuk area lebih jauh dikenakan biaya transport."
    },
    {
      question: "Bagaimana jika AC tidak dingin setelah service?",
      answer: "Kami memberikan garansi 30 hari untuk service. Jika masalah sama terulang, kami akan service ulang gratis."
    },
    {
      question: "Apakah bisa service di hari libur?",
      answer: "Ya, kami melayani 24/7 termasuk weekend dan hari libur dengan tambahan biaya emergency 25%."
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer: "Kami menerima pembayaran cash, transfer bank, e-wallet (OVO, DANA, GoPay), dan kartu kredit."
    },
    {
      question: "Berapa minimal panggilan service?",
      answer: "Tidak ada minimal panggilan. Kami melayani service untuk 1 unit AC sampai puluhan unit."
    }
  ];

  const handleContactClick = useCallback(() => {
      navigate('/contact');
  }, [navigate]);
  
  // Handle tipe servisnya ketika di klik
  const handleLearnMore = (serviceTypeIndex, serviceIndex) => {
    navigate(`/services?category=${serviceTypeIndex}&service=${serviceIndex}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
      <Hero />

      {/* Keunggulan Layanan */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Mengapa Memilih Dinasti AC Services?
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Tiga keunggulan utama yang membuat kami menjadi pilihan terbaik
              untuk kebutuhan AC Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 text-white cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 ${advantage.bgPattern} ${advantage.color} card-hover`}
                onMouseEnter={() => setHoveredCard(`advantage-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform transition-transform duration-300 group-hover:scale-110 animate-float">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-lg opacity-90">{advantage.description}</p>
                </div>
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/20 transform transition-transform duration-500 ${
                    hoveredCard === `advantage-${index}`
                      ? "scale-150"
                      : "scale-100"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jenis Layanan */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Layanan Lengkap AC
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Semua jenis layanan AC dari instalasi hingga maintenance dengan
              teknisi berpengalaman
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {serviceTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveServiceType(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeServiceType === index
                    ? "bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white shadow-lg"
                    : "bg-white text-[#64748B] hover:bg-[#E3F2FD] hover:text-[#2196F3] shadow-md"
                }`}
              >
                <span className="text-xl">{type.icon}</span>
                {type.category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes[activeServiceType].services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group card-hover border border-[#E3F2FD]"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#64748B] group-hover:text-[#2196F3] transition-colors mb-3">
                    {service.name}
                  </h3>
                  <span className="inline-block text-xs font-medium text-[#2196F3] bg-[#E3F2FD] px-3 py-1 rounded-full break-words max-w-full">
                    {service.price}
                  </span>
                </div>
                <p className="text-[#64748B]/80 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-[#E3F2FD]">
                  <button
                    onClick={() => handleLearnMore(activeServiceType, index)}
                    className="text-[#2196F3] text-sm font-medium hover:underline flex items-center gap-1 transition-all duration-300 hover:gap-2"
                  >
                    Pelajari lebih lanjut
                    <svg
                      className="w-4 h-4"
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Harga */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Daftar Harga
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Harga layanan AC kami yang jelas dan transparan tanpa biaya
              tersembunyi
            </p>
          </div>

          {/* Harga Kategori */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {priceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActivePriceCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activePriceCategory === index
                    ? "bg-gradient-to-r from-[#A7F3D0] to-[#2196F3] text-white shadow-lg"
                    : "bg-white text-[#64748B] hover:bg-[#E3F2FD] hover:text-[#2196F3] shadow-md border border-[#E3F2FD]"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Price Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceCategories[activePriceCategory].items.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover border ${
                  item.popular
                    ? "border-[#A7F3D0] ring-2 ring-[#A7F3D0]/50"
                    : "border-[#E3F2FD]"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#A7F3D0] to-[#2196F3] text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULER
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#64748B] mb-2">
                    {item.service}
                  </h3>
                  <div className="text-2xl font-bold text-[#2196F3] mb-2">
                    {item.price}
                  </div>
                  <p className="text-sm text-[#64748B]/80 mb-4">
                    {item.detail}
                  </p>
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-[#2196F3] to-[#1565C0] hover:from-[#1565C0] hover:to-[#2196F3] text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 btn-primary"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Order */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-[#A7F3D0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Cara Mudah Pesan Layanan
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Hanya 4 langkah mudah untuk mendapatkan layanan AC terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {orderSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-4 text-center card-hover">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4 animate-float">{step.icon}</div>
                  <h3 className="text-xl font-bold text-[#64748B] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B]/80">{step.desc}</p>
                </div>

                {/* Connector Arrow */}
                {index < orderSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 left-full transform -translate-y-1/2 w-12 justify-center text-[#2196F3] z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                      <svg
                        className="w-5 h-5"
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
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#2196F3] to-[#1565C0] hover:from-[#1565C0] hover:to-[#2196F3] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg btn-primary"
            >
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Area Layanan */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Area Layanan Kami
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Melayani daerah Surabaya, Sidoarjo dengan respons cepat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#64748B]">
                    {area.city}
                  </h3>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      area.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </div>
                <div className="space-y-2">
                  {area.zones.map((zone, zoneIndex) => (
                    <div key={zoneIndex} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500"
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
                      <span className="text-sm text-[#64748B]">{zone}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garansi */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Garansi Terpercaya
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Jaminan kualitas layanan dengan berbagai pilihan garansi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warranties.map((warranty, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {warranty.icon}
                </div>
                <h3 className="text-xl font-bold text-[#64748B] mb-2">
                  {warranty.type}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {warranty.period}
                </div>
                <p className="text-[#64748B]/80 text-sm">{warranty.coverage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-[#64748B]/80">
              Jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#E3F2FD]/30 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#E3F2FD]"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#E3F2FD]/50 transition-colors duration-300"
                >
                  <span className="font-semibold text-[#64748B]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#2196F3] transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-[#64748B]/80">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-[#A7F3D0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-lg text-[#64748B]/80">
              Kunjungi kantor kami atau hubungi untuk konsultasi gratis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#64748B] mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
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
                  <div>
                    <div className="font-semibold text-[#64748B]">Alamat</div>
                    <div className="text-[#64748B]/80">
                      Sidokepung, Kec. Buduran, Sidoarjo, Jawa Timur
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                  <div>
                    <div className="font-semibold text-[#64748B]">Telepon</div>
                    <div className="text-[#64748B]/80">+62 895-4060-11514</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#64748B]">
                      Jam Operasional
                    </div>
                    <div className="text-[#64748B]/80">
                      24/7 - Siap melayani kapan saja
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E3F2FD]">
                <div className="flex gap-4">
                  <button
                    onClick={handleContactClick}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="bx bx-phone text-xl"></i>
                    Call Now
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="bx bxl-whatsapp text-2xl"></i>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4496701140124!2d112.70162817371903!3d-7.415382173030339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3f1659995d5%3A0x38a6c17507cfa2c3!2sHPM3%2BRMW%2C%20Sidopurno%201%2C%20Sidokepung%2C%20Kec.%20Buduran%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1698826162782!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
