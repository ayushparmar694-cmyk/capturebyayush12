import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Sparkles, Calendar, MapPin, Clock, Wallet, User, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  prefilledService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: prefilledService || 'Wedding Cinematography',
    eventDate: '',
    location: '',
    shootDuration: 'Full Day Coverage',
    budget: '₹25,000 - ₹50,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if prefilledService updates from other sections
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, eventType: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `🎬 *NEW SHOOT INQUIRY | CAPTURE BY AYUSH*
----------------------------------------
👤 *Name:* ${formData.name || 'Not specified'}
📞 *Phone:* ${formData.phone || 'Not specified'}
✨ *Event Type:* ${formData.eventType}
📅 *Event Date:* ${formData.eventDate || 'To be decided'}
📍 *Shoot Location:* ${formData.location || 'Nagpur / Not specified'}
⏱️ *Duration:* ${formData.shootDuration}
💰 *Estimated Budget:* ${formData.budget}
📝 *Creative Vision / Details:*
${formData.message || 'Looking forward to creating a cinematic film together!'}
----------------------------------------
_Sent via capturebyayush.com portfolio_`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const encodedMsg = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodedMsg}`;

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const rawText = `🎬 NEW SHOOT INQUIRY | CAPTURE BY AYUSH
Name: ${formData.name}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Date: ${formData.eventDate}
Location: ${formData.location}
Duration: ${formData.shootDuration}
Budget: ${formData.budget}
Message: ${formData.message}`;

    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="booking" className="relative py-28 sm:py-36 bg-[#0B0B0D] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D6B574]/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D6B574]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
            <span>Direct WhatsApp Booking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] font-light text-[#F5F5F5] uppercase">
            LET’S CREATE YOUR NEXT FILM.
          </h2>
          <p className="mt-4 text-xs sm:text-base font-sans text-white/60 tracking-wider uppercase font-light">
            Fill out your celebration details below. Your request will open directly in WhatsApp for an instant response.
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D6B574] to-transparent mx-auto mt-6" />
        </div>

        {/* Booking Form Card */}
        <div className="relative rounded-3xl bg-[#121214] border border-[#D6B574]/30 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                  <User className="w-3.5 h-3.5" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Event Type & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Event / Shoot Type</span>
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                >
                  <option value="Wedding Cinematography">01 – Wedding Cinematography</option>
                  <option value="Haldi & Mehendi">02 – Haldi & Mehendi</option>
                  <option value="Reception & Ring Ceremony">03 – Reception & Ring Ceremony</option>
                  <option value="iPhone Cinematic Videography">04 – iPhone Cinematic Videography</option>
                  <option value="Luxury Car Cinematics">05 – Luxury Car Cinematics</option>
                  <option value="Business & Shop Promotion">06 – Business & Shop Promotion</option>
                  <option value="Brand & Advertising Shoots">07 – Brand & Advertising Shoots</option>
                  <option value="Cinematic Reel Editing">08 – Cinematic Reel Editing</option>
                  <option value="Other Custom Project">Other Custom Project</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Event Date</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Location & Shoot Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Shoot Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Nagpur / Khaperkheda / Destination"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Shoot Duration</span>
                </label>
                <select
                  name="shootDuration"
                  value={formData.shootDuration}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                >
                  <option value="2-3 Hours Reel Shoot">2-3 Hours (Quick Reel & Stills)</option>
                  <option value="Half Day (4-5 Hours)">Half Day (4-5 Hours)</option>
                  <option value="Full Day Coverage (8-10 Hours)">Full Day Coverage (8-10 Hours)</option>
                  <option value="Multi-Day Wedding Celebration">Multi-Day Wedding Celebration (2-3 Days)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Budget Tier */}
            <div>
              <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                <Wallet className="w-3.5 h-3.5" />
                <span>Approximate Budget (INR)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  '₹10,000 - ₹25,000',
                  '₹25,000 - ₹50,000',
                  '₹50,000 - ₹1,00,000',
                  '₹1,00,000+ Luxury',
                ].map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setFormData((prev) => ({ ...prev, budget: tier }))}
                    className={`py-2.5 px-3 rounded-lg text-xs tracking-wider transition-all border ${
                      formData.budget === tier
                        ? 'border-[#D6B574] bg-[#D6B574]/20 text-[#D6B574] font-medium'
                        : 'border-white/10 bg-[#080808] text-white/60 hover:text-white'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Message */}
            <div>
              <label className="flex items-center space-x-2 text-xs font-sans tracking-[0.18em] uppercase text-[#D6B574] font-medium mb-2">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Tell Us Your Vision / Message</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Share your story, venue details, references, or any specific moments you want captured..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D6B574] transition-colors resize-none"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/50 text-center sm:text-left">
                Direct WhatsApp link: <span className="text-[#D6B574] font-mono">wa.me/91{BRAND_CONFIG.phone}</span>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="px-4 py-4 rounded-full border border-white/20 hover:border-[#D6B574] text-white/70 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors"
                  title="Copy details as plain text"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#D6B574] hover:bg-[#ECCB8E] text-[#080808] font-sans text-xs tracking-[0.25em] uppercase font-bold transition-all shadow-[0_0_25px_rgba(214,181,116,0.4)] hover:shadow-[0_0_35px_rgba(214,181,116,0.6)]"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST A BOOKING</span>
                </button>
              </div>
            </div>
          </form>

          {/* Submission Notice */}
          {submitted && (
            <div className="mt-6 p-4 rounded-xl bg-[#D6B574]/10 border border-[#D6B574]/40 flex items-center space-x-3 text-white text-xs animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-[#D6B574] shrink-0" />
              <div>
                <span className="font-semibold text-[#D6B574]">Opening WhatsApp...</span> If WhatsApp didn't open automatically,{' '}
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#D6B574] font-medium"
                >
                  click here to send your message
                </a>.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
