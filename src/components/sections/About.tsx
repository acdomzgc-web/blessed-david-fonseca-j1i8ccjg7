import { FadeIn } from '@/components/FadeIn'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent hidden lg:block" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="up">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-border">
              <img
                src="https://img.usecurling.com/p/800/1000?q=crossfit%20coach&color=black"
                alt="David Fonseca Coach"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary font-black text-2xl uppercase mb-1">BLESSED.</p>
                <p className="text-white text-sm font-medium">
                  Liderando com propósito e disciplina.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col justify-center">
            <FadeIn delay={100}>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Quem é David
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Mais que um <br /> treinador.
              </h3>
            </FadeIn>

            <FadeIn delay={200} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Com anos de experiência no cenário do CrossFit competitivo e atuando como Personal
                Trainer de alto rendimento, minha missão é extrair o máximo do seu potencial físico
                e mental.
              </p>
              <p>
                Acredito que o treinamento não é apenas sobre estética, mas sobre construir um corpo
                resiliente, capaz de enfrentar os desafios do dia a dia com vigor e saúde. O método{' '}
                <strong>BLESSED</strong> nasceu da paixão por transformar suor em resultados reais.
              </p>
              <div className="pt-4 border-t border-border mt-4">
                <blockquote className="text-white italic font-medium border-l-4 border-primary pl-4 py-1">
                  "A disciplina é a ponte entre seus objetivos e suas realizações."
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
