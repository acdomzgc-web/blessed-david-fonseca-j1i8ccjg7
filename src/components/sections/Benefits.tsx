import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/ui/button'

const benefitsList = [
  { title: 'Saúde Física', desc: 'Força, resistência, flexibilidade e longevidade' },
  { title: 'Saúde Mental', desc: 'Redução de ansiedade, depressão e estresse' },
  { title: 'Confiança', desc: 'Autoestima elevada e segurança em si mesmo' },
  { title: 'Disciplina', desc: 'Hábitos saudáveis que transformam sua vida' },
  { title: 'Comunidade', desc: 'Conexão com pessoas que compartilham seus objetivos' },
  { title: 'Propósito', desc: 'Sensação de evolução constante e realização pessoal' },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border shadow-2xl relative z-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/skip-app-prod.firebasestorage.app/o/c%2Fa52b-d3f49195a037%2F1745331003447-06df483b-31d6-44ec-b8ad-303de11f0c29.jpeg?alt=media&token=24bd9036-7c01-4475-926c-d2c1da0afc96"
                alt="Treinamento Mudando Vidas"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://img.usecurling.com/p/800/1000?q=gymnastics%20ring%20dip'
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-0" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-0" />
          </FadeIn>

          <FadeIn className="order-1 lg:order-2" delay={100}>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Exercício Físico Muda Sua Realidade
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
              Transformação Física, Mental e Emocional
            </h3>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O exercício físico não é apenas sobre ganhar músculos ou perder peso. É sobre
                redescobrir seu potencial, sua força interior e sua capacidade de transformar sua
                vida.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando você treina com consistência e dedicação, você não muda apenas seu corpo.
                Você muda sua mentalidade, sua confiança, sua saúde mental e sua relação com você
                mesmo.
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-lg font-bold text-white uppercase mb-6 tracking-wide">
                Benefícios que você vai experimentar:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefitsList.map((item, i) => (
                  <li
                    key={i}
                    className="bg-card border border-border p-4 rounded-lg hover:border-primary/50 transition-colors shadow-sm"
                  >
                    <span className="block font-bold text-white mb-1 uppercase text-sm">
                      {item.title}
                    </span>
                    <span className="text-sm text-muted-foreground leading-snug block">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-l-4 border-primary bg-primary/5 mb-10 rounded-r-lg">
              <p className="text-xl font-medium text-white italic leading-relaxed">
                "Cada treino é um passo em direção a uma versão melhor de você. E eu estou aqui para
                guiar você nessa jornada."
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto font-black uppercase tracking-widest hover:scale-105 transition-transform text-white bg-primary hover:bg-primary/90"
            >
              <a href="#servicos">Começar Minha Transformação</a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
