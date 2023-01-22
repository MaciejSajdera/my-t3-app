import React from "react";
import { personalData } from "../../../lib/data/personal";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import type { TMenuItem } from "../menus/types";

type Props = {
  menuItems: TMenuItem[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function Navbar({}: Props) {
  return (
    <nav className="footer absolute bottom-0 w-full items-center bg-transparent p-12">
      <div className="h-full w-full grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <h1 className="prose font-proxima text-6xl">
          {personalData.firstName} <br />
          {personalData.lastName}
        </h1>
      </div>
      <div className="flex h-full w-full items-end justify-end gap-4 md:place-self-center md:justify-self-end">
        <Link
          target={"_blank"}
          href={personalData?.github}
          passHref={true}
          className="block self-end"
        >
          <AiFillGithub fontSize={44} />
        </Link>
      </div>
    </nav>
  );
}
