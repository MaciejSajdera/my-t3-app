import Head from "next/head";
import { mainMenuItems } from "../common/lib/data/menus";
import { personalData } from "../common/lib/data/personal";
import RootLayout from "../layouts/root";
import type { NextPageWithLayout } from "./_app";
import MainMenu from "../common/components/ui/menus/MainMenu";

/* 

signing up with magic link will cause theme to change to a special onew

*/

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`${personalData?.firstName} ${personalData?.lastName}`}</title>
      </Head>
      <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center gap-2">
          <MainMenu menuItems={mainMenuItems} />
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
