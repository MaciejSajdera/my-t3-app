import Footer from "../../common/components/ui/Footer";
import Navbar from "../../common/components/ui/Navbar";
import type { LayoutProps } from "../types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>

      <Navbar menuItems={[]} />
      <main>{children}</main>
      <Footer menuItems={[]} />
    </>
  );
}
