import { Card } from "@mantine/core";

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

export function Product({ name, price, image }: ProductProps) {
  return (
    <Card>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </Card>
  );
}
