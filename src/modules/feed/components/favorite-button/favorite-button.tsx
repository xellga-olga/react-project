import {FC} from 'react'


interface FavoriteButtonProps {}

export const FavoriteButton: FC <FavoriteButtonProps> = () => {
   return <button className='text-theme-green border-theme-green text-center align-middle cursor-pointer 
   select-none border px-2 text-sm rounded-buttonSm hover:text-theme-white hover:bg-theme-green focus:text-theme-white focus:bg-theme-darkGreen
   '>
      <i className='ion-heart'></i>
      <span className='ml-1 font-normal'>47</span>
   </button>
}