import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import RoutingTransition from "@/components/RoutingTransition";
import { AnimatePresence, motion } from "framer-motion";

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
