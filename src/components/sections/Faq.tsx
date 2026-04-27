import { FadeIn } from '@/components/FadeIn'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Preciso já ter feito CrossFit para começar o Personal Training?',
    a: 'De forma alguma. O treinamento é adaptado para o seu nível atual, seja você um iniciante absoluto ou um atleta avançado.',
  },
  {
    q: 'Como funciona a Consultoria Online?',
    a: 'Você receberá planilhas semanais via aplicativo, com vídeos demonstrativos de cada exercício. Além disso, terá suporte direto via WhatsApp para enviar vídeos da sua execução e receber correções.',
  },
  {
    q: 'Qual a duração de cada treino?',
    a: 'Em média, os treinos duram 60 minutos, incluindo aquecimento, parte técnica/força e o condicionamento metabólico (WOD).',
  },
  {
    q: 'Tem foco em hipertrofia ou apenas condicionamento?',
    a: 'O método trabalha múltiplas capacidades físicas. Embora o foco seja performance e saúde geral, o ganho de massa magra (hipertrofia) é uma consequência natural do treinamento de força aliado à boa alimentação.',
  },
  {
    q: 'Como realizo o pagamento?',
    a: 'Os pagamentos podem ser feitos via PIX, transferência ou cartão de crédito. Entre em contato para saber sobre os pacotes mensais, trimestrais e semestrais.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              Dúvidas
            </h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
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
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:no-underline hover:text-primary py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
