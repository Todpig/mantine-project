export interface ProductProps {
  id?: string;
  name: string;
  price: number;
  image: string;
  status: "on-sale" | "new" | "sold-out";
  description: string;
}
