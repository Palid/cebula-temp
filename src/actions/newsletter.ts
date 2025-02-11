"use server";

import {
  NewsletterFormSchema,
  newsletterFormSchema,
} from "@/schemas/newsletter";

export async function subscribe(data: NewsletterFormSchema) {
  const result = newsletterFormSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Invalid data");
  }
  const formData = new FormData();
  formData.append("email", result.data.email);
  if (result.data.name) {
    formData.append("name", result.data.name);
  }
  // Subscribe to CebulaCamp 2025 newsletter, magic value from newsletter system
  formData.append("l", "1402b3e7-1e3f-4ab6-b878-4a8478fcef52");

  const res = await fetch("https://news.cebula.camp/subscription/form", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    return result.data;
  }
  throw new Error("Invalid data");
}
