import Hero from './components/Hero'
import Intro from './components/Intro'
import BodyContent from './components/BodyContent'
import AuthorSpotlight from './components/AuthorSpotlight'
import RelatedPosts from './components/RelatedPosts'

function App() {
  return (
    <div className="bg-[#F9F9F9] text-[#1E3D4A]">
      <Hero />
      <Intro />
      <BodyContent />
      <AuthorSpotlight />
      <RelatedPosts />

      <footer className="relative bg-[#0B7373] text-white mt-10">
        <svg className="w-full -mt-10" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,96 C320,48 480,16 720,16 C960,16 1120,48 1440,96 L1440,0 L0,0 Z" fill="#0B7373" />
        </svg>
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <div className="rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(72,169,166,0.12),rgba(11,115,115,0.12)_60%,transparent_80%)] p-6 md:p-8">
            <p className="text-white/90">© {new Date().getFullYear()} Family Law Matters. Calm. Compassion. Confidence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
