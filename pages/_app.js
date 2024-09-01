import "../styles/global.scss";
import Head from "next/head";
import Header from "@/components/layout/header/Header";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "../public/icons/flaticon.css";
import Edit from "@/components/parts/edit";
import { Acme, Fira_Sans, Roboto_Mono, Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { wrapper } from "@/Redux/store";

const acme = Acme({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

const fira_sans = Fira_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-fira",
});

const roboto_mono = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
});

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const App = ({ Component, pageProps }) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="preconnect" href="https://strapi-151987-0.cloudclusters.net" />
      <link rel="preconnect" href="https://ip.nf" />
      <style jsx global>{`
        :root {
          --font-acme: ${acme.style.fontFamily}, sans-serif;
          --font-roboto: ${roboto.style.fontFamily}, sans-serif;
          --font-robotoMono: ${roboto_mono.style.fontFamily}, monospace;
          --font-tinos: "Tinos", serif;
          --font-fira: ${fira_sans.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>Piemultilingual</title>
      </Head>
      <Provider store={store}>
        <Edit></Edit>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
