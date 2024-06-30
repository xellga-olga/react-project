import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
   return (
      <header>
         <nav className="py-2 px-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
               <Link className="text-2xl mr-8 text-theme-green no-underline hover:no-underline" to='/'>Brainstorm Hub</Link>
               <ul className="pl-0 mb-0 list-none flex">
                  <li>
                     <NavLink 
                        to='/' 
                        className="text-theme-gray font-semibold py-navItem cursor-pointer hover:text-theme-green no-underline hover:no-underline"
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="ml-4">
                     <NavLink 
                        to='/sign-in' 
                        className="text-theme-gray font-semibold py-navItem cursor-pointer hover:text-theme-green no-underline hover:no-underline"
                     >
                        Sign in
                     </NavLink>
                  </li>
                  <li className="ml-4">
                     <NavLink 
                        to='/sign-up' 
                        className="text-theme-gray font-semibold py-navItem cursor-pointer hover:text-theme-green no-underline hover:no-underline"
                     >
                        Sign up
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
};
