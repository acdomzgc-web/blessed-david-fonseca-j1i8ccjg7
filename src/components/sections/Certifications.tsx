import { FadeIn } from '@/components/FadeIn'
import { Award, GraduationCap, Medal, BadgeCheck, CheckCircle2 } from 'lucide-react'

const certifications = [
  'Curso de Treinador de Futebol (Base CAP)',
  'Levantamento de Peso Olímpico',
  'Ginástica Aplicada ao Crossfit',
  'Planejamento e Periodização Esportiva',
  'CORE 360° Níveis 1/2/3/4',
  'Crossfit Trainer Level 1',
  'Cross Kids',
]

export function Certifications() {
  return (
    <section
      id="certificacoes"
      className="py-24 bg-card relative overflow-hidden border-y border-border"
    >
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent hidden lg:block" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Currículo
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Certificações e Formação
              </h3>
            </FadeIn>

            <FadeIn delay={100} className="space-y-8 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Registro Profissional</h4>
                  <p className="text-primary font-black text-lg">Registro CREF: 042966-G/SC</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Medal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Atleta Elite / Master</h4>
                  <p className="text-muted-foreground">Vinculação: Cocares CrossFit</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Formação Acadêmica</h4>
                  <p className="text-muted-foreground">Educador Físico desde 2012</p>
                  <p className="text-muted-foreground">Universidade Dom Bosco (Curitiba/PR)</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 relative">
            <FadeIn delay={200}>
              <div className="bg-background border border-border p-8 rounded-xl shadow-2xl relative z-10">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h4 className="text-2xl font-black uppercase text-white">Especializações</h4>
                </div>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
