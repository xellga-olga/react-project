import { FC } from 'react';


interface TagListProps {}

export const TagList: FC<TagListProps> = () => {
   return (
      <ul className="flex flex-wrap">
         <li className='font-light text-date border border-x-theme-lightGray mr-1 mb-0.2 px-tag rounded-tag text-theme-tag'>qwe</li>
         <li className='font-light text-date border border-x-theme-lightGray mr-1 mb-0.2 px-tag rounded-tag text-theme-tag'>qwe</li>
         <li className='font-light text-date border border-x-theme-lightGray mr-1 mb-0.2 px-tag rounded-tag text-theme-tag'>qwe</li>
         <li className='font-light text-date border border-x-theme-lightGray mr-1 mb-0.2 px-tag rounded-tag text-theme-tag'>qwe</li>
      </ul>
   );
} 