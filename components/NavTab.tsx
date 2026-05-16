"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";

export default function NavTab() {
  const pathname = usePathname();
  const router = useRouter();
  const activeTab = pathname.startsWith("/users") ? "/users" : pathname;

  return (
    <Tabs value={activeTab} onValueChange={(val) => router.push(val)} className="place-items-center place-content-center py-10">
      <TabsList>
        <TabsTrigger value="/">Design 1</TabsTrigger>
        <TabsTrigger value="/design2">Design 2</TabsTrigger>
        <TabsTrigger value="/users">Dashboard</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}