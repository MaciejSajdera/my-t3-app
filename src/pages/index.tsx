import { useState } from "react";
import AuthShowcase from "../common/components/ui/AuthShowcase";
import { api } from "../common/utils/api";
import RootLayout from "../layouts/Root";
import type { NextPageWithLayout } from "./_app";
import Modal from "../common/components/ui/Modal";
import { useKeyDown } from "../common/hooks/useKeyDown";
import useClickOutsideOf from "../common/hooks/useClickOutsideOf";
import Head from 'next/head'
import { personalData } from "../common/lib/data/personal";

/* 

signing up with magic link will cause theme to change to a special onew

*/

const Home: NextPageWithLayout = () => {
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
    <title>{personalData?.name}</title>
   </Head>
    <div className="container m-auto flex flex-col items-center justify-center gap-12 bg-slate-600 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
        <button className="btn btn-primary" onClick={() => setIsOpen((prevState) => !prevState)}>
          Open Modal
        </button>

        <Modal ref={modalRef} isOpen={isOpen} setIsOpen={setIsOpen}>
          <AuthShowcase />
        </Modal>
      </div>
    </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
