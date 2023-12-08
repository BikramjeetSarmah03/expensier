"use client";

import ExpenseGainModal from "@/components/modal/expense-gain-modal";

interface ModalProviderProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  return (
    <>
      {children}
      <ExpenseGainModal />
    </>
  );
}
