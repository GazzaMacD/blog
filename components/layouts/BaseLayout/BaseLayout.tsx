import styles from './BaseLayout.module.scss';

interface ILayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: ILayoutProps): JSX.Element {
  return <div>{children}</div>;
}

export { BaseLayout };
