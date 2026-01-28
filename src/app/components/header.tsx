"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Languages, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";

interface MenuItem {
  houses: string[];
  list: string[];
}

// Data Object for all your menus
const menuData: Record<string, MenuItem> = {
  "HOME DESIGN": {
    houses: [
      "Jasmin Villa",
      "Sky Villa",
      "Shophouse",
      "Custom Home",
      "Modern Villa",
      "Classic Villa",
    ],
    list: ["Shophouse", "Custom Home", "Sky Villa", "Jasmine Villa"],
  },
  PROJECT: {
    houses: ["Borey William North", "Borey William South", "The Riverside"],
    list: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
  },
  "UPDATE PACKAGES": {
    houses: ["Furniture Set A", "Garden Package", "Smart Home Kit"],
    list: ["Interior Design", "Landscaping", "Security"],
  },
  RETAILS: {
    houses: ["Community Mall", "Coffee Shop", "Gym Center"],
    list: ["Space Rental", "Partnerships", "Locations"],
  },
  NEWS: {
    houses: ["Grand Opening 2024", "New Project Launch", "Award Winning"],
    list: ["Events", "Press Release", "Blog"],
  },
  "ABOUT US": {
    houses: ["Our History", "The Team", "Our Vision"],
    list: ["Core Values", "Management", "Careers"],
  },
};

type MenuKey = keyof typeof menuData;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<MenuKey | null>(null);

  return (
    <div className="relative w-full" onMouseLeave={() => setActiveMenu(null)}>
      {/* --- HEADER BAR --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Left Side: Logo & Navigation */}
          <div className="flex gap-4 sm:gap-6 lg:gap-10 items-center h-full">
            {/* Logo - Responsive sizing */}
            <Image
              src="/images/logo.svg"
              alt="borey william"
              width={80}
              height={27}
              className="w-20 h-auto sm:w-24 lg:w-28 xl:w-32"
            />

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <nav className="hidden xl:flex flex-nowrap gap-4 2xl:gap-8 font-semibold h-full">
              {Object.keys(menuData).map((item) => (
                <button
                  key={item}
                  onMouseEnter={() => setActiveMenu(item as MenuKey)}
                  className={`cursor-pointer h-full flex items-center transition-all duration-200 border-b-2 text-xs 2xl:text-sm whitespace-nowrap px-1 ${
                    activeMenu === item
                      ? "text-amber-600 border-amber-600"
                      : "border-transparent text-gray-800 hover:text-amber-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side: Language & Contact - Desktop Only */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {/* LANGUAGE DROPDOWN */}
            <div 
              className="relative h-full flex items-center" 
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <div className="languages-option flex items-center gap-1 cursor-pointer hover:text-amber-600 transition-colors">
                <p className="font-semibold text-sm">EN</p>
                <Languages size={18} />
                <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </div>

              {isLangOpen && (
                <div className="absolute top-[90%] right-0 w-32 bg-white shadow-xl border border-gray-100 py-2 z-[60] rounded-sm">
                  <div className="flex flex-col">
                    <button className="px-4 py-2 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium text-left">English (EN)</button>
                    <button className="px-4 py-2 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium text-left">Khmer (KH)</button>
                    <button className="px-4 py-2 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium text-left">Chinese (CN)</button>
                  </div>
                </div>
              )}
            </div>
            
            {/* CONTACT DROPDOWN */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsContactOpen(true)}
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <button className="h-full flex gap-1 items-center bg-blue-900 px-4 py-2 text-white font-bold text-sm transition-all hover:bg-amber-600">
                CONTACT US <ArrowUpRight size={18} />
              </button>

              {isContactOpen && (
                <div className="absolute top-full right-0 w-80 bg-white shadow-2xl border-t-4 border-amber-600 z-[70]">
                  <div className="p-6 flex flex-col gap-6">
                    <h3 className="text-blue-900 font-black text-lg border-b pb-2">GET IN TOUCH</h3>

                    {/* Contact Options */}
                    {[
                      { icon: Phone, label: "Call Center", value: "+855 12 345 678" },
                      { icon: MessageCircle, label: "Telegram / WhatsApp", value: "Chat with Sales" },
                      { icon: Mail, label: "Email Us", value: "info@boreywilliam.com" },
                      { icon: MapPin, label: "Head Office", value: "Phnom Penh, Cambodia" },
                    ].map(({ icon: Icon, label, value }, idx) => (
                      <div key={idx} className="flex items-start gap-4 hover:bg-gray-50 p-2 transition-colors cursor-pointer group">
                        <div className="bg-gray-100 p-2 rounded-full text-gray-700 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">{label}</p>
                          <p className="text-sm font-bold text-gray-800">{value}</p>
                        </div>
                      </div>
                    ))}

                    <button className="w-full bg-blue-900 text-white py-3 font-bold text-xs tracking-widest hover:bg-amber-600 transition-colors mt-2">
                      BOOK A PROPERTY TOUR
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE & TABLET MENU --- */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-white z-50 overflow-y-auto no-scrollbar">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between shadow-sm">
            <Image
              src="/images/logo.svg"
              alt="borey william"
              width={100}
              height={33}
              className="w-24"
            />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-4 py-6">
            {/* Menu Items */}
            <div className="space-y-2 mb-8">
              {Object.keys(menuData).map((item) => (
                <div key={item} className="border-b border-gray-100">
                  <button
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === item ? null : item as MenuKey)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-bold text-base sm:text-lg text-blue-900">{item}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform ${expandedMobileMenu === item ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Expanded Content */}
                  {expandedMobileMenu === item && (
                    <div className="pb-4 pl-4 space-y-4">
                      {/* Houses Grid - Responsive */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {menuData[item].houses.map((house, idx) => (
                          <div
                            key={idx}
                            className="border border-gray-200 p-3 hover:border-amber-600 transition-colors"
                          >
                            <div className="h-20 bg-white mb-2 flex items-center justify-center">
                              <img
                                src="/images/logo.svg"
                                alt="house"
                                className="w-24"
                              />
                            </div>
                            <p className="font-semibold text-xs text-blue-950">{house}</p>
                            <p className="underline text-amber-700 text-[10px] mt-1 cursor-pointer">
                              Learn More
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Quick Links */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-400 uppercase text-[10px] tracking-widest font-bold mb-3">
                          Explore {item}
                        </p>
                        <div className="space-y-2">
                          {menuData[item].list.map((link, idx) => (
                            <button
                              key={idx}
                              className="block text-sm text-gray-700 hover:text-amber-600 transition-colors"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Language Selection */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="font-bold text-blue-900 mb-3 text-sm">Language</p>
              <div className="grid grid-cols-3 gap-2">
                {['English (EN)', 'Khmer (KH)', 'Chinese (CN)'].map((lang) => (
                  <button
                    key={lang}
                    className="px-3 py-2 border border-gray-300 rounded hover:border-amber-600 hover:text-amber-600 transition-colors text-xs sm:text-sm font-medium"
                  >
                    {lang.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <p className="font-bold text-blue-900 mb-4 text-sm">Contact Information</p>
              
              {[
                { icon: Phone, label: "Call Center", value: "+855 12 345 678" },
                { icon: MessageCircle, label: "Telegram / WhatsApp", value: "Chat with Sales" },
                { icon: Mail, label: "Email Us", value: "info@boreywilliam.com" },
                { icon: MapPin, label: "Head Office", value: "Phnom Penh, Cambodia" },
              ].map(({ icon: Icon, label, value }, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="bg-blue-900 p-2 rounded-full text-white flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{label}</p>
                    <p className="text-sm font-bold text-gray-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-blue-900 text-white py-4 font-bold text-sm tracking-wide hover:bg-amber-600 transition-colors rounded-lg">
              BOOK A PROPERTY TOUR
            </button>
          </div>
        </div>
      )}

      {/* --- DESKTOP DROPDOWN MENU --- */}
      {activeMenu && !isMobileMenuOpen && (
        <div className="hidden xl:block dropdown-menu w-full absolute top-full left-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
          <div className="container mx-auto px-8 py-12">
            <div className="flex flex-row justify-center gap-12">
              {/* Houses Grid */}
              <div className="grid grid-cols-3 gap-6 max-h-[430px] overflow-y-auto pr-4 no-scrollbar">
                {menuData[activeMenu].houses.map((house, idx) => (
                  <div
                    key={idx}
                    className="house flex flex-col border border-gray-100 w-[200px] p-4 hover:border-gray-400 hover:shadow-lg transition-all"
                  >
                    <div className="h-32 bg-white mb-2 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/logo.svg"
                        alt="house"
                        className="w-24"
                      />
                    </div>
                    <p className="font-semibold text-blue-950">{house}</p>
                    <p className="underline text-amber-700 text-xs mt-1 cursor-pointer hover:text-amber-800">
                      Learn More
                    </p>
                  </div>
                ))}
              </div>

              {/* Vertical Divider */}
              <div className="w-[1.5px] bg-amber-600 self-stretch opacity-40" />

              {/* Quick Links */}
              <div className="flex flex-col gap-4 min-w-[180px]">
                <h3 className="text-gray-400 uppercase text-[10px] tracking-widest font-black mb-2">
                  Explore {activeMenu}
                </h3>
                {menuData[activeMenu].list.map((link, idx) => (
                  <button
                    key={idx}
                    className="hover:text-amber-600 cursor-pointer font-medium text-gray-700 transition-colors text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}