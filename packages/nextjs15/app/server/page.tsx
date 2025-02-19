import styles from "../page.module.css";

import { MyComponent } from "../../../react-library-ssr/lib/components/stencil-generated/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <MyComponent first="Max" last="Musterman" />
    </div>
  );
}
