import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2196F3]"
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
      ),
      title: "Berpengalaman",
      description: "Lebih dari 10 tahun pengalaman dalam bidang service AC",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2196F3]"
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
      ),
      title: "Layanan 24/7",
      description: "Siap melayani kebutuhan AC Anda kapan saja",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2196F3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Tim Profesional",
      description: "Teknisi bersertifikat dan terlatih",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-[#2196F3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Harga Terjangkau",
      description: "Tarif kompetitif dengan kualitas terjamin",
    },
  ];

  const handleContactClick = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  const topTestimonials = [
    {
      name: "Budi Santoso",
      location: "Surabaya, Jawa Timur",
      rating: 5,
      text: "Pelayanan sangat memuaskan! Teknisi datang tepat waktu dan bekerja dengan profesional. AC di rumah saya jadi dingin lagi setelah service. Harga juga sangat terjangkau.",
      image: "/img/reviews-1.webp",
      service: "Service AC Split 2 PK",
    },
    {
      name: "Sari Dewi",
      location: "Gresik, Jawa Timur",
      rating: 5,
      text: "Sudah langganan service AC disini selama 3 tahun. Selalu puas dengan hasilnya. Tim teknisinya ramah dan menjelaskan kondisi AC dengan detail.",
      image: "/img/reviews-2.webp",
      service: "Paket Tahunan",
    },
    {
      name: "Dahlia Pratiwi",
      location: "Sidoarjo, Jawa Timur",
      rating: 5,
      text: "Instalasi AC split baru di rumah berjalan lancar. Hasil pemasangan rapi dan bersih. Teknisi juga memberikan tips perawatan AC yang berguna.",
      image: "/img/reviews-3.webp",
      service: "Instalasi AC Split 1.5 PK",
    },
  ];

  const guarantees = [
    {
      icon: <i className="bx bx-shield text-4xl"></i>,
      title: "Garansi Service",
      period: "30 Hari",
      description:
        "Jika masalah yang sama berulang dalam 30 hari, kami akan service ulang gratis tanpa biaya tambahan.",
    },
    {
      icon: <i className="bx bx-wrench text-4xl"></i>,
      title: "Garansi Instalasi",
      period: "90 Hari",
      description:
        "Garansi penuh untuk instalasi baru termasuk kebocoran pipa dan masalah pemasangan.",
    },
    {
      icon: <i className="bx bx-cog text-4xl"></i>,
      title: "Garansi Spare Part",
      period: "1 Tahun",
      description:
        "Semua spare part original bergaransi resmi dari distributor dengan sertifikat garansi.",
    },
    {
      icon: <i className="bx bx-user-check text-4xl"></i>,
      title: "Garansi Workmanship",
      period: "60 Hari",
      description:
        "Jaminan kualitas hasil kerja teknisi profesional kami yang bersertifikat.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Auto-slide setiap 6.5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % topTestimonials.length);
    }, 6500); // 6.5 detik

    return () => clearInterval(interval);
  }, [topTestimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2196F3] to-[#1565C0]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tentang Dinasti AC Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Partner terpercaya Anda untuk semua kebutuhan AC dengan pengalaman
            lebih dari 10 tahun
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/img/about-3.webp"
                alt="Tentang Dinasti AC Services"
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400/2196F3/FFFFFF?text=Dinasti+AC+Services";
                }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-6">
                Siapa Kami?
              </h2>
              <p className="text-lg text-[#64748B]/80 mb-6 leading-relaxed">
                Dinasti AC Services adalah perusahaan penyedia layanan AC
                terpercaya yang telah melayani masyarakat Jakarta dan sekitarnya
                selama lebih dari 10 tahun. Kami didirikan dengan visi menjadi
                solusi utama untuk semua kebutuhan pendingin udara, mulai dari
                service rutin, instalasi, hingga perbaikan AC untuk rumah,
                kantor, dan gedung komersial.
              </p>
              <p className="text-lg text-[#64748B]/80 mb-8 leading-relaxed">
                Dengan tim teknisi profesional yang bersertifikat dan
                berpengalaman, kami berkomitmen memberikan pelayanan berkualitas
                tinggi dengan harga yang kompetitif. Kepuasan pelanggan adalah
                prioritas utama kami, didukung dengan garansi layanan yang
                komprehensif dan respons cepat 24/7 untuk kebutuhan darurat.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2196F3] mb-2">
                    500+
                  </div>
                  <div className="text-sm text-[#64748B]">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2196F3] mb-2">
                    10+
                  </div>
                  <div className="text-sm text-[#64748B]">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2196F3] mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-[#64748B]">Layanan Darurat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Keunggulan Kami
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Mengapa lebih dari 500 pelanggan mempercayai layanan kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-[#64748B] mb-3">
                  {feature.title}
                </h4>
                <p className="text-[#64748B]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Testimoni Terbaik Kami
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Pendapat pelanggan setia dengan rating terbaik tentang layanan
              kami
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center">
                <img
                  src={topTestimonials[currentTestimonial].image}
                  alt={topTestimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-[#2196F3] transition-all duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/80x80/2196F3/FFFFFF?text=" +
                      topTestimonials[currentTestimonial].name.charAt(0);
                  }}
                />
                <div className="flex justify-center mb-4">
                  {renderStars(topTestimonials[currentTestimonial].rating)}
                </div>
                <blockquote className="text-xl md:text-2xl text-[#64748B] italic mb-6 leading-relaxed transition-all duration-500">
                  "{topTestimonials[currentTestimonial].text}"
                </blockquote>
                <div className="font-semibold text-[#64748B] text-lg mb-2 transition-all duration-500">
                  {topTestimonials[currentTestimonial].name}
                </div>
                <div className="text-[#2196F3] mb-2 transition-all duration-500">
                  {topTestimonials[currentTestimonial].location}
                </div>
                <div className="text-sm text-[#64748B]/70 transition-all duration-500">
                  Layanan: {topTestimonials[currentTestimonial].service}
                </div>
              </div>
            </div>

            {/* Navigation Dots with Progress Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {topTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#2196F3] scale-125"
                      : "bg-gray-300 hover:bg-[#2196F3]/50"
                  }`}
                >
                  {index === currentTestimonial && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#2196F3] animate-ping opacity-75"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* All testimonials preview */}
          <div className="grid md:grid-cols-3 gap-6">
            {topTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial
                    ? "border-[#2196F3] bg-[#E3F2FD]/30"
                    : "border-gray-200 hover:border-[#2196F3]/50"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#64748B]">
                      {testimonial.name}
                    </div>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#64748B]/80 line-clamp-3">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-[#A7F3D0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Garansi & Layanan Berkualitas
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Komitmen kami terhadap kualitas layanan dengan jaminan yang
              komprehensif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold text-[#64748B] mb-2">
                  {guarantee.title}
                </h3>
                <div className="text-2xl font-bold text-[#2196F3] mb-4">
                  {guarantee.period}
                </div>
                <p className="text-[#64748B]/80 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#64748B] mb-4">
              Mengapa Memilih Garansi Kami?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
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
                </div>
                <div>
                  <h4 className="font-semibold text-[#64748B] mb-2">
                    Transparan
                  </h4>
                  <p className="text-sm text-[#64748B]/80">
                    Tidak ada biaya tersembunyi dalam klaim garansi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
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
                  <h4 className="font-semibold text-[#64748B] mb-2">
                    Respon Cepat
                  </h4>
                  <p className="text-sm text-[#64748B]/80">
                    Klaim garansi diproses dalam 24 jam
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
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
                <div>
                  <h4 className="font-semibold text-[#64748B] mb-2">
                    Berkualitas
                  </h4>
                  <p className="text-sm text-[#64748B]/80">
                    Menggunakan spare part original bersertifikat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Siap melayani kebutuhan AC Anda 24/7. Hubungi kami sekarang untuk
              konsultasi gratis!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#64748B] mb-6">
                Informasi Kontak
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2196F3] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                      <div className="font-semibold text-[#64748B]">
                        Telepon
                      </div>
                      <div className="text-[#64748B]/80">
                        +62 895-4060-11514
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25d366] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#64748B]">
                        WhatsApp
                      </div>
                      <div className="text-[#64748B]/80">
                        +62 895-4060-11514
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <div>
                      <div className="font-semibold text-[#64748B]">Email</div>
                      <div className="text-[#64748B]/80">
                        dinastiac@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                        24/7 - Siap melayani
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleContactClick}
                    className="flex-1 bg-[#2196F3] hover:bg-[#1565C0] text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Hubungi Sekarang
                  </button>
                  <button className="flex-1 bg-[#25D366] hover:bg-[#128C7E] hover:text-white text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2196F3] to-[#1565C0] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Konsultasi Gratis</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Survey lokasi gratis</span>
                </div>
                <div className="flex items-center gap-3">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Estimasi biaya transparan</span>
                </div>
                <div className="flex items-center gap-3">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Saran pemeliharaan AC</span>
                </div>
              </div>
              <button
                onClick={handleContactClick}
                className="w-full bg-white text-[#2196F3] py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                Minta Konsultasi
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
