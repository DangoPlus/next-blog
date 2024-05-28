import styles from './layout.module.scss'
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className={styles.wrapper}>
        <h1>this is admin layout</h1>
        {children}
      </div>
    );
  }