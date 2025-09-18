"use client";
import { useState } from "react";
import { Sparkles, Star, Menu, X, ArrowRight, ArrowUpRight, ChefHat, Leaf, Coffee, Zap, Users, Award, Mail } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chikkamagaluru Coffee",
    description:
      "Rich coffee flavored ice cream with authentic Chikkamagaluru coffee beans",
    image:
      "https://ucarecdn.com/5ee0d376-4bd7-429a-99fe-6e5608bf86df/-/format/auto/",
    color: "from-amber-900/20 to-yellow-600/20",
  },
  {
    id: 2,
    name: "Coastal Kokum",
    description:
      "Tangy and refreshing kokum ice cream from the coastal regions",
    image:
      "https://ucarecdn.com/687f30a6-51ee-49c9-a24d-05e86c976c44/-/format/auto/",
    color: "from-pink-600/20 to-red-500/20",
  },
  {
    id: 3,
    name: "Mysore Paan",
    description:
      "Traditional paan flavored ice cream made with finest Mysore betel leaves",
    image:
      "https://ucarecdn.com/5947468a-6bc2-4164-8ef5-b1db71a701ac/-/format/auto/",
    color: "from-green-500/20 to-emerald-600/20",
  },
  {
    id: 4,
    name: "Malnad Jackfruit",
    description:
      "Sweet and tropical jackfruit ice cream from the Malnad regions",
    image:
      "https://ucarecdn.com/e52c6f2e-8a8a-4e5c-afd7-e32221837941/-/format/auto/",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 5,
    name: "Desi Guava",
    description: "Fresh and fruity guava ice cream with authentic desi flavors",
    image:
      "https://ucarecdn.com/d66c39d4-7cfb-47f5-9fe9-3d2aa8cd4098/-/format/auto/",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 6,
    name: "Coorg Cardamom",
    description: "Aromatic cardamom ice cream made with finest Coorg cardamom",
    image:
      "https://ucarecdn.com/68b39e7d-b7a4-479b-a3cc-90afb1510779/-/format/auto/",
    color: "from-green-600/20 to-lime-500/20",
  },
];

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavScroll = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a1a0d] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-[#0a1a0d]/95 via-[#1a2e1c]/95 to-[#0a1a0d]/95 backdrop-blur-2xl z-50 border-b-2 border-gradient-to-r from-[#2F5233] via-[#A8E6A3] to-[#2F5233] shadow-2xl shadow-[#2F5233]/20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Enhanced Logo Section */}
            <div className="flex-shrink-0 flex items-center space-x-6">
              <div className="relative group">
                {/* Glowing background effect for logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F5233] to-[#A8E6A3] rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border-2 border-[#A8E6A3]/30 group-hover:border-[#A8E6A3] transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src="https://ucarecdn.com/be82d09c-68a8-4b9f-b994-6403bd0bc048/-/format/auto/"
                    alt="Taaruvya Logo"
                    className="h-14 lg:h-16 w-auto"
                  />
                </div>
              </div>

              {/* Enhanced Brand Text */}
              <div className="space-y-1">
                <div className="font-montserrat font-black text-3xl lg:text-4xl bg-gradient-to-r from-[#A8E6A3] via-white to-[#A8E6A3] bg-clip-text text-transparent">
                  Taaruvya
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#A8E6A3] animate-pulse" />
                  <span className="font-montserrat text-sm text-[#A8E6A3] font-semibold tracking-wide">
                    PREMIUM DESSERTS
                  </span>
                  <Star className="w-4 h-4 text-[#A8E6A3] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {["home", "about", "products", "team", "awards"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavScroll(item)}
                  className="relative font-montserrat font-bold text-lg text-white/90 hover:text-[#A8E6A3] transition-all duration-300 group py-2 px-4"
                >
                  <span className="relative z-10 tracking-wide">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  {/* Enhanced hover effects */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2F5233]/20 to-[#A8E6A3]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-[#2F5233] via-[#A8E6A3] to-[#2F5233] transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                  {/* Sparkle effect on hover */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#A8E6A3] rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Enhanced Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavScroll("contact")}
                className="relative overflow-hidden bg-gradient-to-r from-[#2F5233] via-[#4a7c59] to-[#A8E6A3] hover:from-[#A8E6A3] hover:via-[#4a7c59] hover:to-[#2F5233] text-white font-montserrat font-black text-lg px-10 py-4 rounded-2xl transition-all duration-500 shadow-2xl shadow-[#2F5233]/30 hover:shadow-[#A8E6A3]/30 transform hover:scale-110 hover:rotate-1 border-2 border-[#A8E6A3]/30 hover:border-[#A8E6A3]"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Get in Touch</span>
                  <Star className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 skew-x-12"></div>
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A8E6A3] to-[#2F5233] opacity-0 hover:opacity-30 blur-lg transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-4 bg-gradient-to-r from-[#2F5233]/20 to-[#A8E6A3]/20 hover:from-[#2F5233]/40 hover:to-[#A8E6A3]/40 rounded-xl transition-all duration-300 border-2 border-[#A8E6A3]/30 hover:border-[#A8E6A3] transform hover:scale-110"
              >
                <Menu size={28} className="text-[#A8E6A3]" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gradient-to-br from-[#0a1a0d]/98 via-[#1a2e1c]/98 to-[#0a1a0d]/98 backdrop-blur-3xl z-50">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                >
                  <div className="w-3 h-3 bg-[#A8E6A3] rounded-full blur-sm"></div>
                </div>
              ))}
            </div>

            <div className="relative z-10 p-8">
              <div className="flex justify-between items-center mb-16">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2F5233] to-[#A8E6A3] rounded-xl blur-lg opacity-60 scale-110"></div>
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border-2 border-[#A8E6A3]">
                      <img
                        src="https://ucarecdn.com/be82d09c-68a8-4b9f-b994-6403bd0bc048/-/format/auto/"
                        alt="Taaruvya Logo"
                        className="h-12 w-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-montserrat font-black text-2xl bg-gradient-to-r from-[#A8E6A3] to-white bg-clip-text text-transparent">
                      Taaruvya
                    </div>
                    <div className="flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-[#A8E6A3]" />
                      <span className="font-montserrat text-xs text-[#A8E6A3] font-semibold">
                        PREMIUM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-gradient-to-r from-[#2F5233]/20 to-[#A8E6A3]/20 hover:from-[#2F5233]/40 hover:to-[#A8E6A3]/40 rounded-xl border-2 border-[#A8E6A3]/30 hover:border-[#A8E6A3] transition-all duration-300"
                >
                  <X size={28} className="text-[#A8E6A3]" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-6">
                {["home", "about", "products", "team", "awards", "contact"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => handleNavScroll(item)}
                      className="block w-full text-left group relative overflow-hidden bg-gradient-to-r from-white/5 to-[#A8E6A3]/10 hover:from-[#2F5233]/20 hover:to-[#A8E6A3]/20 rounded-2xl p-6 border-2 border-white/10 hover:border-[#A8E6A3]/50 transition-all duration-500 transform hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: `slideInFromLeft 0.6s ease-out forwards`,
                      }}
                    >
                      <span className="font-montserrat font-black text-2xl text-white/90 group-hover:text-[#A8E6A3] transition-colors duration-300 tracking-wide flex items-center space-x-3">
                        <Sparkles className="w-6 h-6 text-[#A8E6A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span>
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#A8E6A3]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0d] via-[#1a2e1c] to-[#0a1a0d]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2F5233]/20 via-transparent to-transparent"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                <div className="w-2 h-2 bg-[#2F5233] rounded-full blur-sm"></div>
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Content */}
              <div className="space-y-12 text-center lg:text-left">
                {/* Premium Badge */}
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full backdrop-blur-sm">
                    <Sparkles className="w-5 h-5 text-[#A8E6A3] mr-3" />
                    <span className="font-montserrat font-bold text-base text-white tracking-wider">
                      PREMIUM ICE CREAM EXPERIENCE
                    </span>
                  </div>
                </div>

                {/* Smaller Taaruvya Logo */}
                {/* <div className="flex justify-center lg:justify-start">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 w-fit">
                    <img
                      src="https://ucarecdn.com/be82d09c-68a8-4b9f-b994-6403bd0bc048/-/format/auto/"
                      alt="Taaruvya Logo"
                      className="h-12 sm:h-14 lg:h-16 w-auto"
                    />
                  </div>
                </div> */}

                {/* Main Title Structure: Taaruvya presents, Panda Scoop */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="font-montserrat text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
                      Taaruvya presents
                    </p>
                    <h1 className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white whitespace-nowrap">
                      Panda Scoop
                    </h1>
                  </div>

                  <div className="relative">
                    <p className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A8E6A3]">
                      It's Bamboolicious!
                    </p>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#A8E6A3] rounded-full animate-ping"></div>
                  </div>

                  <p className="font-montserrat text-lg sm:text-xl lg:text-2xl text-white/90 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Award-winning premium desserts crafted with authentic Indian
                    flavors
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                  <button
                    onClick={() => scrollToSection("products")}
                    className="group relative overflow-hidden bg-gradient-to-r from-[#2F5233] to-[#4a7c59] text-white font-montserrat font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Explore Flavors
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                  </button>

                  <button
                    onClick={() => scrollToSection("about")}
                    className="group border-2 border-white text-white hover:bg-white hover:text-[#2F5233] font-montserrat font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="flex items-center justify-center">
                      Our Story
                      <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="font-montserrat font-black text-3xl lg:text-4xl text-[#A8E6A3] mb-1">
                      6+
                    </div>
                    <div className="font-montserrat text-sm text-white/80">
                      Unique Flavors
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="font-montserrat font-black text-3xl lg:text-4xl text-[#A8E6A3] mb-1">
                      100%
                    </div>
                    <div className="font-montserrat text-sm text-white/80">
                      Natural
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="font-montserrat font-black text-3xl lg:text-4xl text-[#A8E6A3] mb-1">
                      2024
                    </div>
                    <div className="font-montserrat text-sm text-white/80">
                      Award Winner
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Hero Images */}
              <div className="relative space-y-8">
                {/* Main Ice Cream Image */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                  <div className="relative w-[90vw] max-w-[700px] mx-auto translate-x-0">
                    <img
                      src="https://ucarecdn.com/dea3a679-4ab2-4e86-a9cc-1aea0c0620f7/-/format/auto/ "
                      alt="Panda Scoop Premium Ice Cream Collection"
                      className="w-full h-auto max-h-[75vh] object-contain rounded-3xl shadow-2xl bg-gradient-to-br from-[#1a2e1c]/30 to-[#0a1a0d]/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0d]/20 to-transparent rounded-3xl pointer-events-none"></div>
                  </div>
                </div>
                {/* Bigger Panda Scoop Logo - Now the Main Focus */}
                <div className="flex justify-center">
                  <div className="relative transform hover:scale-105 transition-transform duration-700">
                    <img
                      src="https://ucarecdn.com/b1ab567e-9efe-4e3c-830c-6b53919ebf07/-/format/auto/"
                      alt="Panda Scoop Logo"
                      className="h-32 sm:h-40 lg:h-48 xl:h-56 w-auto drop-shadow-2xl"
                    />
                    {/* Enhanced glow effect for main logo */}
                    <div className="absolute inset-0 bg-[#4a7c59]/30 rounded-full blur-2xl scale-110 animate-pulse"></div>
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-150 animate-pulse"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#2F5233] to-[#4a7c59] rounded-full animate-pulse opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#4a7c59] to-[#2F5233] rounded-full animate-bounce opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#1a2e1c] to-[#0a1a0d]"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#2F5233]/20 border border-[#2F5233]/30 rounded-full backdrop-blur-sm mb-6">
                <ChefHat className="w-4 h-4 text-[#A8E6A3] mr-2" />
                <span className="font-montserrat font-semibold text-sm text-[#A8E6A3] tracking-wide">
                  OUR SIGNATURE COLLECTION
                </span>
              </div>

              <h2 className="font-montserrat font-black text-4xl lg:text-6xl text-white mb-6">
                Bamboolicious <span className="text-[#A8E6A3]">Flavors</span>
              </h2>

              <p className="font-montserrat text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Discover our premium collection of authentic Indian flavors,
                crafted with the finest ingredients from different regions of
                India. Each scoop tells a story of tradition and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-gradient-to-br from-[#1a2e1c]/50 to-[#0a1a0d]/50 backdrop-blur-sm border border-[#2F5233]/20 rounded-3xl p-6 hover:border-[#2F5233]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#2F5233]/10"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    <div className="h-[300px] sm:h-[350px] lg:h-[400px] mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2F5233]/10 to-[#4a7c59]/10">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-montserrat font-bold text-xl text-white group-hover:text-[#A8E6A3] transition-colors duration-300">
                        {product.name}
                      </h3>

                      <p className="font-montserrat text-white/70 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <span className="font-montserrat font-bold text-[#A8E6A3]">
                          Premium Quality
                        </span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F5233]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative overflow-hidden bg-gradient-to-r from-[#2F5233] to-[#4a7c59] hover:from-[#4a7c59] hover:to-[#2F5233] text-white font-montserrat font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#2F5233]/25 hover:shadow-2xl transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Order Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e1c] to-[#0a1a0d]"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#2F5233]/20 border border-[#2F5233]/30 rounded-full backdrop-blur-sm">
                  <Leaf className="w-4 h-4 text-[#A8E6A3] mr-2" />
                  <span className="font-montserrat font-semibold text-sm text-[#A8E6A3] tracking-wide">
                    ABOUT TAARUVYA
                  </span>
                </div>

                <h2 className="font-montserrat font-black text-4xl lg:text-5xl text-white leading-tight">
                  Innovation in Every{" "}
                  <span className="text-[#A8E6A3]">Scoop</span>
                </h2>

                <div className="space-y-6 text-white/80 font-montserrat text-lg leading-relaxed">
                  <p>
                    Taaruvya is revolutionizing the dessert industry through
                    innovative products and sustainable practices. Our flagship
                    brand, Panda Scoop, represents our dedication to creating
                    bamboolicious experiences.
                  </p>

                  <p>
                    From our award-winning business plan to our premium product
                    offerings, we're building a brand that stands for
                    excellence, creativity, and the joy of exceptional desserts
                    made from authentic Indian ingredients.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center p-4 bg-[#2F5233]/10 rounded-2xl backdrop-blur-sm border border-[#2F5233]/20">
                    <div className="font-montserrat font-black text-2xl text-[#A8E6A3]">
                      2024
                    </div>
                    <div className="font-montserrat text-sm text-white/60">
                      Founded
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#2F5233]/10 rounded-2xl backdrop-blur-sm border border-[#2F5233]/20">
                    <div className="font-montserrat font-black text-2xl text-[#A8E6A3]">
                      Award
                    </div>
                    <div className="font-montserrat text-sm text-white/60">
                      Winning
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#2F5233]/10 rounded-2xl backdrop-blur-sm border border-[#2F5233]/20">
                    <div className="font-montserrat font-black text-2xl text-[#A8E6A3]">
                      Premium
                    </div>
                    <div className="font-montserrat text-sm text-white/60">
                      Quality
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                    <div className="flex flex-col items-center space-y-4">
                      <img
                        src="https://ucarecdn.com/be82d09c-68a8-4b9f-b994-6403bd0bc048/-/format/auto/"
                        alt="Taaruvya Logo"
                        className="w-full max-w-[200px] mx-auto"
                      />
                      <h3 className="font-montserrat font-black text-3xl lg:text-4xl text-[#2F5233] tracking-wide">
                        TAARUVYA
                      </h3>
                      <p className="font-montserrat text-lg text-[#2F5233]/70 text-center">
                        Innovation in Desserts
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl"></div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#2F5233] to-[#4a7c59] rounded-full flex items-center justify-center animate-bounce">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#4a7c59] to-[#2F5233] rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#1a2e1c] to-[#0a1a0d]"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#2F5233]/20 border border-[#2F5233]/30 rounded-full backdrop-blur-sm mb-6">
                <Users className="w-4 h-4 text-[#A8E6A3] mr-2" />
                <span className="font-montserrat font-semibold text-sm text-[#A8E6A3] tracking-wide">
                  OUR AMAZING TEAM
                </span>
              </div>

              <h2 className="font-montserrat font-black text-4xl lg:text-6xl text-white mb-6">
                The Minds Behind{" "}
                <span className="text-[#A8E6A3]">Taaruvya</span>
              </h2>

              <p className="font-montserrat text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Meet our passionate team of innovators who are dedicated to
                bringing you the finest dessert experiences and building a brand
                that makes a difference.
              </p>
            </div>

            <div className="space-y-12">
              {/* Team Photo */}
              <div className="relative group">
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-700">
                  <img
                    src="https://ucarecdn.com/4fccca5d-760c-4543-b17c-2753b948083d/-/format/auto/"
                    alt="Taaruvya Team"
                    className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0d]/30 to-transparent rounded-3xl"></div>
                </div>
              </div>

              {/* Team Values */}
              <div className="grid md:grid-cols-3 gap-8 mt-20">
                <div className="group text-center p-8 bg-gradient-to-br from-[#1a2e1c]/50 to-[#0a1a0d]/50 backdrop-blur-sm border border-[#2F5233]/20 rounded-3xl hover:border-[#2F5233]/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F5233] to-[#4a7c59] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Users className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4 group-hover:text-[#A8E6A3] transition-colors duration-300">
                    Collaborative
                  </h3>
                  <p className="font-montserrat text-white/70 leading-relaxed">
                    Working together to bring innovative ideas to life and
                    create exceptional experiences
                  </p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-[#1a2e1c]/50 to-[#0a1a0d]/50 backdrop-blur-sm border border-[#2F5233]/20 rounded-3xl hover:border-[#2F5233]/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F5233] to-[#4a7c59] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Award className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4 group-hover:text-[#A8E6A3] transition-colors duration-300">
                    Excellence
                  </h3>
                  <p className="font-montserrat text-white/70 leading-relaxed">
                    Committed to delivering award-winning quality in every
                    product we create
                  </p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-[#1a2e1c]/50 to-[#0a1a0d]/50 backdrop-blur-sm border border-[#2F5233]/20 rounded-3xl hover:border-[#2F5233]/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F5233] to-[#4a7c59] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Star className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4 group-hover:text-[#A8E6A3] transition-colors duration-300">
                    Passionate
                  </h3>
                  <p className="font-montserrat text-white/70 leading-relaxed">
                    Driven by passion for creating exceptional experiences that
                    delight our customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-20 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e1c] to-[#0a1a0d]"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#2F5233]/20 border border-[#2F5233]/30 rounded-full backdrop-blur-sm mb-6">
                <Award className="w-4 h-4 text-[#A8E6A3] mr-2" />
                <span className="font-montserrat font-semibold text-sm text-[#A8E6A3] tracking-wide">
                  RECOGNITION & ACHIEVEMENTS
                </span>
              </div>

              <h2 className="font-montserrat font-black text-4xl lg:text-6xl text-white mb-6">
                Awards & <span className="text-[#A8E6A3]">Achievements</span>
              </h2>

              <p className="font-montserrat text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Our commitment to excellence has been recognized at the highest
                levels of business innovation and entrepreneurship.
              </p>
            </div>

            <div className="space-y-12">
              {/* Award Images Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="group space-y-6">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src="https://ucarecdn.com/2df49ec7-8cee-45c9-ad7c-4cd83c33ade2/-/format/auto/"
                      alt="FKCCI Award Ceremony"
                      className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0d]/50 to-transparent rounded-3xl"></div>
                  </div>
                  <div className="text-center lg:text-left space-y-3">
                    <h3 className="font-montserrat font-bold text-2xl text-white">
                      FKCCI Innovation Awards
                    </h3>
                    <p className="font-montserrat text-white/70 leading-relaxed">
                      Recognized for outstanding innovation and business excellence
                      in the dessert industry
                    </p>
                  </div>
                </div>

                <div className="group space-y-6">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src="https://ucarecdn.com/f8a6d490-36a2-41f7-bf92-fe7c9e9c1e84/-/format/auto/"
                      alt="Business Plan Presentation"
                      className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0d]/50 to-transparent rounded-3xl"></div>
                  </div>
                  <div className="text-center lg:text-left space-y-3">
                    <h3 className="font-montserrat font-bold text-2xl text-white">
                      Business Plan Presentation
                    </h3>
                    <p className="font-montserrat text-white/70 leading-relaxed">
                      Successfully presented our innovative business model to
                      industry experts
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Award Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="https://ucarecdn.com/01ccec77-7349-4f8f-a009-abc49b8c7f9a/-/format/auto/"
                    alt="Grand Finale Award Ceremony"
                    className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0d]/80 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-12 left-12 text-white space-y-4">
                    <h3 className="font-montserrat font-black text-4xl">
                      Grand Finale Winner 2024
                    </h3>
                    <p className="font-montserrat text-xl opacity-90 max-w-lg">
                      FKCCI Innovation & Business Plan Competition
                    </p>
                    <div className="inline-flex items-center px-6 py-3 bg-[#2F5233] rounded-full">
                      <Award className="w-5 h-5 text-white mr-2" />
                      <span className="font-montserrat font-bold text-white">
                        Winner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#2F5233] to-[#0a1a0d]"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-white mr-2" />
                <span className="font-montserrat font-semibold text-sm text-white tracking-wide">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-montserrat font-black text-4xl lg:text-6xl text-white mb-8 leading-tight">
                Ready to Experience
                <br />
                <span className="text-white">Bamboolicious?</span>
              </h2>

              <p className="font-montserrat text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
                Connect with us to learn more about our products, partnerships,
                or to experience the Panda Scoop difference firsthand.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto mb-16">
                <button className="group relative overflow-hidden bg-white text-[#0a1a0d] hover:bg-white/90 font-montserrat font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-[#0a1a0d] font-montserrat font-bold px-10 py-4 rounded-full transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    Learn More
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </button>
              </div>

              {/* Email Contact Section */}
              <div className="mb-16">
                <h3 className="font-montserrat font-bold text-2xl text-white mb-8">
                  Contact Us Directly
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* Taaruvya Email */}
                  <a
                    href="mailto:taaruvya@gmail.com"
                    className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-[#2F5233] rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-white mb-2">
                      Taaruvya Business
                    </h4>
                    <p className="font-montserrat text-[#A8E6A3] font-semibold group-hover:underline">
                      taaruvya@gmail.com
                    </p>
                    <p className="font-montserrat text-white/60 text-sm mt-2">
                      General inquiries & partnerships
                    </p>
                  </a>

                  {/* Panda Scoop Email */}
                  <a
                    href="mailto:thepandascoop@gmail.com"
                    className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-[#2F5233] rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="font-montserrat font-bold text-lg text-white mb-2">
                      Panda Scoop
                    </h4>
                    <p className="font-montserrat text-[#A8E6A3] font-semibold group-hover:underline">
                      thepandascoop@gmail.com
                    </p>
                    <p className="font-montserrat text-white/60 text-sm mt-2">
                      Product info & orders
                    </p>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-white/20 pt-12">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <img
                    src="https://ucarecdn.com/be82d09c-68a8-4b9f-b994-6403bd0bc048/-/format/auto/"
                    alt="Taaruvya Logo"
                    className="h-10 w-auto"
                  />
                  <div className="font-montserrat font-black text-2xl text-white">
                    Taaruvya
                  </div>
                </div>
                <p className="font-montserrat text-white/60">
                  © 2024 Taaruvya. Crafting bamboolicious experiences with love.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap");

        * {
          box-sizing: border-box;
        }

        .font-montserrat {
          font-family: "Montserrat", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #0a1a0d;
        }

        /* Custom Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(47, 82, 51, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(47, 82, 51, 0.6);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }

        /* Hover effects */
        .hover-3d {
          transition: all 0.3s ease;
          transform-style: preserve-3d;
        }

        .hover-3d:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(-10deg)
            rotateZ(2deg);
        }

        /* Glass morphism */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0a1a0d;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #2f5233, #4a7c59);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4a7c59, #2f5233);
        }

        /* Focus styles */
        button:focus,
        a:focus {
          outline: 2px solid #2f5233;
          outline-offset: 2px;
        }

        /* Responsive animations */
        @media (max-width: 768px) {
          .animate-float {
            animation-duration: 4s;
          }
        }

        /* Performance optimizations */
        * {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}


