import { FadeIn } from '@/components/FadeIn'
import { Dumbbell, Activity, HeartPulse, Users } from 'lucide-react'

const methods = [
  {
    icon: Activity,
    title: 'Funcional',
    desc: 'Movimentos que se aplicam na vida real, preparando você para qualquer desafio diário com eficiência e segurança.',
  },
  {
    icon: Dumbbell,
    title: 'Força',
    desc: 'Desenvolvimento muscular progressivo. Base sólida construída através de levantamentos essenciais.',
  },
  {
    icon: HeartPulse,
    title: 'Resistência',
    desc: 'Condicionamento cardiovascular. Melhorando a sua capacidade aeróbica e anaeróbica.',
  },
  {
    icon: Users,
    title: 'Comunidade',
    desc: 'Suporte e motivação constante. Treinar ao lado de quem compartilha dos mesmos propósitos.',
  },
]

export function Method() {
  return (
    <section id="metodo" className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Meu Método de Treinamento
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                Híbrido, Funcional e <br />
                <span className="text-primary">Extremamente Eficaz</span>
              </h3>
            </FadeIn>
          </div>
          <FadeIn className="w-full lg:w-[400px]">
            <div className="aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden border border-border shadow-2xl relative group">
              <img
                src="https://storage.googleapis.com/skip-app-prod.firebasestorage.app/o/c%2Fa52b-d3f49195a037%2F1745331003446-f9ba32cc-c30f-48e0-bb12-07a829141098.jpeg?alt=media&token=81ccfce0-dc36-410a-b2aa-4f2430349479"
                alt="Deadlift Competição"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((item, i) => (
            <FadeIn key={i} delay={i * 100} className="h-full">
              <div className="group bg-card border border-border p-8 rounded-xl hover:border-primary transition-all duration-300 h-full flex flex-col items-center text-center hover:shadow-[0_0_30px_-5px_rgba(230,57,70,0.3)] hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
