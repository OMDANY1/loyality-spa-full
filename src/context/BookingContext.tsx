'use client';

import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isOpen: boolean;
  selectedServiceId: string | null;
  openBooking: (serviceId?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const openBooking = (serviceId?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <BookingContext.Provider value={{ isOpen, selectedServiceId, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
};
