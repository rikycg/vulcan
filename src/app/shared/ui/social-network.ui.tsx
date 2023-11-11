import React from 'react';
import * as Fa from 'react-icons/fa6';

export class SocialNetworkList {
  name: string = '';
  url: string = '';
}
export class SocialNetworkProps {
  className?: string;
  list: SocialNetworkList[] = [];
}

export function SocialNetwork({ list, className }: SocialNetworkProps) {
  const icons = list.map(
    icon => {
      const componentName = `Fa${icon.name.charAt(0).toUpperCase()}${icon.name.slice(1)}` as keyof typeof Fa;

      return Fa[componentName];
    }
  );

  return (
    <div className={`text-gray-light flex gap-5 text-base h-full items-center ${className || ''}`}>
      {
        (icons).map((icon: any, index: number) => {
          return (
            <a 
              href={list[index].url}
              target='_blank'
              key={`${index}-${Date.now()}`} 
              className='cursor-pointer hover:text-white'>
              { React.createElement(icon) }
            </a>
          )
        })
      }
    </div>
  )
}