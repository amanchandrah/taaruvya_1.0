"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, Menu, X, Award, Users, Star } from "lucide-react";

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="https://ucarecdn.com/4779c259-0e8b-4d77-b6aa-de4bd3910a6a/-/format/auto/" 
                alt="Taaruvya Logo" 
                className="h-10 w-auto"
              />
              <div className="font-montserrat font-bold text-xl text-[#2F5233]">Taaruvya Enterprises</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="font-montserrat font-semibold text-sm text-[#2F5233] hover:text-[#1a2e1c] transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#2F5233] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-montserrat font-semibold text-sm text-[#666666] hover:text-[#2F5233] transition-colors duration-200 relative group"
              >
                About
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#2F5233] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="font-montserrat font-semibold text-sm text-[#666666] hover:text-[#2F5233] transition-colors duration-200 relative group"
              >
                Team
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#2F5233] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
              <button
                onClick={() => scrollToSection('awards')}
                className="font-montserrat font-semibold text-sm text-[#666666] hover:text-[#2F5233] transition-colors duration-200 relative group"
              >
                Awards
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#2F5233] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="font-montserrat font-semibold text-sm text-[#666666] hover:text-[#2F5233] transition-colors duration-200 relative group"
              >
                Products
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#2F5233] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#2F5233] hover:bg-[#1a2e1c] active:bg-[#0f1a10] text-white font-montserrat font-semibold text-sm px-6 py-2 rounded-full transition-colors duration-200"
              >
                Get in touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="font-montserrat font-semibold text-xs tracking-widest flex flex-col items-center space-y-1 hover:opacity-70 active:opacity-50 transition-opacity duration-200"
              >
                <span className="text-[#2F5233]">MENU</span>
                <div className="w-6 h-px bg-[#2F5233]"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://ucarecdn.com/4779c259-0e8b-4d77-b6aa-de4bd3910a6a/-/format/auto/" 
                    alt="Taaruvya Logo" 
                    className="h-8 w-auto"
                  />
                  <div className="font-montserrat font-bold text-lg text-[#2F5233]">Taaruvya</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:opacity-70 active:opacity-50 transition-opacity duration-200"
                >
                  <X size={24} className="text-[#2F5233]" />
                </button>
              </div>
              <div className="space-y-6">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block font-montserrat font-semibold text-2xl text-[#2F5233] hover:text-[#1a2e1c] active:text-[#0f1a10] transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block font-montserrat font-semibold text-2xl text-[#666666] hover:text-[#2F5233] active:text-[#1a2e1c] transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="block font-montserrat font-semibold text-2xl text-[#666666] hover:text-[#2F5233] active:text-[#1a2e1c] transition-colors duration-200"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection('awards')}
                  className="block font-montserrat font-semibold text-2xl text-[#666666] hover:text-[#2F5233] active:text-[#1a2e1c] transition-colors duration-200"
                >
                  Awards
                </button>
                <button
                  onClick={() => scrollToSection('products')}
                  className="block font-montserrat font-semibold text-2xl text-[#666666] hover:text-[#2F5233] active:text-[#1a2e1c] transition-colors duration-200"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#2F5233] hover:bg-[#1a2e1c] active:bg-[#0f1a10] text-white font-montserrat font-semibold text-sm px-6 py-2 rounded-full mt-8 transition-colors duration-200"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-24 bg-gradient-to-br from-[#f8fdf9] to-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile/Tablet: Stacked Layout */}
          <div className="lg:hidden">
            {/* Hero Image - Mobile First */}
            <div className="mb-8 sm:mb-12">
              <div className="relative mx-auto w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]">
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-white shadow-2xl">
                  <img
                    src="https://ucarecdn.com/6c88086d-b7fe-4642-8295-708fadeee3ef/-/format/auto/"
                    alt="Panda Scoop Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center sm:text-left space-y-8">
              {/* Eyebrow */}
              <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase">
                — WELCOME TO
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="font-montserrat font-black text-4xl sm:text-5xl leading-[0.9] text-[#2F5233]">
                  Taaruvya
                </h1>
                <p className="font-montserrat font-bold text-xl sm:text-2xl text-[#666666]">
                  Presents Panda Scoop
                </p>
              </div>

              {/* Support Copy */}
              <div className="max-w-[320px] mx-auto sm:mx-0">
                <p className="font-montserrat text-lg text-[#222222] leading-relaxed">
                  It's Bamboolicious!
                  <br />
                  Award-winning premium
                  <br />
                  desserts and ice cream
                </p>
              </div>

              {/* CTA Tile */}
              <div className="flex justify-center sm:justify-start">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="group w-12 h-12 bg-[#D4F5E6] hover:bg-[#c0f0dd] active:bg-[#b5e8d1] rounded-xl flex items-center justify-center transition-all duration-200"
                >
                  <ArrowUpRight
                    size={20}
                    className="text-[#2F5233] group-hover:rotate-45 transition-transform duration-200"
                  />
                </button>
              </div>

              {/* Achievement Block - Mobile */}
              <div className="pt-4 space-y-4 text-center sm:text-left">
                <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase">
                  — OUR ACHIEVEMENT
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#2F5233]">
                  Grand Finale Winner
                </h3>
                <p className="font-montserrat text-[#666666]">
                  FKCCI Innovation & Business Plan Presentation 2024
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection('awards')}
                    className="group inline-flex items-center font-montserrat font-semibold text-sm text-[#2F5233] hover:text-[#1a2e1c] active:text-[#0f1a10] underline hover:no-underline transition-colors duration-200"
                  >
                    <span>View Awards</span>
                    <ArrowRight
                      size={16}
                      className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
                    />
                  </button>
                </div>
              </div>

              {/* Quality Promise */}
              <div className="pt-8">
                <p className="font-montserrat text-[#8B8B8B] text-center sm:text-left">
                  Crafted with{" "}
                  <span className="font-semibold text-[#2F5233]">
                    premium ingredients
                  </span>{" "}
                  and love
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Three-column Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* Eyebrow */}
                <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase">
                  — WELCOME TO
                </div>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="font-montserrat font-black text-6xl leading-[0.9] text-[#2F5233]">
                    Taaruvya
                  </h1>
                  <p className="font-montserrat font-bold text-3xl text-[#666666]">
                    Presents Panda Scoop
                  </p>
                </div>

                {/* Support Copy */}
                <div className="max-w-[320px]">
                  <p className="font-montserrat text-lg text-[#222222] leading-relaxed">
                    It's Bamboolicious!
                    <br />
                    Award-winning premium
                    <br />
                    desserts and ice cream
                  </p>
                </div>

                {/* CTA Tile */}
                <div className="flex items-start">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="group w-12 h-12 bg-[#D4F5E6] hover:bg-[#c0f0dd] active:bg-[#b5e8d1] rounded-xl flex items-center justify-center transition-all duration-200"
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-[#2F5233] group-hover:rotate-45 transition-transform duration-200"
                    />
                  </button>
                </div>

                {/* Quality Promise */}
                <div className="pt-8">
                  <p className="font-montserrat text-[#8B8B8B]">
                    Crafted with{" "}
                    <span className="font-semibold text-[#2F5233]">
                      premium ingredients
                    </span>{" "}
                    and love
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-[450px] h-[450px]">
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-white shadow-2xl">
                  <img
                    src="https://ucarecdn.com/6c88086d-b7fe-4642-8295-708fadeee3ef/-/format/auto/"
                    alt="Panda Scoop Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3 relative">
              {/* Vertical Divider */}
              <div className="absolute left-0 top-0 w-px h-full bg-[#E5E5E5]"></div>

              <div className="pl-12">
                {/* Achievement Block */}
                <div className="space-y-4">
                  {/* Eyebrow */}
                  <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase">
                    — OUR ACHIEVEMENT
                  </div>

                  {/* Achievement Title */}
                  <h3 className="font-montserrat font-bold text-2xl text-[#2F5233]">
                    Grand Finale Winner
                  </h3>

                  {/* Award Details */}
                  <p className="font-montserrat text-[#666666]">
                    FKCCI Innovation & Business Plan Presentation 2024
                  </p>

                  {/* View Awards Link */}
                  <div className="pt-2">
                    <button
                      onClick={() => scrollToSection('awards')}
                      className="group inline-flex items-center font-montserrat font-semibold text-sm text-[#2F5233] hover:text-[#1a2e1c] active:text-[#0f1a10] underline hover:no-underline transition-colors duration-200"
                    >
                      <span>View Awards</span>
                      <ArrowRight
                        size={16}
                        className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase">
                — ABOUT US
              </div>
              <h2 className="font-montserrat font-black text-4xl lg:text-5xl leading-tight text-[#2F5233]">
                Innovation in Every Scoop
              </h2>
              <p className="font-montserrat text-lg text-[#666666] leading-relaxed">
                Taaruvya is committed to revolutionizing the dessert industry through innovative products and sustainable practices. Our flagship brand, Panda Scoop, represents our dedication to creating bamboolicious experiences that delight customers while staying true to our values of quality and innovation.
              </p>
              <p className="font-montserrat text-lg text-[#666666] leading-relaxed">
                From our award-winning business plan to our premium product offerings, we're building a brand that stands for excellence, creativity, and the joy of exceptional desserts.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-[#2F5233]">2024</div>
                  <div className="font-montserrat text-sm text-[#666666]">Founded</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-[#2F5233]">Award</div>
                  <div className="font-montserrat text-sm text-[#666666]">Winning</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-[#2F5233]">Premium</div>
                  <div className="font-montserrat text-sm text-[#666666]">Quality</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-[#f8fdf9] to-[#D4F5E6] p-8 rounded-2xl">
                <img
                  src="https://ucarecdn.com/4779c259-0e8b-4d77-b6aa-de4bd3910a6a/-/format/auto/"
                  alt="Taaruvya Logo"
                  className="w-full max-w-[300px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24 bg-[#f8fdf9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase mb-4">
              — OUR TEAM
            </div>
            <h2 className="font-montserrat font-black text-4xl lg:text-5xl leading-tight text-[#2F5233] mb-6">
              The Minds Behind Taaruvya
            </h2>
            <p className="font-montserrat text-lg text-[#666666] max-w-2xl mx-auto">
              Meet our passionate team of innovators who are dedicated to bringing you the finest dessert experiences and building a brand that makes a difference.
            </p>
          </div>

          <div className="space-y-12">
            {/* Main Team Photo */}
            <div className="relative">
             <img
  src="https://ucarecdn.com/bfe66f4a-61f8-49a6-86d8-361b4fec70a7/-/format/auto/ "
  alt="Taaruvya Team"
  className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg border-4 border-[#2F5233]"
/>
            </div>

            {/* Team Presentation Photo */}
            {/* <div className="relative">
              <img
                src="https://ucarecdn.com/4fccca5d-760c-4543-b17c-2753b948083d/-/format/auto/"
                alt="Team with Products"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
              />
            </div> */}

            {/* Team Values */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#D4F5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#2F5233]" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">Collaborative</h3>
                <p className="font-montserrat text-[#666666]">Working together to bring innovative ideas to life</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#D4F5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#2F5233]" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">Excellence</h3>
                <p className="font-montserrat text-[#666666]">Committed to delivering award-winning quality</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#D4F5E6] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="text-[#2F5233]" size={24} />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">Passionate</h3>
                <p className="font-montserrat text-[#666666]">Driven by passion for creating exceptional experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase mb-4">
              — RECOGNITION
            </div>
            <h2 className="font-montserrat font-black text-4xl lg:text-5xl leading-tight text-[#2F5233] mb-6">
              Awards & Achievements
            </h2>
            <p className="font-montserrat text-lg text-[#666666] max-w-2xl mx-auto">
              Our commitment to excellence has been recognized at the highest levels of business innovation and entrepreneurship.
            </p>
          </div>

          <div className="space-y-12">
            {/* Award Ceremony Images */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <img
                  src="https://ucarecdn.com/2df49ec7-8cee-45c9-ad7c-4cd83c33ade2/-/format/auto/"
                  alt="Award Ceremony"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="text-center lg:text-left">
                  <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">
                    FKCCI Innovation Awards
                  </h3>
                  <p className="font-montserrat text-[#666666]">
                    Recognized for outstanding innovation and business excellence
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <img
                  src="https://ucarecdn.com/f8a6d490-36a2-41f7-bf92-fe7c9e9c1e84/-/format/auto/"
                  alt="Team Presenting"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="text-center lg:text-left">
                  <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">
                    Business Plan Presentation
                  </h3>
                  <p className="font-montserrat text-[#666666]">
                    Successfully presented our innovative business model
                  </p>
                </div>
              </div>
            </div>

            {/* More Award Images */}
            <div className="grid lg:grid-cols-2 gap-8">
              <img
                src="https://ucarecdn.com/6c422eee-7d38-4f77-ac73-5b1dc71ebcdb/-/format/auto/"
                alt="Award Certificate"
                className="w-full rounded-2xl shadow-lg"
              />
              <img
                src="https://ucarecdn.com/43ac3726-66f2-4538-a4d2-6ea0dcb8fa4e/-/format/auto/"
                alt="Award Presentation"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Main Award Image */}
            <div className="relative">
              <img
                src="https://ucarecdn.com/01ccec77-7349-4f8f-a009-abc49b8c7f9a/-/format/auto/"
                alt="Grand Finale Award Ceremony"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-montserrat font-bold text-2xl mb-2">
                  Grand Finale Winner 2024
                </h3>
                <p className="font-montserrat text-lg opacity-90">
                  FKCCI Innovation & Business Plan Competition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 lg:py-24 bg-[#f8fdf9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-[#8B8B8B] uppercase mb-4">
              — OUR PRODUCTS
            </div>
            <h2 className="font-montserrat font-black text-4xl lg:text-5xl leading-tight text-[#2F5233] mb-6">
              Panda Scoop Collection
            </h2>
            <p className="font-montserrat text-lg text-[#666666] max-w-2xl mx-auto">
              Discover our bamboolicious range of premium desserts and ice creams, crafted with the finest ingredients and innovative flavors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-[#D4F5E6] rounded-xl mb-6 flex items-center justify-center">
                <img
                  src="https://ucarecdn.com/6c88086d-b7fe-4642-8295-708fadeee3ef/-/format/auto/"
                  alt="Panda Scoop Product"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">
                Premium Ice Cream
              </h3>
              <p className="font-montserrat text-[#666666] mb-4">
                Rich, creamy, and made with natural ingredients for the perfect bamboolicious experience.
              </p>
              <div className="font-montserrat font-semibold text-[#2F5233]">
                It's Bamboolicious!
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-[#D4F5E6] rounded-xl mb-6 flex items-center justify-center">
                <img
                  src="https://ucarecdn.com/6c88086d-b7fe-4642-8295-708fadeee3ef/-/format/auto/"
                  alt="Panda Scoop Dessert"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">
                Gourmet Desserts
              </h3>
              <p className="font-montserrat text-[#666666] mb-4">
                Artisanal desserts crafted with premium ingredients and innovative flavor combinations.
              </p>
              <div className="font-montserrat font-semibold text-[#2F5233]">
                Award-Winning Idea
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="aspect-square bg-[#D4F5E6] rounded-xl mb-6 flex items-center justify-center">
                <img
                  src="https://ucarecdn.com/6c88086d-b7fe-4642-8295-708fadeee3ef/-/format/auto/"
                  alt="Panda Scoop Special"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[#2F5233] mb-2">
                Specialty Flavors
              </h3>
              <p className="font-montserrat text-[#666666] mb-4">
                Unique and innovative flavors that represent our commitment to culinary excellence.
              </p>
              <div className="font-montserrat font-semibold text-[#2F5233]">
                Innovation in Every Bite
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-[#2F5233]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-montserrat font-semibold text-xs tracking-[0.2em] text-white/60 uppercase mb-4">
              — GET IN TOUCH
            </div>
            <h2 className="font-montserrat font-black text-4xl lg:text-5xl leading-tight text-white mb-6">
              Ready to Experience
              <br />
              Bamboolicious?
            </h2>
            <p className="font-montserrat text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Connect with us to learn more about our products, partnerships, or to experience the Panda Scoop difference firsthand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button className="bg-white hover:bg-gray-100 active:bg-gray-200 text-[#2F5233] font-montserrat font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                Contact Us
              </button>
              <button className="border-2 border-white/20 hover:border-white/40 active:border-white/60 text-white font-montserrat font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                Learn More
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <img
                  src="https://ucarecdn.com/b99a654e-eae7-4164-904e-5daaa9f96f90/-/format/auto/"
                  alt="Taaruvya Logo"
                  className="h-8 w-auto"
                />
                <div className="font-montserrat font-bold text-xl text-white">Taaruvya</div>
              </div>
              <p className="font-montserrat text-white/60 text-sm">
                © 2024 Taaruvya. Crafting bamboolicious experiences with love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Animation for fade-in and slide up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section > div {
          animation: fadeInUp 0.4s ease-out;
        }

        /* Focus styles for accessibility */
        button:focus,
        a:focus {
          outline: 2px solid #2F5233;
          outline-offset: 2px;
        }

        /* Hover effects for images */
        img {
          transition: transform 0.3s ease-out;
        }

        img:hover {
          transform: scale(1.02);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #2F5233;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #1a2e1c;
        }
      `}</style>
    </div>
  );
}


