import React from 'react';

import { messageService } from '../services/message.service';

const MessageContext = React.createContext({ messageService });

function MessageProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MessageContext.Provider value={{ messageService }}>
        { children }
      </MessageContext.Provider>
    </>
  )
}

export {
  MessageContext,
  MessageProvider,
}