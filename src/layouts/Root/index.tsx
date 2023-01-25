import { useState } from "react";
import Header from "../../common/components/ui/Header";
import Navbar from "../../common/components/ui/Navbar";
import Toggle from "../../common/components/ui/Toggle";
import { handleThemeToggle } from "../../common/utils/helpers";
import type { LayoutProps } from "../types";
import { OVERLAY_ROOT_ID } from "../../common/lib/data/constans";

export default function RootLayout({ children }: LayoutProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="page flex min-h-screen w-full">
      <div id={OVERLAY_ROOT_ID} className="z-50"></div>
      <Header>
        <div className="flex w-full justify-end">
          <Toggle
            onChange={handleThemeToggle}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>
      </Header>
      {children}
      <Navbar menuItems={[]} />
    </div>
  );
}
