import { Lightbulb, Quote } from 'lucide-react'

function PullQuote({ children }) {
  return (
    <blockquote className="relative my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#E6F2F2] to-[#F4FAFA] text-[#1E3D4A] italic shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0B7373] rounded-l-3xl" aria-hidden="true" />
      <div className="flex items-start gap-3">
        <Quote className="h-6 w-6 text-[#0B7373] mt-1" />
        <p className="leading-relaxed">{children}</p>
      </div>
    </blockquote>
  )
}

function KeyTakeaways({ items }) {
  return (
    <div className="my-12 p-6 md:p-8 rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#E6F2F2]">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="h-5 w-5 text-[#0B7373]" />
        <h3 className="text-xl md:text-2xl font-bold text-[#1E3D4A]">Key Takeaways</h3>
      </div>
      <ul className="space-y-3 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#0B7373] flex-shrink-0" />
            <p className="text-[#1E3D4A]/90 leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BodyContent() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 prose prose-lg prose-invert-0">
        <h2 className="text-[clamp(1.4rem,3.2vw,2.2rem)] text-[#0B7373] underline decoration-[#48A9A6] decoration-4 underline-offset-8 not-prose">
          Understanding the path ahead
        </h2>
        <p className="mt-4 text-[#1E3D4A] leading-[1.6] max-w-none">
          The best outcomes begin with informed choices. In family law, each situation is unique, but certain principles help ground the process: respect, clarity, and steady advocacy.
        </p>

        <h3 className="mt-10 text-[clamp(1.1rem,2.4vw,1.6rem)] font-bold text-[#1E3D4A] not-prose">
          What to expect in your first consultation
        </h3>
        <p className="mt-3 text-[#1E3D4A]/90 leading-[1.65]">
          We’ll listen first—then outline clear next steps. You’ll leave with a practical roadmap and resources to help you make calm, confident decisions.
        </p>

        <PullQuote>
          You deserve a process that preserves dignity while protecting what matters most.
        </PullQuote>

        <KeyTakeaways
          items={[
            'Clarity on your rights and options',
            'A tailored plan that aligns with your values',
            'Transparent timelines and expected milestones',
            'Supportive resources for emotional and practical needs'
          ]}
        />
      </div>
    </section>
  )
}
