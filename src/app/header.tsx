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
  { title: 'About us', path: 'https://github.com/hallucinationguys' },
]

const Header = () => {
  return (
    <header>
      <div className="w-full flex">
        <div className="w-full items-center mobile:flex justify-between">
          <div className="flex flex-wrap tablet:inline-block tablet:mr-12">
            <Link className="flex flex-row items-center w-fit m-4" href="/">
              <Image
                alt="Picture of the Hallucination Guys"
                className="w-16 h-16 mr-2 rounded-full object-cover object-center"
                src={GoatLogo}
              />
              <p className="text-xl font-bold hover:underline whitespace-nowrap">
                Hallucination Guys
              </p>
            </Link>
          </div>

          <div className="mx-4 mt-4 flex-wrap tablet:inline-block tablet:ml-12 hidden mobile:flex">
            <nav className="flex flex-row justify-end ">
              <ModeToggle />
              <div className="items-center px-4 self-center">
                <ul className="flex flex-row whitespace-nowrap">
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
