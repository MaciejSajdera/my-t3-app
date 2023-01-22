import Header from "../../common/components/ui/Header";
import Navbar from "../../common/components/ui/Navbar";
import Toggle from "../../common/components/ui/Toggle";
import { handleThemeToggle } from "../../common/utils/helpers";
import type { LayoutProps } from "../types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className="page flex min-h-screen w-full">
      <Header>
        <div className="flex w-full justify-end">
          <Toggle onChange={handleThemeToggle} />
        </div>
      </Header>
      {children}
      <Navbar menuItems={[]} />
    </div>
  );
}
