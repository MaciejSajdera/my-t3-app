import Navbar from "../../common/components/ui/Navbar";
import { mainMenu } from "../../common/lib/data/menus";
import RootLayout from "../../layouts/Root";
import type { NextPageWithLayout } from "../_app";

const MiniProjects: NextPageWithLayout = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Mini Projects
        </h1>
      </div>
    </main>
  );
};

export default MiniProjects;

MiniProjects.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <Navbar menuItems={mainMenu} />
      {page}
    </RootLayout>
  );
};
