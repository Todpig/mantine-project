import Link from "next/link";
import styles from "./modules/navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.link}>
        Home
      </Link>

      <Link href="/products" className={styles.link}>
        Produtos
      </Link>

      <Link href="/about" className={styles.link}>
        Sobre
      </Link>
    </nav>
  );
}
