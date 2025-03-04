'use client'
import { login, projects, register, title } from '@/constant/home'
import { usePathname } from 'next/navigation'
import Hero from '@/components/Hero'

const Header = () => {
  const path = usePathname()
  const isRootPage = path === '/'
  return (
    (isRootPage
      ? <div className="bg-[url('/images/bg.png')] bg-cover relative h-screen">
          <div className="absolute bg-gradient-to-r to-gray-900 from-black opacity-80 w-full h-full z-0"></div>
          <div className="container m-auto z-10 relative h-full flex flex-col max-w-4xl px-6 sm:px-6 md:px-0">
            <HeaderNavar />
            <Hero />
          </div>
        </div>
      : <HeaderNavar />
    )
  )
}

export default Header

function HeaderNavar () {
  return (
    <header className="flex flex-col md:flex-row gap-1 justify-between py-6 items-center">
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {title}
      </h1>
      <nav className="gap-4 flex text-xl">
        <a className="font-bold text-purple-400 hover:text-[#DA297A]" href='/#projects'>
          {projects}
        </a>
        <a className="font-bold text-purple-400 hover:text-[#DA297A]" href='#'>
          {login}
        </a>
        <a className="font-bold text-purple-400 hover:text-[#DA297A]" href='#'>
          {register}
        </a>
      </nav>
    </header>
  )
}
