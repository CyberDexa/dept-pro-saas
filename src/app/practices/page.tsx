"use client";

import { useSession } from "next-auth/react";

export const dynamic = "force-dynamic";

export default function PracticesPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Practice Management</h1>
        <p className="text-gray-600">
          This feature is under development. Please check back soon!
        </p>
      </div>
    </div>
  );
}
