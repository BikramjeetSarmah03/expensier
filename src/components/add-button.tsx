"use client";

import { useModal } from "@/hooks/useModal";
import { PlusIcon } from "lucide-react";

export default function AddButton() {
  const { onOpen } = useModal();

  return (
    <button
      className="absolute bottom-5 right-5 bg-blue-700 text-white rounded-full"
      onClick={() => onOpen()}
    >
      <PlusIcon className="h-20 w-20" />
    </button>
  );
}
