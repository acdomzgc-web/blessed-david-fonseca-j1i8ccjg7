import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section id="quem-e-david" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background/50 to-transparent hidden lg:block" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="up" className="order-1 lg:order-1">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border shadow-2xl">
              <img
                src="https://storage.googleapis.com/skip-app-prod.firebasestorage.app/o/c%2Fa52b-d3f49195a037%2F1745330376174-8d9e68d0-e14b-4b2a-84d4-c8cba382fec3.jpeg?alt=media&token=1d015c7e-85bb-432a-bc93-b605ab5fb3d0"
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

          <div className="flex flex-col justify-center order-2 lg:order-2">
            <FadeIn delay={100}>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Quem é David
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                A história por trás <br /> do treinador.
              </h3>
            </FadeIn>

            <FadeIn delay={200} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                David Fonseca - Coach de CrossFit e Personal Trainer. Tenho dedicado a minha vida a
                transformar a vida de pessoas por meio da saúde, do treinamento físico e mental. Com
                uma vasta experiência atuando com atletas de elite e alunos buscando qualidade de
                vida, construí o método BLESSED fundamentado na constância e no trabalho duro.
              </p>
              <p>
                Acredito fortemente que o seu corpo é a sua principal ferramenta e precisa ser
                forjado para enfrentar os desafios do dia a dia com excelência. Aqui não tem
                atalhos, temos transpiração, foco e dedicação diária. Se você quer de fato
                transformar a sua vida, vem comigo!
              </p>

              <div className="py-6">
                <blockquote className="text-primary text-2xl md:text-3xl font-black uppercase italic tracking-tighter">
                  "A Palavra convence, o exemplo arrasta."
                </blockquote>
              </div>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider"
                >
                  <a href="#servicos">Conhecer Meus Serviços</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
