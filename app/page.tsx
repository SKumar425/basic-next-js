"use client"
import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Welsome to NextJS + Chakra UI app + Tailwind CSS</h1>
      <Button onClick={() => router.push("/about")}>About</Button>
      <Button onClick={() => router.push("/contact")}>Contact</Button>
    </div>
  );
}
