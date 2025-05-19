"use client"
import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => router.push("/about")}>About</Button>
      <Button onClick={() => router.push("/contact")}>Contact</Button>
    </div>
  );
}
