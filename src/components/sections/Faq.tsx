import { FadeIn } from '@/components/FadeIn'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Seu método é baseado apenas em CrossFit? Ele realmente emagrece?',
    a: 'Não. O Crossfit é uma das metodologias que uso por ser o pai do treinamento funcional. Mas também usamos a base de força, hipertrofia e resistência cardiovascular como parte do método!\n\nSim, emagrece! Todos os meus alunos sem exceção, perderam gordura treinando com constância e dedicação.\n\nLembre-se que o emagrecimento tem ligação direta com sua qualidade alimentar. Jogar essa responsabilidade apenas para a atividade física não é justo.',
  },
  {
    q: 'Sou sedentário, esse treino é pra mim?',
    a: 'Principalmente pra você. O pior erro que uma pessoa que está sem treinar pode fazer é se comparar com um praticante na intenção de analisar se é capaz ou não de praticar tal atividade. Independente da atividade física, comece! Busque um profissional experiente e verdadeiro que vai te orientar diariamente.',
  },
  {
    q: 'Consigo fazer em casa?',
    a: 'No pacote "10 treinos - Apenas peso Corporal" sim.\n\nCom alguns acessórios básicos como corda para saltar e um colchonete você consegue treinar bem!',
  },
  {
    q: 'Precisa ser todos os dias?',
    a: 'Não!\n\nO ideal é que as aulas da Blessed sejam uma porta de entrada e um dos caminhos para sua paixão pela atividade física.\n\nO que importa é dar primeiro passo!',
  },
  {
    q: 'Qual é a diferença entre treinar presencial e online?',
    a: 'Presencial: Você tem acompanhamento direto, correção de movimento em tempo real e comunidade no box.\n\nOnline: Você tem flexibilidade de horário, treina de qualquer lugar e recebe programas personalizados. Ambos são eficazes — escolha o que se encaixa melhor na sua rotina!',
  },
  {
    q: 'Quanto tempo leva para ver resultados?',
    a: 'Resultados físicos começam a aparecer em 4-6 semanas com consistência. Mas a transformação mental e de confiança acontece muito antes — geralmente na primeira semana!\n\nO importante é manter a consistência e a dedicação.',
  },
  {
    q: 'Preciso ter experiência anterior?',
    a: 'Não! Atendo desde iniciantes até avançados. Todos têm algo a evoluir independente do nível. Vou adaptar os treinos para seu nível atual e evoluir com você.',
  },
  {
    q: 'Como funciona o acompanhamento online?',
    a: 'Você recebe programas de treinamento personalizados, vídeos de técnica, orientações de nutrição e suporte via WhatsApp. Você treina no seu ritmo e eu acompanho seu progresso.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-[#ee011d] uppercase mb-3">
              Tire Suas Dúvidas
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
              Perguntas Frequentes
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={100}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-[#ee011d] transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline hover:text-[#ee011d] py-6 [&>svg]:text-[#ee011d] [&>svg]:transition-transform [&>svg]:duration-300">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
