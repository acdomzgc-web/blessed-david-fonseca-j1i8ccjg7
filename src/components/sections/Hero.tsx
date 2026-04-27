import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/FadeIn'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=crossfit%20athlete%20lifting%20heavy&color=black"
          alt="Coach David Fonseca in action"
          className="w-full h-full object-cover opacity-50 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs md:text-sm font-semibold mb-6 border border-primary/30 tracking-wide uppercase">
              Coach David Fonseca | CrossFit | Personal Trainer | Atleta Elite
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1.05] mb-6 text-white drop-shadow-sm">
              Transforme <br /> sua vida com{' '}
              <span className="text-primary inline-block mt-2">treinamento funcional</span>
            </h1>
          </FadeIn>

          <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              size="lg"
              asChild
              className="text-base h-14 px-8 font-bold shadow-lg shadow-primary/20"
            >
              <a href="#servicos">Começar Agora</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base h-14 px-8 font-bold border-2 border-primary text-white hover:bg-primary/10"
            >
              <a href="#quem-e-david">Conheça o Método</a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
