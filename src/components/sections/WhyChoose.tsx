import { FadeIn } from '@/components/FadeIn'
import { Award, Target, UserCheck, Flame, Users } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    items: [
      'Mais de 12 anos no mercado',
      '3 mil+ alunos transformados',
      'Atleta Elite em competições',
    ],
  },
  {
    icon: Target,
    title: 'Método Consolidado',
    items: ['Funcional e eficaz', 'Adaptado para todos os níveis', 'Resultados garantidos'],
  },
  {
    icon: UserCheck,
    title: 'Cuidado Personalizado',
    items: ['Acompanhamento individual', 'Paciência e dedicação', 'Conhecimento de cada aluno'],
  },
  {
    icon: Flame,
    title: 'Transformação Real',
    items: ['Saúde física e mental', 'Confiança e autoestima', 'Longevidade e bem-estar'],
  },
  {
    icon: Users,
    title: 'Comunidade Forte',
    items: ['Suporte constante', 'Motivação diária', 'Rede de alunos inspiradores'],
  },
]

export function WhyChoose() {
  return (
    <section
      id="por-que-escolher"
      className="py-24 bg-card border-y border-border relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[800px] opacity-[0.02] pointer-events-none z-0">
        <img
          src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Logo%20Blessed%20Branco.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <FadeIn>
            <img
              src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Logo%20Blessed%20Vermelho.png"
              alt="Blessed Logo"
              className="h-20 opacity-80 mx-auto mb-6 object-contain drop-shadow-sm"
            />
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Por que Treinar Comigo?
            </h2>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Diferenciais e Benefícios
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <FadeIn
                key={i}
                delay={i * 100}
                className={i === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-auto' : ''}
              >
                <div className="bg-background border border-border p-8 rounded-lg h-full group hover:border-primary transition-all duration-300 hover:shadow-[0_8px_30px_rgba(238,1,29,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 bg-card border border-border rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                    {reason.title}
                  </h4>
                  <ul className="space-y-3">
                    {reason.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground flex items-start gap-2 text-sm font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
