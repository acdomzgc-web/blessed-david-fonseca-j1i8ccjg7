import { MessageCircle } from 'lucide-react'

export function Fab() {
  return (
    <a
      href="https://wa.me/5541987747373"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white w-[60px] h-[60px] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
    </a>
  )
}
