import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <div className="absolute top-0 z-40 flex w-full bg-transparent px-12 pt-6">
      {children}
    </div>
  );
}
