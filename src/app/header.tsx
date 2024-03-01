'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import GoatLogo from '@/public/goat-large.png'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigationItems = [
  { title: 'About us', path: 'https://github.com/The-System-Guys' },
]

const Header = () => {
  return (
    <header>
      <div className="w-full flex p-8 ">
        <div className="mx-2 flex flex-row  w-full items-center">
          <Link className="flex flex-row items-center" href="/">
            <Image
              alt="Picture of the Hallucination Guys"
              className="w-20 h-16 mx-4 rounded-full"
              height={512}
              src={GoatLogo}
              width={512}
            />
            <p className="text-xl font-bold whitespace-nowrap hover:underline">
              Hallucination Guys
            </p>
          </Link>

          <nav className="flex w-full justify-end">
            <ModeToggle />
            <div className="items-center px-4 self-center">
              <ul className="flex flex-row ">
                {navigationItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-700  hover:underline mx-2 "
                  >
                    <Link
                      className="text-gray-700 dark:text-gray-300 hover:text-pink-700 dark:hover:text-pink-700"
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-white text-black" asChild>
        <Button className="bg-transparent" size="icon" variant="outline">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="hover:bg-gray-200 dark:hover:text-black font-semibold"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-gray-200 dark:hover:text-black font-semibold"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-gray-200 dark:hover:text-black font-semibold"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Header
