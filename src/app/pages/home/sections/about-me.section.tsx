'use client';

import React from 'react';

import { TwoColumns } from '@/app/shared/layouts/two-columns.layout';
import { InfoContext } from '../providers/info.provider';

export function AboutMe() {
  const { profile } = React.useContext(InfoContext);
  const columns = profile.aboutme.split('<br>').map(p => p.trim());
  const half = Math.floor(columns.length / 2);
  const columnsA = columns.slice(0, half).map((column, index) => (<p key={index}>{column}</p>));
  const columnsB = columns.slice(half, columns.length).map((column, index) => (<p key={index}>{column}</p>));

  return (
    <>
      <TwoColumns title='About' id='about'>
        <div className='flex flex-col gap-5'>
          { columnsA }
        </div>
        <div className='flex flex-col gap-5'>
          { columnsB }
        </div>
      </TwoColumns>
    </>
  )
}