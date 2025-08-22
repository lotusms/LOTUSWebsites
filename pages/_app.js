import "../styles/globals.css";
import MainLayout from "@/layouts/main-layout";
import Head from "next/head";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

      {getLayout(<Component {...pageProps} />)}      
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;