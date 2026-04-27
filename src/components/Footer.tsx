import { Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-border/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-6 block">
              <img
                src="https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/Logo%20Chapeu.png"
                alt="Blessed"
                className="h-20 object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Transformando vidas através do treinamento funcional e do compromisso com a
              excelência.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="#" className="hover:text-[#ee011d] transition-colors">
                Home
              </a>
              <a href="#quem-e-david" className="hover:text-[#ee011d] transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="hover:text-[#ee011d] transition-colors">
                Serviços
              </a>
              <a href="#contato" className="hover:text-[#ee011d] transition-colors">
                Contato
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/davidfonsecacoach/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ee011d] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5541987747373"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ee011d] hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>&copy; 2026 BLESSED - Coach David Fonseca. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <span>Desenvolvido com</span>
            <span className="text-[#ee011d] animate-pulse">❤️</span>
            <span>para sua transformação</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
