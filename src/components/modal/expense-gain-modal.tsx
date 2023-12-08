import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useModal } from "@/hooks/useModal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

export default function ExpenseGainModal() {
  const { isOpen, onClose } = useModal();

  const form = useForm({});

  const onSubmit = async () => {};

  const handleClose = () => {
    // form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full p-0 overflow-hidden text-black bg-white md:max-w-3xl">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="text-2xl font-bold text-center">
            Add Expense / Gain
          </DialogTitle>
        </DialogHeader>

        <div>hey</div>
      </DialogContent>
    </Dialog>
  );
}
