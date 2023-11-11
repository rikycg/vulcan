'use client';

import React from 'react';

import { TwoColumns } from '@/app/shared/layouts/two-columns.layout';
import { Testimonial } from '@/app/shared/ui/testimonial.ui';
import { InfoContext } from '../providers/info.provider';

export function People() {
  const { testimonials } = React.useContext(InfoContext);

  return(
    <>
      <TwoColumns title='People Say' id='people'>
        {
          testimonials.map((testimonial, index) => (
            <article key={ index } className='flex text-gray-light text-sm flex-col'>
              <Testimonial
                key={ index }
                name={ testimonial.name }
                text={ testimonial.text }
                company={ testimonial.company }
                position={ testimonial.position }
              />
            </article>
          ))
        }
      </TwoColumns>
    </>
  )
}