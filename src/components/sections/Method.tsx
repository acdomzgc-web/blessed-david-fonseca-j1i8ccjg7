import { FadeIn } from '@/components/FadeIn'
import { Dumbbell, HeartPulse, Activity } from 'lucide-react'

const methods = [
  {
    icon: Dumbbell,
    title: 'Força Funcional',
    desc: 'Construa uma base sólida através de levantamento de peso e movimentos ginásticos que se traduzem para a vida real.',
  },
  {
    icon: HeartPulse,
    title: 'Condicionamento',
    desc: 'Melhore sua capacidade cardiovascular e resistência com treinos de alta intensidade e volume inteligente.',
  },
  {
    icon: Activity,
    title: 'Mobilidade & Prevenção',
    desc: 'Trabalhe a amplitude de movimento e saúde articular para treinar pesado hoje e continuar treinando amanhã.',
  },
]

export function Method() {
  return (
    <section id="metodo" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Filosofia
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              O Método <span className="text-primary">BLESSED</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Uma abordagem equilibrada e fundamentada na ciência do esporte para garantir evolução
              constante e sustentável.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-colors h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors group-hover:scale-110 duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
