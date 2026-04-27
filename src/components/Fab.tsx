import { MessageCircle } from 'lucide-react'

export function Fab() {
  return (
    <a
      href="https://wa.me/5541987747373"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium ml-0 group-hover:ml-2">
        Atendimento
      </span>
    </a>
  )
}
