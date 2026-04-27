import { FadeIn } from '@/components/FadeIn'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export function Contact() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form.checkValidity()) {
      toast({
        title: 'Mensagem Enviada!',
        description: 'Obrigado! Vou responder em breve.',
      })
      form.reset()
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Preencha todos os campos corretamente.',
      })
    }
  }

  return (
    <section
      id="contato"
      className="py-24 bg-secondary/30 border-t border-border relative overflow-hidden"
    >
      <div className="absolute -left-20 bottom-0 -translate-x-1/4 translate-y-1/4 w-[500px] opacity-[0.03] pointer-events-none z-0">
        <img
          src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Logo%20Blessed%20Vermelho.png"
          alt=""
          className="w-full h-full object-contain -rotate-6"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <h2 className="text-sm font-bold tracking-widest text-[#ee011d] uppercase mb-3">
                Vamos Começar Sua Transformação
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
                Entre em Contato
              </h3>
              <p className="text-muted-foreground text-lg mb-12 max-w-md">
                Preencha o formulário ou chame diretamente no WhatsApp para dar o primeiro passo
                rumo à sua melhor versão.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#ee011d]/10 flex items-center justify-center group-hover:bg-[#ee011d] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#ee011d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/5541987747373"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-bold text-foreground group-hover:text-[#ee011d] transition-colors"
                    >
                      (41) 98774-7373
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#ee011d]/10 flex items-center justify-center group-hover:bg-[#ee011d] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#ee011d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">E-mail</p>
                    <a
                      href="mailto:davidfonsecadesousa@gmail.com"
                      className="text-lg font-bold text-foreground group-hover:text-[#ee011d] transition-colors break-all"
                    >
                      davidfonsecadesousa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#ee011d]/10 flex items-center justify-center group-hover:bg-[#ee011d] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#ee011d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Localização</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-[#ee011d] transition-colors">
                      Cocares CrossFit, Chapecó - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#ee011d]/10 flex items-center justify-center group-hover:bg-[#ee011d] transition-colors duration-300">
                    <Instagram className="w-6 h-6 text-[#ee011d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/davidfonsecacoach/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-bold text-foreground group-hover:text-[#ee011d] transition-colors"
                    >
                      @davidfonsecacoach
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={150}>
              <Card className="bg-background border-border shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 opacity-[0.02] pointer-events-none z-0">
                  <img
                    src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Logo%20Blessed%20Branco.png"
                    alt=""
                    className="w-full h-full object-contain rotate-12"
                  />
                </div>
                <CardContent className="p-8 md:p-10 relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Nome
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder="Seu nome completo"
                        className="bg-card border-border h-12 focus-visible:ring-[#ee011d]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="bg-card border-border h-12 focus-visible:ring-[#ee011d]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        className="bg-card border-border h-12 focus-visible:ring-[#ee011d]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Como posso te ajudar?"
                        className="bg-card border-border min-h-[140px] resize-none focus-visible:ring-[#ee011d]"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-bold h-14 bg-[#ee011d] hover:bg-[#c90118] text-white text-lg transition-colors"
                    >
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
