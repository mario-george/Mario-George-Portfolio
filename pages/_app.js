import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import RoutingTransition from "@/components/RoutingTransition";
import { AnimatePresence, motion } from "framer-motion";


// file with tailwind directives 
import "@/styles/globals.css";
// roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // console.log(router.route);
  // console.log(router.pathname);
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <RoutingTransition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
