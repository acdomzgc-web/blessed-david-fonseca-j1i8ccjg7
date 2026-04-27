import { FadeIn } from '@/components/FadeIn'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Almeida',
    role: 'Atleta Amador',
    content:
      'O David mudou completamente minha visão sobre treinamento. Consegui atingir marcas que nunca imaginei no LPO graças à técnica impecável dele.',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
  },
  {
    name: 'Fernanda Costa',
    role: 'Aluna Personal',
    content:
      'Treinar com o Coach David é garantia de suor e resultados. Ele respeita meus limites, mas sempre me puxa para dar aquele 1% a mais.',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
  },
  {
    name: 'Rafael Mendes',
    role: 'Empresário',
    content:
      'Com a rotina corrida, achava que não conseguiria treinar bem. A consultoria online foi a salvação e os treinos são direto ao ponto.',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
  },
  {
    name: 'Juliana Silva',
    role: 'Aluna CrossFit',
    content:
      'As aulas são incríveis. O cuidado que ele tem com a técnica de cada aluno na turma cheia é impressionante. Recomendo de olhos fechados.',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=4',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-card border-y border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Resultados Reais
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
              O que dizem os alunos
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={100} className="max-w-5xl mx-auto px-12 sm:px-16">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((test, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="bg-background border-border h-full">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-8 text-lg leading-relaxed">
                          "{test.content}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={test.image}
                          alt={test.name}
                          className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-white">{test.name}</h4>
                          <p className="text-xs text-muted-foreground">{test.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-secondary text-white border-none hover:bg-primary hover:text-white" />
            <CarouselNext className="bg-secondary text-white border-none hover:bg-primary hover:text-white" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  )
}
