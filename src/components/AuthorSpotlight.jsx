export default function AuthorSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#E6F2F2] to-[#F4FAFA]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl p-6 md:p-10 bg-white/70 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Author portrait"
              className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow"
            />
            <span className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-[#0B7373] text-white grid place-items-center text-sm shadow">✧</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1E3D4A]">Ava Bennett, Esq.</h3>
            <p className="text-[#1E3D4A]/80 mt-1">Senior Family Law Attorney</p>
            <p className="mt-4 text-[#1E3D4A] leading-relaxed">
              Ava leads our team with a steady, compassionate approach—guiding clients through complex transitions with clarity and care. She believes every family deserves solutions that protect dignity and future wellbeing.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-1 w-10 bg-[#FF7A00] rounded-full" />
              <span className="text-[#0B7373] font-medium">Helping You Soar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
