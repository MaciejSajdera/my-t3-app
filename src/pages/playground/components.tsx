import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import AuthShowcase from "../../common/components/ui/AuthShowcase";
import Modal from "../../common/components/ui/Modal";
import Toggle from "../../common/components/ui/Toggle";
import useClickOutsideOf from "../../common/hooks/useClickOutsideOf";
import { useKeyDown } from "../../common/hooks/useKeyDown";
import { api } from "../../common/utils/api";
import type { NextPageWithLayout } from "../_app";
import WithPageTransition from "../../layouts/root/WithPageTransition";
import useGlobalStore from "../../common/hooks/zustand/useGlobalStore";
import { handleThemeToggle } from "../../common/utils/helpers";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

/* 

signing up with magic link will cause theme to change to a special onew

*/

const Components: NextPageWithLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isThemeToggleChecked = useGlobalStore(
    (state) => state.isThemeToggleChecked
  );

  const setIsThemeToggleChecked = useGlobalStore(
    (state) => state.setIsThemeToggleChecked
  );

  const handleClickOutside = () => {
    setIsOpen((prevState) => !prevState);
  };

  useKeyDown((e) => e.key === "Escape" && setIsOpen(false));
  const modalRef = useClickOutsideOf(handleClickOutside);

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Components Playground</title>
      </Head>
      <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>

          <button
            className="btn-primary btn"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            Open Modal
          </button>

          <Toggle
            onChange={handleThemeToggle}
            isChecked={isThemeToggleChecked}
            setIsChecked={setIsThemeToggleChecked}
          />

          <Modal ref={modalRef} isOpen={isOpen} setIsOpen={setIsOpen}>
            <AuthShowcase />
          </Modal>

          <AnimatedCursor
            trailingSpeed={20}
            hasBlendMode={true}
            outerStyle={{
              mixBlendMode: "exclusion",
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        </div>
      </div>
    </>
  );
};

Components.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};

export default Components;
