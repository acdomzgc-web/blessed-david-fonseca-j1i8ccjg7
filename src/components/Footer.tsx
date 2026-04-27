import { Instagram, Youtube, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#inicio"
              className="text-2xl font-black tracking-tighter text-white uppercase mb-4"
            >
              Blessed<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transformando vidas através do treinamento funcional e do compromisso com a
              excelência.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#quem-e-david" className="hover:text-primary transition-colors">
                Quem é David
              </a>
              <a href="#metodo" className="hover:text-primary transition-colors">
                Método
              </a>
              <a href="#certificacoes" className="hover:text-primary transition-colors">
                Certificações
              </a>
              <a href="#servicos" className="hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#faq" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Coach David Fonseca. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
