import Head from "next/head";
import MainMenu from "../common/components/ui/menus/MainMenu";
import { personalData } from "../common/lib/data/personal";
import type { NextPageWithLayout } from "./_app";
import WithPageTransition from "../layouts/root/WithPageTransition";

const mainMenuItems = process.env.menu;

const Home: NextPageWithLayout = () => {
  console.log(mainMenuItems);
  return (
    <>
      <Head>
        <title>{`${personalData?.firstName} ${personalData?.lastName}`}</title>
      </Head>
      <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
        {/* <MouseResponsiveLayer className="w-full border-2 border-accent p-8">
          </MouseResponsiveLayer> */}
        <MainMenu menuItems={mainMenuItems} className="flex flex-col gap-8" />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};

export default Home;
