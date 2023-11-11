'use client';

import React from 'react';

import { TwoColumns } from '@/app/shared/layouts/two-columns.layout';
import { ExperienceList } from '@/app/shared/ui/experience-list.ui';
import { InfoContext } from '../providers/info.provider';

export function Skills() {
  const { skills } = React.useContext(InfoContext);

  const half = Math.floor(skills.length / 2);
  const skillsA = skills.slice(0, half);
  const skillsB = skills.slice(half, skills.length);

  return (
    <>
      <TwoColumns title='Skills' id='skills'>
        <ExperienceList list={skillsA} />
        <ExperienceList list={skillsB} />
      </TwoColumns>
    </>
  )
}