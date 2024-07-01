import { FC } from 'react';
import { NavLink } from 'react-router-dom';


interface FeedToggleProps {}

export const FeedToggle: FC<FeedToggleProps> = () => {
   return (
      <div className='h-8'>
         <ul className='flex'>
            <li>
               <NavLink className='bg-theme-globalFeed border-b-4 px-4 py-2 border-theme-green ' to='/'>Global Feed</NavLink>
            </li>
         </ul>
      </div>
   )
}