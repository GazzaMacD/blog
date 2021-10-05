import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { BaseLayout } from '@/components/layouts/BaseLayout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
export default MyApp;
