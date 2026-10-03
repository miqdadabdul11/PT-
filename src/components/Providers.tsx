"use client";

import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ConsultContextType {
  isOpen: boolean;
  selectedTopic: string;
  openConsultModal: (topic?: string) => void;
  closeConsultModal: () => void;
}

const ConsultContext = createContext<ConsultContextType>({
  isOpen: false,
  selectedTopic: "",
  openConsultModal: () => {},
  closeConsultModal: () => {},
});

export const useConsultModal = () => useContext(ConsultContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Konsultasi Umum TI");

  const openConsultModal = (topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    } else {
      setSelectedTopic("Konsultasi Umum TI");
    }
    setIsOpen(true);
  };

  const closeConsultModal = () => {
    setIsOpen(false);
  };

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ConsultContext.Provider
        value={{
          isOpen,
          selectedTopic,
          openConsultModal,
          closeConsultModal,
        }}
      >
        {children}
      </ConsultContext.Provider>
    </NextThemesProvider>
  );
}
