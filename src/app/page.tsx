"use client";

import { Header } from "@/components/header";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Product } from "@/components/product";
import { ProductProps } from "@/types/ProductProps";
import { api } from "@/utils/api";

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  async function fetchProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <h1>Bem-vindo à nossa loja virtual!</h1>
      <section className={styles.content}>
        {products.map(({ id, name, price, image, status, description }) => (
          <Product
            key={id}
            name={name}
            price={price}
            image={image}
            description={description}
            status={status}
          />
        ))}
      </section>
    </main>
  );
}
