// Force dynamic rendering - must be at the top
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import PracticesClient from "./PracticesClient";

export default async function PracticesPage() {
  // Force server-side rendering by checking session
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  return <PracticesClient />;
}
