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

const packages = [
  {
    title: '1º Ring Muscle-up',
    subtitle: 'Pacote 4 Aulas',
    desc: 'Domine o Ring Muscle-up com técnica e segurança',
    image:
      'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20RMU.jpeg',
    features: [
      '4 aulas focadas',
      'Progressão técnica',
      'Padrão de movimento avançado',
      'Suporte personalizado',
    ],
    price: 'R$ 397,00',
  },
  {
    title: '1º Bar Muscle-up',
    subtitle: 'Pacote 4 Aulas',
    desc: 'Conquiste seu primeiro Bar Muscle-up',
    image:
      'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20BMU.jpeg',
    features: [
      '4 aulas focadas',
      'Progressão técnica',
      'Padrão de movimento avançado',
      'Suporte personalizado',
    ],
    price: 'R$ 397,00',
  },
  {
    title: 'Snatch de Invejar',
    subtitle: 'Pacote 4 Aulas',
    desc: 'Domine o Snatch com técnica olímpica',
    image:
      'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20Snatch%20West%20Cup.JPG.jpeg',
    features: ['4 aulas focadas', 'Técnica olímpica', 'Força e explosão', 'Suporte personalizado'],
    price: 'R$ 397,00',
  },
  {
    title: 'Double Under Fácil',
    subtitle: 'Pacote 4 Aulas',
    desc: 'Domine o Double Under sem dificuldade',
    image: 'https://img.usecurling.com/p/600/400?q=athlete%20jumping%20rope',
    features: [
      '4 aulas focadas',
      'Técnica de corda',
      'Ritmo e coordenação',
      'Suporte personalizado',
    ],
    price: 'R$ 397,00',
  },
  {
    title: 'Apenas Peso Corporal',
    subtitle: 'Pacote 10 Treinos',
    desc: 'Treine em casa com eficácia máxima',
    image:
      'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20HSW.jpeg',
    features: [
      '10 treinos completos',
      'Sem equipamento necessário',
      'Progressão garantida',
      'Acesso online',
    ],
    price: 'R$ 497,00',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Meus Serviços e Pacotes
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
              Escolha o Pacote Ideal para Você
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
          {packages.map((pkg, i) => {
            const message = `Olá David! Gostaria de contratar o pacote ${pkg.subtitle} - ${pkg.title}. Pode me passar mais informações?`
            const waLink = `https://wa.me/5541987747373?text=${encodeURIComponent(message)}`

            return (
              <FadeIn
                key={i}
                delay={i * 100}
                className={`flex w-full ${i === 3 ? 'lg:col-start-1 lg:col-end-2 lg:translate-x-1/2' : ''} ${i === 4 ? 'lg:col-start-2 lg:col-end-3 lg:translate-x-1/2' : ''}`}
              >
                <Card className="relative flex flex-col w-full bg-white border border-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {pkg.subtitle}
                    </div>
                    <CardTitle className="text-2xl font-black uppercase text-primary">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-black/70 font-medium mt-2">
                      {pkg.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-black">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex-col gap-4 items-start">
                    <div className="text-3xl font-black text-primary w-full text-center py-2 border-t border-border/50">
                      {pkg.price}
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold text-md py-6 bg-primary hover:bg-primary/90 text-white"
                    >
                      <a href={waLink} target="_blank" rel="noreferrer">
                        Quero Este Pacote
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
