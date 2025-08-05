import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    email: "",
    alamat: "",
    keluhan: "",
    layanan: ""
  });

  const layananOptions = [
    "Service Rutin AC",
    "Instalasi AC Baru", 
    "Perbaikan AC",
    "Bongkar Pasang AC",
    "Deep Cleaning",
    "Emergency Service",
    "Konsultasi Teknis",
    "Lainnya"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format pesan WhatsApp
    const message = `*PERMINTAAN LAYANAN AC*

👤 *Data Pelanggan:*
• Nama: ${formData.nama}
• No. HP: ${formData.noHp}
• Email: ${formData.email}
• Alamat: ${formData.alamat}

🔧 *Detail Layanan:*
• Jenis Layanan: ${formData.layanan}
• Keluhan/Kebutuhan: ${formData.keluhan}

---
Mohon konfirmasi ketersediaan teknisi dan estimasi biaya. Terima kasih!`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Nomor WhatsApp bisnis (gunakan format internasional tanpa +)
    const whatsappNumber = "62895406011514"; // Ganti dengan nomor WA bisnis Anda
    
    // Buka WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectContact = (type) => {
    let message = "";
    
    switch(type) {
      case 'emergency':
        message = "Halo, saya butuh layanan emergency AC. Mohon bantuan segera!";
        break;
      case 'konsultasi':
        message = "Halo, saya ingin konsultasi tentang layanan AC. Bisa dibantu?";
        break;
      case 'quote':
        message = "Halo, saya ingin minta penawaran harga untuk layanan AC. Terima kasih.";
        break;
      default:
        message = "Halo, saya tertarik dengan layanan Dinasti AC Services.";
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "62895406011514";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2196F3] to-[#1565C0]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Siap melayani kebutuhan AC Anda 24/7. Konsultasi gratis dan respon
            cepat dalam 30 menit
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Kontak Cepat
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Pilih cara termudah untuk menghubungi kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <button
              onClick={() => handleDirectContact("emergency")}
              className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <i className="bx bx-error text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
              <p className="text-white/90 text-sm mb-4">
                Butuh bantuan segera? Hubungi sekarang!
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
            </button>

            <button
              onClick={() => handleDirectContact("konsultasi")}
              className="bg-gradient-to-br from-[#2196F3] to-[#1565C0] hover:from-[#1565C0] hover:to-[#0D47A1] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <i className="bx bx-chat text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-bold mb-2">Konsultasi Gratis</h3>
              <p className="text-white/90 text-sm mb-4">
                Tanya jawab seputar AC dengan ahli
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
            </button>

            <button
              onClick={() => handleDirectContact("quote")}
              className="bg-gradient-to-br from-[#A7F3D0] to-[#2196F3] hover:from-[#2196F3] hover:to-[#A7F3D0] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <i className="bx bx-money text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"></i>
              <h3 className="text-xl font-bold mb-2">Minta Penawaran</h3>
              <p className="text-white/90 text-sm mb-4">
                Dapatkan estimasi harga terbaik
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <span className="text-sm font-medium">Best Price</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#64748B] mb-6">
                Form Permintaan Layanan
              </h3>
              <p className="text-[#64748B]/70 mb-8">
                Isi form di bawah ini dan kami akan menghubungi Anda melalui
                WhatsApp dengan detail lengkap
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full border-2 border-[#E3F2FD] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2196F3] transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#64748B] mb-2">
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="noHp"
                      value={formData.noHp}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full border-2 border-[#E3F2FD] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2196F3] transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#64748B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@domain.com"
                    className="w-full border-2 border-[#E3F2FD] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2196F3] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#64748B] mb-2">
                    Alamat Lengkap *
                  </label>
                  <textarea
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota"
                    rows={3}
                    className="w-full border-2 border-[#E3F2FD] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2196F3] transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#64748B] mb-2">
                    Jenis Layanan *
                  </label>
                  <select
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleInputChange}
                    className="w-full border-2 border-[#E3F2FD] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2196F3] transition-colors duration-300"
                    required
                  >
                    <option value="">Pilih jenis layanan</option>
                    {layananOptions.map((layanan, index) => (
                      <option key={index} value={layanan}>
                        {layanan}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#64748B] mb-2">
                    Keluhan / Kebutuhan *
                  </label>
                  <textarea
                    name="keluhan"
                    value={formData.keluhan}
                    onChange={handleInputChange}
                    placeholder="Jelaskan masalah AC atau kebutuhan layanan Anda secara detail..."
                    rows={4}
                    className="w-full border-2 border-[#E3F2FD] rounded-xl px-4 py-3 focus:outline-none focus:border-[#2196F3] transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <i className="bx bxl-whatsapp text-2xl"></i>
                  Kirim via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#64748B] mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2196F3] rounded-xl flex items-center justify-center">
                      <i className="bx bx-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-[#64748B]">
                        Telepon
                      </div>
                      <div className="text-[#64748B]/80">
                        +62 895-4060-11514
                      </div>
                      <div className="text-xs text-[#64748B]/60">
                        24/7 Available
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                      <i className="bx bxl-whatsapp text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-[#64748B]">
                        WhatsApp
                      </div>
                      <div className="text-[#64748B]/80">
                        +62 895-4060-11514
                      </div>
                      <div className="text-xs text-[#64748B]/60">
                        Fast Response
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                      <i className="bx bx-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-[#64748B]">Email</div>
                      <div className="text-[#64748B]/80">
                        dinastiac@gmail.com
                      </div>
                      <div className="text-xs text-[#64748B]/60">
                        Response in 2 hours
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <i className="bx bx-map text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="font-semibold text-[#64748B]">Alamat</div>
                      <div className="text-[#64748B]/80">
                        Sidokepung, Kec. Buduran
                      </div>
                      <div className="text-xs text-[#64748B]/60">
                        Sidoarjo, Jawa Timur
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Hours */}
              <div className="bg-gradient-to-br from-[#2196F3] to-[#1565C0] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Jam Layanan</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Service Regular</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Emergency Service</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Konsultasi WhatsApp</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Weekend Service</span>
                    <span className="font-semibold">Available (+25%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Lokasi Kantor Kami
            </h2>
            <p className="text-lg text-[#64748B]/80">
              Kunjungi kantor kami untuk konsultasi langsung
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
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
      </section>
      <Footer />
    </div>
  );
}
