import { useState, useEffect, useCallback } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const handleDirectContact = useCallback(() => {
    navigate("/contact", { state: { fromTestimonials: true } });
  }, [navigate]);

  // Google Reviews simulation (replace with actual API call)
  const googleReviews = {
    rating: 5.0,
    totalReviews: 23,
    summary: {
      quickResponse: "Quick and efficient response from technicians",
      transparentPricing: "Transparent pricing with guarantees", 
      highlyRecommended: "Highly recommended for reliable and affordable AC services"
    },
    reviews: [
      {
        id: 1,
        name: "Budi Santoso",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        date: "2 minggu yang lalu",
        text: "Pelayanan sangat memuaskan! Teknisi datang tepat waktu dan bekerja dengan profesional. AC di rumah saya jadi dingin lagi setelah service. Harga juga sangat terjangkau dibanding tempat lain.",
        service: "Service AC Split",
        verified: true,
        helpful: 12
      },
      {
        id: 2,
        name: "Sari Dewi",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        date: "1 bulan yang lalu", 
        text: "Sudah langganan service AC disini selama 3 tahun. Selalu puas dengan hasilnya. Tim teknisinya ramah dan menjelaskan kondisi AC dengan detail. Highly recommended!",
        service: "Paket Tahunan",
        verified: true,
        helpful: 8
      },
      {
        id: 3,
        name: "Ahmad Rizki",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        date: "3 minggu yang lalu",
        text: "Instalasi AC split baru di rumah berjalan lancar. Hasil pemasangan rapi dan bersih. Teknisi juga memberikan tips perawatan AC yang berguna. Worth it!",
        service: "Instalasi AC",
        verified: true,
        helpful: 15
      },
      {
        id: 4,
        name: "Maya Putri",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        date: "1 minggu yang lalu",
        text: "Emergency call tengah malam untuk AC yang tiba-tiba mati. Teknisi datang dalam 30 menit dan langsung fix masalahnya. Pelayanan 24/7 benar-benar real!",
        service: "Emergency Service",
        verified: true,
        helpful: 20
      },
      {
        id: 5,
        name: "Andi Wijaya",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        date: "2 bulan yang lalu",
        text: "Bongkar pasang AC untuk pindahan rumah. Proses sangat hati-hati dan AC tetap berfungsi normal di rumah baru. Terima kasih tim Dinasti AC!",
        service: "Bongkar Pasang",
        verified: true,
        helpful: 6
      },
      {
        id: 6,
        name: "Linda Kartika",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        date: "3 minggu yang lalu",
        text: "Deep cleaning AC cassette di kantor. Hasilnya luar biasa, udara jadi lebih segar dan AC lebih dingin. Harga reasonable untuk kualitas yang didapat.",
        service: "Deep Cleaning",
        verified: true,
        helpful: 9
      }
    ]
  };

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setReviews(googleReviews.reviews);
      setLoading(false);
    }, 1000);
  }, [googleReviews.reviews]);

  const categories = [
    { id: "all", label: "Semua Review", count: googleReviews.reviews.length },
    { id: "service", label: "Service AC", count: 2 },
    { id: "instalasi", label: "Instalasi", count: 1 },
    { id: "emergency", label: "Emergency", count: 1 },
    { id: "bongkar-pasang", label: "Bongkar Pasang", count: 1 },
    { id: "deep-cleaning", label: "Deep Cleaning", count: 1 }
  ];

  const filteredReviews = selectedCategory === "all" 
    ? reviews 
    : reviews.filter(review => 
        review.service.toLowerCase().includes(selectedCategory.replace("-", " "))
      );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2196F3] to-[#1565C0]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testimoni Pelanggan
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat apa kata mereka tentang layanan Dinasti AC Services
          </p>
        </div>
      </section>

      {/* Google Rating Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="text-6xl font-bold text-[#2196F3]">
                    {googleReviews.rating}
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {renderStars(5)}
                    </div>
                    <div className="text-[#64748B] text-sm">
                      {googleReviews.totalReviews} reviews on{" "}
                      <span className="font-semibold text-[#2196F3]">Google</span>
                    </div>
                  </div>
                </div>
                <button className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2 mx-auto md:mx-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Review us on Google
                </button>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#64748B]">Highlight Review</h3>
                </div>
                <p className="text-sm text-[#64748B]/70 mb-4">Berdasarkan {googleReviews.totalReviews} review Google</p>
                <div className="flex mb-4">
                  {renderStars(5)}
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#2196F3] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#64748B]">Respon cepat dan teknisi profesional</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#2196F3] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#64748B]">Harga transparan dengan garansi terpercaya</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#2196F3] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#64748B]">Sangat direkomendasikan untuk layanan AC terpercaya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64748B] mb-4">
              Review Berdasarkan Layanan
            </h2>
            <p className="text-lg text-[#64748B]/80 max-w-2xl mx-auto">
              Filter review berdasarkan jenis layanan yang Anda cari
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#2196F3] text-white shadow-lg"
                    : "bg-white text-[#64748B] hover:bg-[#E3F2FD] border border-[#E3F2FD]"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="h-4 bg-gray-300 rounded mb-2 w-20"></div>
                      <div className="h-3 bg-gray-300 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E3F2FD]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${review.name}&background=2196F3&color=fff&size=48`;
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-[#64748B]">{review.name}</h4>
                        {review.verified && (
                          <svg className="w-4 h-4 text-[#4285F4]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-xs text-[#64748B]/70">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#64748B]/80 text-sm leading-relaxed mb-4">
                    {review.text}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E3F2FD]">
                    <span className="text-xs bg-[#E3F2FD] text-[#2196F3] px-2 py-1 rounded-full">
                      {review.service}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#64748B]/70">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 01-2-2V4a2 2 0 012-2h2.5L10 4h4v4m-7 8v-2m0 0V4" />
                      </svg>
                      {review.helpful} helpful
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredReviews.length === 0 && !loading && (
            <div className="text-center py-12">
              <i className="bx bx-search text-6xl text-[#64748B]/50 mb-4"></i>
              <h3 className="text-xl font-bold text-[#64748B] mb-2">
                Tidak ada review untuk kategori ini
              </h3>
              <p className="text-[#64748B]/70">
                Coba pilih kategori lain atau lihat semua review
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#2196F3] to-[#1565C0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Pelanggan Puas Kami
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rasakan sendiri pelayanan berkualitas yang membuat ratusan pelanggan memberikan rating 5 bintang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDirectContact}
              className="bg-white text-[#2196F3] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Hubungi Kami Sekarang
            </button>
            <button
              onClick={handleDirectContact}
              className="border-2 border-white text-white hover:bg-white hover:text-[#2196F3] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
