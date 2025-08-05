import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeServiceDetail, setActiveServiceDetail] = useState(0);
  const [highlightedService, setHighlightedService] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
   const handleContactClick = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const serviceCategories = useMemo(() => [
    {
      category: "Layanan Umum",
      icon: <i className="bx bx-cog text-xl"></i>,
      services: [
        {
          name: "Service Rutin AC",
          description:
            "Perawatan berkala untuk menjaga performa AC tetap optimal dan awet",
          detailDesc:
            "Service rutin adalah kunci untuk menjaga AC Anda bekerja dengan efisien. Tim teknisi kami akan melakukan pemeriksaan menyeluruh dan perawatan komprehensif.",
          features: [
            "Pembersihan filter udara secara menyeluruh",
            "Cuci evaporator dengan chemical khusus",
            "Pembersihan condenser outdoor unit",
            "Cek dan isi freon jika diperlukan",
            "Pemeriksaan komponen elektrikal",
            "Cek fungsi thermostat dan remote",
            "Pembersihan drain pan dan pipa pembuangan",
            "Testing performa cooling dan heating",
          ],
          benefits: [
            "Hemat listrik hingga 30%",
            "Udara lebih bersih dan sehat",
            "Mengurangi risiko kerusakan",
            "Memperpanjang usia AC",
          ],
          price: "Mulai 75k",
          duration: "30-60 menit",
          warranty: "30 hari",
        },
        {
          name: "Instalasi AC Baru",
          description:
            "Pemasangan AC split, cassette, dan standing floor dengan standar internasional",
          detailDesc:
            "Instalasi profesional dengan perencanaan yang matang untuk hasil optimal. Kami menggunakan material berkualitas tinggi dan mengikuti standar internasional.",
          features: [
            "Survey lokasi dan konsultasi gratis",
            "Pemasangan bracket dan supporting dengan kuat",
            "Instalasi pipa refrigerant dengan las berkualitas",
            "Pemasangan kabel listrik sesuai standar",
            "Vacuuming system untuk menghilangkan udara",
            "Pressure test untuk memastikan tidak bocor",
            "Commissioning dan testing fungsi lengkap",
            "Garansi instalasi 90 hari",
          ],
          benefits: [
            "Instalasi rapi dan aman",
            "Performa AC maksimal",
            "Tahan lama dan awet",
            "Garansi resmi",
          ],
          price: "Mulai 200k",
          duration: "2-4 jam",
          warranty: "90 hari",
        },
        {
          name: "Perbaikan AC",
          description:
            "Diagnosa dan repair untuk semua jenis kerusakan AC dengan spare part original",
          detailDesc:
            "Tim teknisi berpengalaman siap menangani berbagai masalah AC dengan diagnosa yang akurat dan solusi yang tepat.",
          features: [
            "Diagnosa kerusakan dengan alat canggih",
            "Perbaikan kompressor dan motor fan",
            "Ganti spare part original bergaransi",
            "Perbaikan kebocoran refrigerant",
            "Service PCB dan kontrol elektrik",
            "Penggantian sensor dan thermostat",
            "Perbaikan masalah drainase",
            "Testing menyeluruh setelah repair",
          ],
          benefits: [
            "Diagnosa akurat",
            "Spare part original",
            "Teknisi bersertifikat",
            "Garansi perbaikan",
          ],
          price: "Mulai 100k",
          duration: "1-3 jam",
          warranty: "30-60 hari",
        },
        {
          name: "Bongkar Pasang AC",
          description:
            "Layanan pindahan AC yang aman dengan jaminan fungsi normal",
          detailDesc:
            "Proses bongkar pasang yang professional untuk memastikan AC Anda tetap berfungsi optimal di lokasi baru.",
          features: [
            "Bongkar dengan prosedur yang benar",
            "Recovery freon untuk digunakan kembali",
            "Packing komponen dengan aman",
            "Transportasi dengan handling khusus",
            "Instalasi ulang di lokasi baru",
            "Pressure test dan leak test",
            "Pengisian freon sesuai spesifikasi",
            "Testing fungsi dan performa",
          ],
          benefits: [
            "Proses aman dan profesional",
            "Tidak merusak komponen",
            "Fungsi AC tetap optimal",
            "Hemat biaya beli AC baru",
          ],
          price: "Mulai 150k",
          duration: "3-5 jam",
          warranty: "30 hari",
        },
      ],
    },
    {
      category: "Tipe AC",
      icon: <i className="bx bx-wind text-xl"></i>,
      services: [
        {
          name: "AC Split Wall",
          description:
            "Layanan untuk AC split wall 1/2 PK hingga 2.5 PK untuk rumah dan kantor",
          detailDesc:
            "Spesialisasi penanganan AC split wall dengan berbagai merk dan kapasitas. Cocok untuk ruangan residential dan komersial kecil.",
          features: [
            "Service untuk semua merk (Daikin, Panasonic, LG, Sharp, dll)",
            "Kapasitas 1/2 PK hingga 2.5 PK",
            "Teknologi inverter dan non-inverter",
            "R22 dan R32 refrigerant",
            "Low watt dan standard watt",
            "Single split dan multi split",
            "Smart AC dengan WiFi",
            "Eco-friendly series",
          ],
          benefits: [
            "Sesuai untuk rumah tinggal",
            "Hemat energi",
            "Instalasi fleksibel",
            "Maintenance mudah",
          ],
          price: "Service 75k",
          duration: "30-45 menit",
          warranty: "30 hari",
        },
        {
          name: "AC Cassette",
          description:
            "Ceiling cassette 2 PK hingga 5 PK untuk ruang besar dan komersial",
          detailDesc:
            "Penanganan khusus untuk AC cassette yang terpasang di plafon. Membutuhkan teknik dan alat khusus untuk service yang optimal.",
          features: [
            "4-way dan 1-way cassette",
            "Kapasitas 2 PK hingga 5 PK",
            "Round flow dan square cassette",
            "Wireless controller dan wired controller",
            "Sensor ruangan otomatis",
            "Filter anti-bakteri",
            "Sistem drainage built-in",
            "Desain aesthetic untuk interior",
          ],
          benefits: [
            "Distribusi udara merata",
            "Hemat space interior",
            "Tampilan modern",
            "Cocok ruang besar",
          ],
          price: "Service 150k",
          duration: "45-90 menit",
          warranty: "30 hari",
        },
        {
          name: "AC Standing Floor",
          description:
            "3 PK hingga 10 PK untuk ruang komersial dan industrial",
          detailDesc:
            "Penanganan AC standing floor untuk kapasitas besar. Cocok untuk ruang meeting, showroom, dan area komersial.",
          features: [
            "Tower type dan cabinet type",
            "Kapasitas 3 PK hingga 10 PK",
            "High static pressure",
            "Multiple fan speed",
            "Remote control advanced",
            "Timer dan scheduling",
            "Air purifier terintegrasi",
            "Energy saving mode",
          ],
          benefits: [
            "Kapasitas besar",
            "Instalasi mudah",
            "Maintenance accessible",
            "Performa powerful",
          ],
          price: "Service 200k",
          duration: "60-120 menit",
          warranty: "30 hari",
        },
        {
          name: "AC Central (VRV/VRF)",
          description:
            "System VRV/VRF untuk gedung, mall, dan bangunan komersial besar",
          detailDesc:
            "Sistem central air conditioning yang kompleks membutuhkan expertise khusus. Kami menangani dari maintenance rutin hingga troubleshooting system.",
          features: [
            "Multi indoor unit management",
            "Variable refrigerant flow",
            "Central controller system",
            "Heat recovery system",
            "Fresh air integration",
            "Building management system",
            "Energy monitoring",
            "Preventive maintenance schedule",
          ],
          benefits: [
            "Efisiensi energi tinggi",
            "Kontrol terpusat",
            "Fleksibilitas zona",
            "Maintenance terencana",
          ],
          price: "Survey gratis",
          duration: "Sesuai scope",
          warranty: "Kontrak maintenance",
        },
      ],
    },
    {
      category: "Spesialisasi",
      icon: <i className="bx bx-star text-xl"></i>,
      services: [
        {
          name: "AC Inverter",
          description:
            "Service dan instalasi AC hemat energi dengan teknologi inverter",
          detailDesc:
            "Teknologi inverter membutuhkan penanganan khusus. Tim kami telah terlatih untuk menangani kompleksitas sistem inverter.",
          features: [
            "Variable frequency drive system",
            "DC inverter compressor",
            "Smart sensors dan controls",
            "Energy efficiency optimization",
            "Quiet operation technology",
            "Advanced filtration system",
            "Self-diagnostic function",
            "Eco mode dan turbo mode",
          ],
          benefits: [
            "Hemat listrik hingga 60%",
            "Suara lebih senyap",
            "Suhu lebih stabil",
            "Ramah lingkungan",
          ],
          price: "Service 100k",
          duration: "45-60 menit",
          warranty: "30 hari",
        },
        {
          name: "AC R32 Refrigerant",
          description:
            "Teknologi refrigerant ramah lingkungan dengan efisiensi tinggi",
          detailDesc:
            "R32 adalah refrigerant generasi baru yang lebih ramah lingkungan. Memerlukan handling dan tools khusus untuk service yang aman.",
          features: [
            "Eco-friendly refrigerant",
            "Lower global warming potential",
            "Higher energy efficiency",
            "Special handling procedures",
            "Leak detection technology",
            "Recovery dan recycling",
            "Safety protocols",
            "Environmental compliance",
          ],
          benefits: [
            "Ramah lingkungan",
            "Efisiensi tinggi",
            "Future-proof technology",
            "Comply standar internasional",
          ],
          price: "Freon 150k",
          duration: "30-60 menit",
          warranty: "90 hari freon",
        },
        {
          name: "Smart AC (IoT)",
          description:
            "AC dengan fitur WiFi, voice control, dan integrasi smart home",
          detailDesc:
            "Smart AC membutuhkan setup khusus untuk koneksi internet dan integrasi dengan sistem smart home. Kami provide full support.",
          features: [
            "WiFi connectivity setup",
            "Mobile app configuration",
            "Voice control integration",
            "Smart home compatibility",
            "Remote monitoring",
            "Scheduling dan automation",
            "Energy usage tracking",
            "Firmware update service",
          ],
          benefits: [
            "Kontrol jarak jauh",
            "Otomasi cerdas",
            "Monitoring real-time",
            "Integrasi smart home",
          ],
          price: "Setup 50k",
          duration: "30-45 menit",
          warranty: "Setup guarantee",
        },
        {
          name: "AC Industrial",
          description:
            "Sistem pendingin untuk pabrik, data center, dan aplikasi industrial",
          detailDesc:
            "Aplikasi industrial membutuhkan sistem pendingin yang robust dan reliable. Kami provide solusi lengkap dari design hingga maintenance.",
          features: [
            "Process cooling system",
            "Precision air conditioning",
            "24/7 operation capability",
            "Redundancy system design",
            "Environmental monitoring",
            "Preventive maintenance program",
            "Emergency response service",
            "Compliance industrial standard",
          ],
          benefits: [
            "Reliability tinggi",
            "Precision control",
            "24/7 support",
            "Customized solution",
          ],
          price: "Konsultasi gratis",
          duration: "Project basis",
          warranty: "Service contract",
        },
      ],
    },
  ], []);

  // Handle URL query parameters to highlight specific service
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const service = searchParams.get('service');
    
    if (category !== null) {
      const categoryIndex = parseInt(category);
      if (categoryIndex >= 0 && categoryIndex < serviceCategories.length) {
        setActiveServiceDetail(categoryIndex);
        
        if (service !== null) {
          const serviceIndex = parseInt(service);
          if (serviceIndex >= 0 && serviceIndex < serviceCategories[categoryIndex].services.length) {
            setHighlightedService(`${categoryIndex}-${serviceIndex}`);
            
            // Auto scroll to highlighted service after component mounts
            setTimeout(() => {
              const element = document.getElementById(`service-${categoryIndex}-${serviceIndex}`);
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
              }
            }, 500);
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
              setHighlightedService(null);
            }, 3000);
          }
        }
      }
    }
  }, [location.search, serviceCategories]);

  const pricingTabs = [
    {
      name: "Service AC",
      icon: <i className="bx bx-wrench text-xl"></i>,
      prices: [
        {
          type: "AC Split 1/2 - 1 PK",
          price: "Rp 75.000",
          desc: "Cuci evaporator + filter + cek freon",
          popular: false,
        },
        {
          type: "AC Split 1.5 - 2 PK",
          price: "Rp 100.000",
          desc: "Cuci evaporator + filter + cek freon",
          popular: true,
        },
        {
          type: "AC Cassette 2 - 3 PK",
          price: "Rp 150.000",
          desc: "Deep cleaning lengkap + filter khusus",
          popular: false,
        },
        {
          type: "AC Standing Floor 3-5 PK",
          price: "Rp 200.000",
          desc: "Complete maintenance + air filter",
          popular: false,
        },
        {
          type: "Paket Tahunan",
          price: "Rp 800.000",
          desc: "12x service + gratis panggilan darurat",
          popular: true,
        },
      ],
    },
    {
      name: "Instalasi",
      icon: <i className="bx bx-cog text-xl"></i>,
      prices: [
        {
          type: "AC Split 1/2 - 1 PK",
          price: "Rp 200.000",
          desc: "Instalasi standar s/d 3 meter",
          popular: false,
        },
        {
          type: "AC Split 1.5 - 2 PK",
          price: "Rp 300.000",
          desc: "Instalasi standar s/d 5 meter",
          popular: true,
        },
        {
          type: "AC Split > 2 PK",
          price: "Rp 400.000",
          desc: "Instalasi standar s/d 7 meter",
          popular: false,
        },
        {
          type: "AC Cassette",
          price: "Rp 500.000",
          desc: "Instalasi + ducting + ceiling work",
          popular: false,
        },
        {
          type: "Pipa Tambahan",
          price: "Rp 25.000/m",
          desc: "Diluar paket standar + material",
          popular: false,
        },
      ],
    },
    {
      name: "Perbaikan",
      icon: <i className="bx bx-hammer text-xl"></i>,
      prices: [
        {
          type: "Ganti Freon R22",
          price: "Rp 120.000",
          desc: "Per 1/2 PK + service basic",
          popular: false,
        },
        {
          type: "Ganti Freon R32",
          price: "Rp 150.000",
          desc: "Per 1/2 PK + service basic",
          popular: true,
        },
        {
          type: "Ganti Kapasitor",
          price: "Rp 75.000",
          desc: "Sudah termasuk komponen original",
          popular: false,
        },
        {
          type: "Tambal Bocor",
          price: "Rp 100.000",
          desc: "Las titik + pressure test + top up",
          popular: false,
        },
        {
          type: "Service PCB",
          price: "Rp 150.000",
          desc: "Diagnosa + repair elektronik",
          popular: false,
        },
      ],
    },
    {
      name: "Layanan Khusus",
      icon: <i className="bx bx-star text-xl"></i>,
      prices: [
        {
          type: "Bongkar Pasang AC",
          price: "Rp 150.000",
          desc: "Complete relocation service",
          popular: false,
        },
        {
          type: "Deep Cleaning",
          price: "Rp 120.000",
          desc: "Chemical wash + sanitizing",
          popular: true,
        },
        {
          type: "Emergency Service",
          price: "+25%",
          desc: "Layanan darurat 24/7",
          popular: false,
        },
        {
          type: "Maintenance Contract",
          price: "Custom",
          desc: "Paket maintenance bulanan/tahunan",
          popular: true,
        },
        {
          type: "Konsultasi Teknis",
          price: "Gratis",
          desc: "Survey + rekomendasi sistem",
          popular: false,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2196F3] to-[#1565C0]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Layanan AC Profesional
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan AC Anda dengan teknisi bersertifikat
            dan garansi terpercaya
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Kategori Layanan Kami
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Pilih kategori layanan sesuai kebutuhan Anda
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveServiceDetail(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeServiceDetail === index
                    ? "bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white shadow-lg"
                    : "bg-white text-[#64748B] hover:bg-[#E3F2FD] hover:text-[#2196F3] shadow-md border border-[#E3F2FD]"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.category}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories[activeServiceDetail].services.map((service, index) => (
              <div
                key={index}
                id={`service-${activeServiceDetail}-${index}`}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  highlightedService === `${activeServiceDetail}-${index}` 
                    ? 'bg-gradient-to-br from-[#A7F3D0] to-[#E3F2FD] ring-2 ring-[#2196F3] animate-pulse' 
                    : 'bg-gradient-to-br from-[#E3F2FD] to-white'
                }`}
              >
                {highlightedService === `${activeServiceDetail}-${index}` && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                      ✨ LAYANAN INI
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#64748B] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-[#64748B]/80 mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-[#64748B]/70 leading-relaxed">
                      {service.detailDesc}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#2196F3] mb-1">
                      {service.price}
                    </div>
                    <div className="text-xs text-[#64748B]/70">
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#64748B] mb-3">
                    Yang Kami Lakukan:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#2196F3] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-[#64748B]/80">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-xs text-[#2196F3] mt-2">
                        +{service.features.length - 4} layanan lainnya
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#64748B] mb-3">Keuntungan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#A7F3D0]/30 text-[#1565C0] px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Warranty & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E3F2FD]">
                  <div className="flex items-center gap-2 text-sm text-[#64748B]/70">
                    <svg
                      className="w-4 h-4 text-[#A7F3D0]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Garansi {service.warranty}
                  </div>
                  <button
                    onClick={handleContactClick}
                    className="bg-[#2196F3] hover:bg-[#1565C0] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Daftar Harga Layanan
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Harga transparan dan kompetitif untuk semua jenis layanan AC
            </p>
          </div>

          {/* Pricing Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {pricingTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#A7F3D0] to-[#2196F3] text-white shadow-lg"
                    : "bg-white text-[#64748B] hover:bg-[#E3F2FD] hover:text-[#2196F3] shadow-md border border-[#E3F2FD]"
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pricingTabs[activeTab].prices.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
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
                    {item.type}
                  </h3>
                  <div className="text-2xl font-bold text-[#2196F3] mb-2">
                    {item.price}
                  </div>
                  <p className="text-sm text-[#64748B]/80 mb-4">
                    {item.desc}
                  </p>
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-[#2196F3] to-[#1565C0] hover:from-[#1565C0] hover:to-[#2196F3] text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                    Pilih Paket
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6">
            <p className="text-sm text-[#64748B]/70 mb-4">
              * Harga sewaktu-waktu dapat berubah. Hubungi kami untuk informasi terbaru
              dan penawaran khusus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2196F3] hover:bg-[#1565C0] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Konsultasi Gratis
              </button>
              <button className="border-2 border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Minta Penawaran
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Mengapa Memilih Layanan Kami?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#E3F2FD] to-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#2196F3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#64748B] mb-3">
                Teknisi Bersertifikat
              </h3>
              <p className="text-[#64748B]/80">
                Tim teknisi profesional dengan sertifikasi resmi dan pengalaman 10+
                tahun
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#E3F2FD] to-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#A7F3D0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#1565C0]"
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
              <h3 className="text-xl font-bold text-[#64748B] mb-3">
                Respon Cepat
              </h3>
              <p className="text-[#64748B]/80">
                Layanan 24/7 dengan respon maksimal 30 menit untuk area Jakarta
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#E3F2FD] to-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-[#1565C0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.5-8.5l2.121 2.121M15 11.5l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#64748B] mb-3">
                Garansi Terpercaya
              </h3>
              <p className="text-[#64748B]/80">
                Garansi layanan hingga 90 hari dengan spare part original bergaransi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-[#2196F3] to-[#1565C0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Butuh Layanan AC Sekarang?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-phone text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">Telepon</h3>
              <p className="text-white/80">+62 812-3456-7890</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="bx bxl-whatsapp text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-white/80">Chat Langsung</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-time text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">Jam Layanan</h3>
              <p className="text-white/80">24/7 Available</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-map text-2xl"></i>
              </div>
              <h3 className="font-bold mb-2">Area Layanan</h3>
              <p className="text-white/80">Jakarta & Sekitarnya</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2196F3] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Hubungi Sekarang
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#2196F3] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}