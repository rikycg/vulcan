'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { AiOutlineCloseSquare } from 'react-icons/ai';

export interface INavProps {
  list: INavList[];
  children?: React.ReactNode;
}

export interface INavList {
  name: string;
  path: string;
}

export function Nav({ list, children }: INavProps) {
  const [navState, setNavState] = useState({ opened: false });
  const containerClasses = navState.opened ? '' : 'max-sm:hidden';

  const toggleNav = () => {
    setNavState({ opened: !navState.opened });
  }

  return (
    <nav>
      <span onClick={ toggleNav } className='flex sm:hidden cursor-pointer'>
        <FaBars />
      </span>
      <div className={`${containerClasses} initial z-10 justify-end max-sm:fixed max-sm:w-[200px] max-sm:right-0 max-sm:top-0 max-sm:bg-gray-dark max-sm:h-full max-sm:p-5 max-sm:border-l-[1px] flex flex-col`}>
        <span onClick={ toggleNav } className='hidden text-[24px] mb-5 cursor-pointer max-sm:flex'>
          <AiOutlineCloseSquare />
        </span>
        <ul className='flex flex-col gap-3 sm:flex-row sm:gap-10'>
          { 
            list.map(item => {
              return (
                <li className="text-gray-light font-regular" key={item.name}>
                  <a href={ item.path }>
                    { item.name }
                  </a>
                </li>
              )
            })
          }
        </ul>
        <aside className='flex sm:hidden mt-auto'>
          { children }
        </aside>
      </div>
    </nav>
  )
}
