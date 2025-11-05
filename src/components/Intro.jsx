import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop"
              alt="Supportive legal consultation"
              className="w-full h-[320px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-[#E6F2F2] -z-10" aria-hidden="true" />
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0B7373] underline decoration-[#48A9A6] decoration-4 underline-offset-8">
                Here to steady the moment
              </h2>
              <p className="mt-4 text-[#1E3D4A] leading-[1.55]">
                Family transitions deserve both clarity and care. Our approach blends strategic advocacy with compassionate guidance—so you always know your options and feel supported in each decision.
              </p>
              <p className="mt-3 text-[#1E3D4A]/80 leading-[1.6]">
                Whether you’re navigating divorce, custody, or support, we focus on what matters most: your wellbeing and your family’s future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
