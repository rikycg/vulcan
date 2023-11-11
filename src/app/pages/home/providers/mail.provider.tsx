import React from 'react';

import { mailService } from '@/app/core/services/mail.service';

const MailContext = React.createContext({ mailService });

function MailProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MailContext.Provider value={{ mailService }}>
        { children }
      </MailContext.Provider>
    </>
  )
}

export {
  MailContext,
  MailProvider,
}