import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha App Mantine",
  description: "Next.js + Mantine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
