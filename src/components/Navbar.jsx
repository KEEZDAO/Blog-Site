import {useState} from 'react'
import Image from 'next/image'
import { close } from '../assets';
import { navLinks } from '../constants';
import Link from 'next/link';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex pb-0 pt-4 justify-between items-center navbar'>
      {/* <img src={logo} alt="KEEZ" className="w-[124px]"/> */}
      <Image src="/KEEZ_white.png" width={124} height={24}/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      <li className="font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white">
        <Link href="/blog" passHref>
          <span>Blog</span>
        </Link>
      </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center object-contain'>
          <Image 
          src={toggle ? close : "/KEEZ_white.png"}
          alt='menu'
          className='w-[28px] h-[28px]'
          onClick={() => setToggle((prev) => !prev)}
          width={28}
          height={28}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`  }>
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
              >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>
          </div>

      </div>

    </nav>
  )
}

export default Navbar