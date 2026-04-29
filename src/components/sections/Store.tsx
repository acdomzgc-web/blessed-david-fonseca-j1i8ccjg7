import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'
import { ShoppingBag, ArrowRight } from 'lucide-react'

const tshirtImages = [
  'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/camiseta_01.jpg.jpeg',
  'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/camiseta_02.jpg.jpeg',
  'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/camiseta_03.jpg.jpeg',
  'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/camiseta_04.jpg.jpeg',
]

export function Store() {
  const waLink = `https://wa.me/5541987747373?text=${encodeURIComponent('Olá David! Gostaria de comprar a nova Camiseta Blessed.')}`

  return (
    <section id="loja" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <img
          src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Logo%20Blessed%20Branco.png"
          alt="Blessed Logo Background"
          className="w-[800px] max-w-none object-contain"
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4" />
              <span>Loja Oficial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Lançamento <span className="text-primary">Blessed</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Garanta já a sua camiseta exclusiva e leve a energia Blessed para o seu treino.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Section */}
          <FadeIn>
            <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>
              <video
                src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/video%20360%20camiseta.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                <div className="text-white font-black text-3xl uppercase mb-2 drop-shadow-md">
                  Visão 360º
                </div>
                <p className="text-zinc-300 text-base drop-shadow-md">
                  Caimento perfeito para máxima performance e mobilidade em qualquer WOD.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Product Details & Images */}
          <FadeIn delay={200} className="space-y-8 flex flex-col justify-center h-full">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-2">
                Camiseta Blessed Classic
              </h3>
              <div className="text-primary text-3xl font-black mb-4">R$ 99,90</div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Desenvolvida com tecido de alta tecnologia para garantir respirabilidade e conforto
                máximo durante seus treinos mais intensos. Design exclusivo, material premium e
                tiragem limitada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tshirtImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group"
                >
                  <img
                    src={img}
                    alt={`Camiseta Blessed ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-black py-8 text-lg uppercase tracking-widest mt-4"
            >
              <a href={waLink} target="_blank" rel="noreferrer">
                Garantir a Minha <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
