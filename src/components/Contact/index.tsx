"use client";

import { Github, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import linkedinIcon from "@/assets/icons/linkedin.webp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEmail } from "@/hooks/useSubmitEmail";
import { emailFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

export function Contact() {
  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: "",
      message: "Hello Martin,",
    },
  });

  const { isLoading, onEmailSubmit } = useSubmitEmail();

  return (
    <section
      id="contact"
      className="mt-24 sm:mt-32 flex flex-col gap-4 px-4 md:px-8 xl:px-0"
    >
      <div className="w-full flex justify-between items-center ">
        <h2 className="w-full lg:w-fit text-center lg:text-left">
          Let's chat.
        </h2>
        <div className="hidden lg:flex gap-4">
          <Button asChild variant="outline" className="group p-2 invert">
            <Link
              href={"https://www.linkedin.com/in/martinmallein"}
              target="_blank"
            >
              <Image
                className="group-hover:invert"
                src={linkedinIcon}
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </Button>
          <Button asChild variant="outline" className="p-2 invert">
            <Link href={"https://github.com/MartySalade"} target="_blank">
              <Github />
            </Link>
          </Button>
        </div>
      </div>
      <p className="mb-4 text-center lg:text-left">
        Contact me for projects, inquiries, or a good tech conversation.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onEmailSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="font-sans border-gray-600"
                    placeholder="john.doe@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-64 font-sans border-gray-600 opacity-100"
                    placeholder="Hello Martin..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            type="submit"
            size="sm"
            className="w-full sm:w-fit"
          >
            SEND
            <Send className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </Form>
    </section>
  );
}
