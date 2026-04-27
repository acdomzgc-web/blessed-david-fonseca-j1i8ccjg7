import { FadeIn } from '@/components/FadeIn'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Consultoria Online',
    desc: 'Treinamento presencial não é uma opção? Onde você estiver, tenha meu acompanhamento.',
    features: [
      'Planilha semanal via App',
      'Análise de vídeos dos movimentos',
      'Suporte no WhatsApp',
      'Ajuste de cargas',
    ],
    popular: false,
    link: 'https://wa.me/5541987747373?text=Olá, quero saber mais sobre a Consultoria Online.',
  },
  {
    title: 'Personal Training',
    desc: 'Acompanhamento 100% individual e presencial para maximizar seus resultados com segurança.',
    features: [
      'Avaliação Física',
      'Treinos específicos',
      'Correção em tempo real',
      'Foco em alta performance',
    ],
    popular: true,
    link: 'https://wa.me/5541987747373?text=Olá, quero saber mais sobre o Personal Training.',
  },
  {
    title: 'CrossFit Group',
    desc: 'Aulas guiadas em turma, promovendo energia, comunidade e condicionamento geral.',
    features: [
      'Turmas reduzidas',
      'Coach dedicado',
      'Workouts variados (WODs)',
      'Ambiente motivador',
    ],
    popular: false,
    link: 'https://wa.me/5541987747373?text=Olá, quero saber mais sobre as aulas de CrossFit.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Planos
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Nossos Serviços
            </h3>
            <p className="text-muted-foreground text-lg">
              Escolha a modalidade que melhor se adapta à sua rotina e aos seus objetivos.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100} className="flex">
              <Card
                className={`relative flex flex-col w-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 ${service.popular ? 'border-primary ring-1 ring-primary' : ''}`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Mais Procurado
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-black uppercase text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full font-bold"
                    variant={service.popular ? 'default' : 'secondary'}
                  >
                    <a href={service.link} target="_blank" rel="noreferrer">
                      Contratar Plano
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
