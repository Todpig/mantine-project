import { Button } from "@mantine/core";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./modules/header.module.css";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Loja virtual</h2>
      <Navigation />
      <Button variant="outline">
        <FiShoppingCart size={20} />
      </Button>
    </header>
  );
}
