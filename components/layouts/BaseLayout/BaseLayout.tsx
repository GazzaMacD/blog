import styles from './BaseLayout.module.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: ILayoutProps): JSX.Element {
  return (
    <div className={styles.Container}>
      <p>I am in Base Layout</p>
      {children}
    </div>
  );
}

export { BaseLayout };
