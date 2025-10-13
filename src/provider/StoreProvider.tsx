"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux"; // <-- keep as is
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
