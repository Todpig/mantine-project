"use client";

import { Button, Container, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <Title order={1}>Olá, mundo!</Title>
      <Button variant="filled" color="blue">
        Clique aqui
      </Button>
    </Container>
  );
}
