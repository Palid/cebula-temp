"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { subscribe } from "@/actions/newsletter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { oxanium } from "@/fonts";
import { Translations } from "@/i18n/translations";
import {
  NewsletterFormSchema,
  newsletterFormSchema,
} from "@/schemas/newsletter";
import { Checkbox } from "./ui/checkbox";

export function NewsletterPopup({ t }: { t: Translations }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${oxanium.className} text-xl mt-4  uppercase cursor-pointer`}>{t.newsletter.popupButton}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.newsletter.title}</DialogTitle>
          <DialogDescription>
            {t.newsletter.description}
          </DialogDescription>
        </DialogHeader>
        <SubscriptionForm t={t} />
      </DialogContent>
    </Dialog>
  );
}

export default function SubscriptionForm({ t }: { t: Translations }) {
  const form = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
      name: "",
      uodo: true,
    },
  });

  const succeded = form.formState.isValid && form.formState.isSubmitSuccessful;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(subscribe)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={t.newsletter.emailField} type="email" required {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={t.newsletter.nameField} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="uodo"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    id="uodo"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="uodo">
                    {t.newsletter.policyPrivacyCheckboxTitle}
                  </FormLabel>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.newsletter.policyPrivacyCheckboxDescription}
                  </p>
                </div>
              </div>
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting || succeded}
          type="submit"
          className="w-full cursor-pointer uppercase"
        >
          {succeded
            ? t.newsletter.submitSuccess
            : form.formState.isSubmitting
              ? t.newsletter.submitPending
              : t.newsletter.subscribeButton
          }
        </Button>
      </form>
    </Form>
  );
}
