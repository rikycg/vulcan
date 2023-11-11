'use client';

import React, { useEffect } from 'react';

import { HomeInfo } from '../models/home-info.model';

const InfoContext = React.createContext(new HomeInfo());

function InfoProvider ({ children, data }: { children: React.ReactNode, data: HomeInfo }) {
  useEffect(() => {
    document.title = data.profile.nickname;
  }, []);
  
  return (
    <>
      <InfoContext.Provider value={data}>
        { children }
      </InfoContext.Provider>
    </>
  )
}

export {
  InfoContext,
  InfoProvider,
}