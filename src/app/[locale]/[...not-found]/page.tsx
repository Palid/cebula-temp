import { notFound } from "next/navigation";

export default function NotFoundDummy() {
  console.log("Global catch-all 404 page");
  notFound()
}
