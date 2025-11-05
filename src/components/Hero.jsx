import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'

const gradientOverlay = {
  background: 'linear-gradient(180deg, rgba(11,115,115,0.65) 0%, rgba(11,115,115,0.35) 30%, rgba(11,115,115,0.10) 60%, rgba(11,115,115,0.00) 100%)'
}

export default function Hero() {
  return (
    <section className="relative w-full h-[72vh] min-h-[520px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1974&auto=format&fit=crop')",
          backgroundAttachment: 'fixed'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={gradientOverlay} aria-hidden="true" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-white tracking-tight font-medium leading-tight" style={{
            fontFamily: 'Manrope, ui-sans-serif, system-ui',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)'
          }}>
            Guidance with Heart. Advocacy with Strength.
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto" style={{
            fontFamily: 'Inter, ui-sans-serif, system-ui'
          }}>
            Family Law Matters is here to bring clarity, calm, and confidence to every step of your journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15555555555"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-white bg-[#FF7A00] shadow-[0_10px_20px_rgba(255,122,0,0.25)] hover:shadow-[0_14px_28px_rgba(255,122,0,0.35)] transition-all"
            >
              <Phone className="h-5 w-5" /> Call Us
            </a>
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-white bg-[#FF7A00]/90 hover:bg-[#FF7A00] shadow-[0_10px_20px_rgba(255,122,0,0.2)] hover:shadow-[0_14px_28px_rgba(255,122,0,0.35)] transition-all"
            >
              <Calendar className="h-5 w-5" /> Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 190" className="w-full h-[120px] md:h-[190px] block">
          <path
            fill="#F9F9F9"
            d="M0,160 C240,120 480,40 720,40 C960,40 1200,120 1440,160 L1440,220 L0,220 Z"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  )
}
