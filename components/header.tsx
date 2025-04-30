import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#projects" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Portofolio
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Tentang
          </Link>
          <Link href="/#skills" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Layanan
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Kontak
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="default"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Hubungi Saya
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/#projects" className="text-lg font-medium hover:text-purple-600 transition-colors">
                Portofolio
              </Link>
              <Link href="/#about" className="text-lg font-medium hover:text-purple-600 transition-colors">
                Tentang
              </Link>
              <Link href="/#skills" className="text-lg font-medium hover:text-purple-600 transition-colors">
                Layanan
              </Link>
              <Link href="/#contact" className="text-lg font-medium hover:text-purple-600 transition-colors">
                Kontak
              </Link>
              <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Hubungi Saya
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
