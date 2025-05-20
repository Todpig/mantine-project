import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha App Mantine",
  description: "Next.js + Mantine",
};

const theme = createTheme({
  primaryColor: "blue",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
