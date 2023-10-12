import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

interface CustomPageProps { // <--- your custom page props
   session
}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;