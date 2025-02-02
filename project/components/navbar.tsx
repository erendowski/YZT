"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

const Navbar = () => {
  const pathname = usePathname()

  const routes = [
    {
      href: '/',
      label: 'Ana Sayfa',
      active: pathname === '/',
    },
    {
      href: '/events',
      label: 'Etkinlikler',
      active: pathname === '/events',
    },
    {
      href: '/about',
      label: 'Hakkımızda',
      active: pathname === '/about',
    },
  ]

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8" />
            <span className="font-bold text-xl">Gazi AI</span>
          </Link>
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          {routes.map((route) => (
            <Button
              key={route.href}
              asChild
              variant={route.active ? "default" : "ghost"}
            >
              <Link
                href={route.href}
                className="text-sm font-medium transition-colors"
              >
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost">
            <Link href="/login">Giriş Yap</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar