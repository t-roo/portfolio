import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [boolState, setBoolState] = useState(false)


  const  toggleMode = () => {
    setBoolState(!boolState)
    if (document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b flex items-center h-14 px-4 dark:bg-slate-700">
      <nav className="flex space-x-10 mx-auto sm:space-x-16">
        <div className="">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">TanakaRyo's Portfolio</span>
        </div>
        <div className="">
          <button className="pt-0.5 xl:hover:scale-125" onClick={toggleMode}>
            {boolState ? 
            <svg className="visible h-6 w-6 fill-none stroke-none stroke-1 dark:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
            </svg> :             
            <svg className="visible h-6 w-6 fill-none stroke-none stroke-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
            </svg>}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
