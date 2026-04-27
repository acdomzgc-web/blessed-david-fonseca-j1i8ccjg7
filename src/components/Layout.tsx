import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Fab } from '@/components/Fab'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Fab />
    </div>
  )
}
