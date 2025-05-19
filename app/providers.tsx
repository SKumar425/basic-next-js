"use client";

import { ColorModeProvider } from "@/components/ui/color-mode";
import type { ThemeProviderProps } from "next-themes";  // Import this type
import { system } from "@/theme";

import { ChakraProvider } from "@chakra-ui/react";

export function Provider(props: ThemeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} forcedTheme="light" />
    </ChakraProvider>
  );
}
