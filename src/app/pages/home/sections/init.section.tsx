'use client';

import React from 'react';

import { InfoContext } from '../providers/info.provider';
import { Presentation } from '@/app/shared/layouts/presentation.layout';

export function Init() {
  const { profile } = React.useContext(InfoContext);
  const options = [{ text: 'Contact me', href: '#contact' }];

  return (
    <>
       <Presentation 
          name={profile.firstName}
          role={profile.role}
          img={{
            url: '/imgs/code.jpg',
            alt: 'Code',
          }}
          options={options}
        />
    </>
  )
}