import { useState } from 'react'
import { Menu } from 'lucide-react'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navLinks = [
  { label: 'Quem é David', href: '#quem-e-david' },
  { label: 'Método', href: '#metodo' },
  { label: 'Certificações', href: '#certificacoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const scrollY = useScroll()
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = scrollY > 50

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-border py-3'
          : 'bg-transparent border-transparent py-5',
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="text-2xl font-black tracking-tighter text-white uppercase">
          Blessed<span className="text-primary">.</span>
        </a>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button asChild className="font-bold hover:scale-105 transition-transform">
            <a href="https://wa.me/5541987747373" target="_blank" rel="noreferrer">
              Fale Conosco
            </a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] border-l-border bg-background"
          >
            <SheetTitle className="text-left text-2xl font-black mb-8 text-white uppercase">
              Blessed<span className="text-primary">.</span>
            </SheetTitle>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-4 w-full font-bold">
                <a
                  href="https://wa.me/5541987747373"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Fale Conosco
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
