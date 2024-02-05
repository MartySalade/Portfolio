import { useState } from "react";

import { toast } from "sonner";
import { z } from "zod";

import { emailFormSchema } from "@/types";

export function useSubmitEmail() {
  const [isLoading, setIsLoading] = useState(false);

  function onEmailSubmit(values: z.infer<typeof emailFormSchema>) {
    setIsLoading(true);
    const promise = fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(values),
    });
    toast.promise(promise, {
      loading: "Loading...",
      success: () => {
        setIsLoading(false);
        return "Email sent successfully!";
      },
      error: () => {
        setIsLoading(false);
        return "Error sending email!";
      },
    });
  }

  return { isLoading, onEmailSubmit };
}
