import { useEffect, useState } from "react";
import AuthShowcase from "../../common/components/ui/AuthShowcase";
import Modal from "../../common/components/ui/Modal";
import Toggle from "../../common/components/ui/Toggle";
import useClickOutsideOf from "../../common/hooks/useClickOutsideOf";
import { useKeyDown } from "../../common/hooks/useKeyDown";
import { api } from "../../common/utils/api";
import RootLayout from "../../layouts/root";
import type { NextPageWithLayout } from "../_app";
import Head from "next/head";

/* 

signing up with magic link will cause theme to change to a special onew

*/

const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "cupcake");
  } else {
    document.documentElement.setAttribute("data-theme", "myDark");
  }
};

const Components: NextPageWithLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

          <Toggle onChange={handleThemeToggle} />

          <Modal ref={modalRef} isOpen={isOpen} setIsOpen={setIsOpen}>
            <AuthShowcase />
          </Modal>
        </div>
      </div>
    </>
  );
};

Components.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Components;
