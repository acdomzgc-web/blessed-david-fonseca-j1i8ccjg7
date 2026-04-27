import { FadeIn } from '@/components/FadeIn'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Mensagem Enviada!',
      description: 'Sua mensagem foi recebida e entrarei em contato em breve.',
    })
  }

  return (
    <section id="contato" className="py-24 bg-card border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                Contato
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Vamos conversar sobre seus objetivos
              </h3>
              <p className="text-muted-foreground text-lg mb-12">
                Preencha o formulário ou chame diretamente no WhatsApp para dar o primeiro passo
                rumo à sua melhor versão.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/5541987747373"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-bold text-white hover:text-primary transition-colors"
                    >
                      (41) 98774-7373
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">E-mail</p>
                    <a
                      href="mailto:contato@davidfonseca.com.br"
                      className="text-lg font-bold text-white hover:text-primary transition-colors"
                    >
                      contato@davidfonseca.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Localização</p>
                    <p className="text-lg font-bold text-white">Curitiba, PR - Brasil</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={150}>
              <Card className="bg-background border-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder="Seu nome"
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Sua Mensagem
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Como posso ajudar?"
                        className="bg-card border-border min-h-[120px] resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full font-bold h-12">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
