import Header from "../../common/components/ui/Header";
import Navbar from "../../common/components/ui/Navbar";
import Toggle from "../../common/components/ui/Toggle";
import type { LayoutProps } from "../types";

const handleThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "cupcake");
  } else {
    document.documentElement.setAttribute("data-theme", "myDark");
  }
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header>
        <div className="flex w-full justify-end">
          <Toggle onChange={handleThemeToggle} />
        </div>
      </Header>
      <main className="min-h-screen">{children}</main>
      <Navbar menuItems={[]} />
    </>
  );
}
