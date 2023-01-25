import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../../common/components/ui/Header";
import Navbar from "../../common/components/ui/Navbar";
import Toggle from "../../common/components/ui/Toggle";
import useGlobalStore from "../../common/hooks/zustand/useEarthStore";
import { handleThemeToggle } from "../../common/utils/helpers";
import type { LayoutProps } from "../types";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { OVERLAY_ROOT_ID } from "../../common/lib/data/constans";

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("GlobalStore", useGlobalStore);
}

export default function WithPageTransition({ children }: LayoutProps) {
  const { asPath } = useRouter();

  const isThemeToggleChecked = useGlobalStore(
    (state) => state.isThemeToggleChecked
  );

  const setIsThemeToggleChecked = useGlobalStore(
    (state) => state.setIsThemeToggleChecked
  );

  return (
    <div className="app-wrap">
      <div id={OVERLAY_ROOT_ID} className="z-50"></div>
      <Header>
        <div className="flex w-full justify-end">
          <Toggle
            onChange={handleThemeToggle}
            isChecked={isThemeToggleChecked}
            setIsChecked={setIsThemeToggleChecked}
          />
        </div>
      </Header>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            key={asPath}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
                left: "-100%",
                scale: 0.6,
              },
              animate: {
                opacity: 1,
                left: 0,
                scale: 1,
              },
              exit: {
                opacity: 0,
                left: "100%",
                scale: 0.6,
              },
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="page flex min-h-screen w-full">{children}</div>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      <Navbar menuItems={[]} />
    </div>
  );
}
