import { FadeIn } from '@/components/FadeIn'
import { Instagram } from 'lucide-react'

export function Social() {
  return (
    <section id="redes-sociais" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Acompanhe Meu Trabalho
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Conteúdo, Dicas e Transformações
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={100} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { number: '+10 mil', label: 'Seguidores no Instagram' },
                { number: '+1 mil', label: 'Transformações de alunos' },
                { number: '12 anos', label: 'De experiência' },
                { number: '+3 mil', label: 'Alunos já treinados' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-card border border-border p-6 rounded-lg text-center hover:border-primary/50 transition-colors shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-black text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acompanhe conteúdo exclusivo, dicas de treinamento, nutrição e motivação diária no meu
              Instagram.
            </p>
          </FadeIn>

          <FadeIn
            delay={200}
            className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-8"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20Deadlift%20sem%20camisa.jpeg"
                  alt="David Fonseca Instagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <a
              href="https://www.instagram.com/davidfonsecacoach/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(238,1,29,0.4)] transition-all uppercase tracking-wide w-full max-w-sm"
            >
              <Instagram className="w-6 h-6" />
              Seguir no Instagram
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
