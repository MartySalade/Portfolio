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
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(80).max(600),
});
export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "Hello Martin,",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Here with:", values);
  }

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
            <Link href={"https://www.linkedin.com/in/martinmallein"}>
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
            <Link href={"https://github.com/MartySalade"}>
              <Github />
            </Link>
          </Button>
        </div>
      </div>
      <p className="mb-4 text-center lg:text-left">
        Contact me for projects, inquiries, or a good tech conversation.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <Button type="submit" size="sm" className="w-full sm:w-fit">
            SEND
            <Send className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </Form>
    </section>
  );
}
