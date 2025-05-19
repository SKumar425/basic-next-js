"use client"
import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div>
      <h1>About Us</h1>
      <Box bg="tomato" w="100%" p="4" color="white" _hover={{ bg: "green" }}>
        This is About Us Page
      </Box>
      <Button onClick={() => router.push("/")}>Home</Button>
    </div>
  );
}
