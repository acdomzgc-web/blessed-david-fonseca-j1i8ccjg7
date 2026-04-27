import { FadeIn } from '@/components/FadeIn'
import { MapPin, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Locations() {
  return (
    <section id="unidades" className="py-24 bg-card border-y border-border">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Onde Você Pode Treinar Comigo
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Presencial e Online
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={100}>
            <Card className="bg-background border-border overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Unidade%20Cocares.jpeg"
                  alt="Cocares CrossFit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-black text-white uppercase mb-2">Cocares CrossFit</h4>
                <p className="text-muted-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Chapecó - SC
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  {[
                    'CrossFit',
                    'Ginástica',
                    'Levantamento de Peso Olímpico',
                    'Endurance',
                    'Cross Kids',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full font-bold text-white uppercase hover:scale-105 transition-transform"
                >
                  <a href="https://wa.me/5541987747373" target="_blank" rel="noreferrer">
                    Saiba Mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={200}>
            <Card className="bg-background border-border overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/OPEN26-57.jpg.jpeg"
                  alt="Treinamento Online"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full shadow-lg">
                  <Monitor className="w-5 h-5" />
                </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-black text-white uppercase mb-2">
                  Treinamento Online
                </h4>
                <p className="text-muted-foreground mb-6">Acesso de qualquer lugar</p>
                <div className="space-y-4 mb-8 flex-1">
                  {[
                    'Programas de Treinamento Funcional (base CrossFit)',
                    'Treino Híbrido (musculação + corridas)',
                    'Pacotes de Aulas Específicas (padrões de movimento)',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full font-bold text-white uppercase hover:scale-105 transition-transform"
                >
                  <a href="#servicos">Começar Agora</a>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
