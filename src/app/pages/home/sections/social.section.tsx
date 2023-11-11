'use client'
import React from 'react';

import { SocialNetwork } from '@/app/shared/ui/social-network.ui';
import { InfoContext } from '../providers/info.provider';

export function Social() {
  const { socialNetworks } = React.useContext(InfoContext);

  return (
    <>
      <SocialNetwork list={socialNetworks} className='flex-col' />
    </>
  )
}