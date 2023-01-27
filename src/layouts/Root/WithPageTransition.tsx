import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useRouter } from "next/router";
import Header from "../../common/components/ui/Header";
import Navbar from "../../common/components/ui/Navbar";
import Toggle from "../../common/components/ui/Toggle";
import useGlobalStore from "../../common/hooks/zustand/useGlobalStore";
import { handleThemeToggle } from "../../common/utils/helpers";
import type { LayoutProps } from "../types";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { OVERLAY_ROOT_ID } from "../../common/lib/data/constans";
import Drawer from "../../common/components/ui/Drawer";
import useDimensions from "react-cool-dimensions";
import React from "react";
import theme from "../../common/styles/theme";

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
  const setIsMenuOpen = useGlobalStore((state) => state.setIsMenuOpen);
  const setNavBarHeight = useGlobalStore((state) => state.setNavBarHeight);

  const {
    observe,
    unobserve,
    width,
    height: navbarHeight,
    entry,
  } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  React.useEffect(() => {
    setNavBarHeight(navbarHeight);
  }, [navbarHeight]);

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

      <Drawer
        anchor="left"
        variant="permanent"
        open={true}
        drawerWidthOpen={"200px"}
        classes={{
          paper: "no-scrollbar",
          root: "absolute",
        }}
        PaperProps={{
          sx: {
            paddingTop: theme.spacings.xs4,
            // top: `calc(${navbarHeight}px - ${theme.spacings.xs4})`, //to hide border-radius
            visibility: "visible!important" as "visible",
            transform: "translateX(0)!important" as "translateX(0)",
          },
        }}
      >
        <div
          style={{
            width: "auto",
            height: "100%",
          }}
          role="presentation"
        >
          {children}
        </div>
      </Drawer>
      <Navbar menuItems={[]} />
      <button className="btn-square btn" onClick={setIsMenuOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
