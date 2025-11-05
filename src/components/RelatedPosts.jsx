import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Understanding Custody Agreements',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop',
    category: 'Custody'
  },
  {
    title: 'Preparing for Mediation: A Calm Approach',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop',
    category: 'Mediation'
  },
  {
    title: 'Financial Clarity During Divorce',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1974&auto=format&fit=crop',
    category: 'Finance'
  }
]

export default function RelatedPosts() {
  return (
    <section className="py-16 md:py-24 bg-[#F4FAFA]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0B7373]">Read Next</h3>
          <div className="mx-auto mt-3 h-1 w-12 bg-[#FF7A00] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="#"
              className="group rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] block"
            >
              <div className="relative h-56">
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-[#0B7373] text-white text-xs px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[#1E3D4A]">{post.title}</h4>
                <div className="mt-3 flex items-center gap-2 text-[#0B7373]">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
