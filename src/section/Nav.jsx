import { ModeToggle } from "../components/ui/mode-toggle"

import hamburgerIcon from '@/assets/hamburger.svg';

const Nav = () => {
  return (
    <header className="padding-x py-2  w-full">
    <nav className='flex justify-between items-center max-container'>
    <div className="cursor-pointer"><h2 className="font-bold  text-wrap hover:text-blue-500 ">OusArc</h2></div>
<div>
<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
<li><a href='/' className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-400'> Home</a></li>
<li><a href='' className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-400'>About Us</a></li>
<li><a href='' className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-400'>Education</a></li>
<li><a href='' className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-400'>Experience</a></li>
<li><a href='' className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-400'>Projects</a></li>
<li><a href='' className='font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-400'>Skills</a></li>
</ul>
</div>
<div className="flex justify-center items-center gap-4"><ModeToggle/> <div className='hidden max-lg:block'>
<img src={hamburgerIcon} alt='hamburger' width={25} height={25}/>
</div></div>
    </nav>
    </header>
  )
}

export default Nav
