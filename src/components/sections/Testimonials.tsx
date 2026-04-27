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
    name: 'Ana Silva',
    objective: 'Saí do sedentarismo e descobri meu potencial',
    content:
      'Quando comecei com o David, eu não acreditava que era capaz. Mas com paciência, dedicação e o método dele, consegui transformar minha vida. Hoje sou uma pessoa diferente!',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=10',
    duration: '3 meses de treinamento',
  },
  {
    name: 'Carlos Oliveira',
    objective: 'Ganhei massa muscular e confiança',
    content:
      'Quando comecei com o David, eu não acreditava que era capaz. Mas com paciência, dedicação e o método dele, consegui transformar minha vida. Hoje sou uma pessoa diferente!',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=11',
    duration: '6 meses de treinamento',
  },
  {
    name: 'Mariana Santos',
    objective: 'Perdi peso e melhorei minha saúde mental',
    content:
      'Quando comecei com o David, eu não acreditava que era capaz. Mas com paciência, dedicação e o método dele, consegui transformar minha vida. Hoje sou uma pessoa diferente!',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=12',
    duration: '4 meses de treinamento',
  },
  {
    name: 'João Costa',
    objective: 'Conquistei meu primeiro Muscle-up',
    content:
      'Quando comecei com o David, eu não acreditava que era capaz. Mas com paciência, dedicação e o método dele, consegui transformar minha vida. Hoje sou uma pessoa diferente!',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=13',
    duration: '8 meses de treinamento',
  },
  {
    name: 'Fernanda Lima',
    objective: 'Transformei meu corpo e minha vida',
    content:
      'Quando comecei com o David, eu não acreditava que era capaz. Mas com paciência, dedicação e o método dele, consegui transformar minha vida. Hoje sou uma pessoa diferente!',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=14',
    duration: '1 ano de treinamento',
  },
  {
    name: 'Pedro Alves',
    objective: 'Encontrei uma comunidade que me inspira',
    content:
      'Quando comecei com o David, eu não acreditava que era capaz. Mas com paciência, dedicação e o método dele, consegui transformar minha vida. Hoje sou uma pessoa diferente!',
    image: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=15',
    duration: '5 meses de treinamento',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-muted/30 border-y border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 mt-8">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Histórias de Alunos que Mudaram de Vida
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
              Transformações Reais
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={100} className="max-w-6xl mx-auto px-4 sm:px-12">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full pb-10">
            <CarouselContent className="-ml-4 pt-10">
              {testimonials.map((test, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white border-border/50 h-full hover:-translate-y-2 transition-transform duration-300 shadow-md">
                    <CardContent className="p-8 flex flex-col items-center text-center h-full relative mt-8">
                      <div className="absolute -top-12">
                        <img
                          src={test.image}
                          alt={test.name}
                          className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover bg-background"
                        />
                      </div>
                      <div className="mt-6 mb-2">
                        <h4 className="text-xl font-black text-primary uppercase">{test.name}</h4>
                        <p className="text-sm font-bold text-black/80 mt-1">{test.objective}</p>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-black/70 italic mb-6 text-sm leading-relaxed flex-1">
                        "{test.content}"
                      </p>
                      <div className="w-full pt-4 border-t border-black/10">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          {test.duration}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary text-white border-none hover:bg-primary/90 hidden sm:flex" />
            <CarouselNext className="bg-primary text-white border-none hover:bg-primary/90 hidden sm:flex" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  )
}
