import { ProductProps } from "@/types/ProductProps";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import styles from "./modules/product.module.css";

export function Product({
  name,
  price,
  image,
  status,
  description,
}: ProductProps) {
  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
        <Image className={styles.image} src={image} height={250} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        <Badge color="pink">{status}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Comprar
      </Button>
    </Card>
  );
}
