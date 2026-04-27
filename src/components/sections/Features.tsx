import { FadeIn } from '@/components/FadeIn'
import { CheckCircle2, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const benefits = [
  'Atenção 100% personalizada aos seus objetivos.',
  'Uso de equipamentos de elite e infraestrutura premium.',
  'Periodização exclusiva de treinamentos.',
  'Acompanhamento de métricas e evolução.',
  'Foco em prevenção de lesões e longevidade.',
  'Comunidade engajada e ambiente motivador.',
]

const locations = [
  { name: 'Unidade Centro', address: 'Rua das Flores, 123 - Curitiba, PR' },
  { name: 'Unidade Batel', address: 'Av. do Batel, 456 - Curitiba, PR' },
]

const certifications = [
  'CrossFit Level 1',
  'CrossFit Level 2',
  'Bacharel Educação Física',
  'LPO Specialist',
  'Gymnastics Certified',
]

export function Features() {
  return (
    <section id="beneficios" className="py-24 bg-card border-y border-border">
      <div className="container">
        {/* Certifications Row */}
        <div id="certificacoes" className="mb-24 text-center">
          <FadeIn>
            <h4 className="text-sm font-bold text-muted-foreground uppercase mb-6 tracking-widest">
              Certificações & Credenciais
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge
                  key={cert}
                  variant="secondary"
                  className="text-sm py-1.5 px-4 bg-background border-border text-white hover:bg-primary hover:text-white transition-colors"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Benefits */}
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Por que escolher
              </h2>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8">
                Vantagens de treinar com excelência
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <FadeIn key={i} delay={i * 50}>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-lg leading-tight">{benefit}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Locations */}
          <div id="unidades" className="flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Onde treinar
              </h2>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8">
                Unidades parceiras
              </h3>
              <div className="space-y-6">
                {locations.map((loc, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="bg-background border border-border p-6 rounded-lg flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{loc.name}</h4>
                          <p className="text-sm text-muted-foreground">{loc.address}</p>
                        </div>
                      </div>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-primary hover:underline whitespace-nowrap px-4 py-2 border border-primary/20 rounded-md hover:bg-primary/10 transition-colors"
                      >
                        Ver no Mapa
                      </a>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
