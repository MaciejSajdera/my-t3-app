import React, { useRef } from "react";
import type { TMenu } from "./types";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MainMenu({
  menuItems,
  menuItemClassName,
  ...rest
}: TMenu) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full" ref={constraintsRef}>
      <ul {...rest}>
        {menuItems?.map((item, index) => {
          return (
            <motion.li
              key={`${item.name}${index}`}
              className="prose cursor-pointer text-center text-6xl font-extrabold uppercase"
              drag
              dragSnapToOrigin
              dragConstraints={constraintsRef}
              whileHover={{
                position: "relative",
                zIndex: 1,
                scale: 1.2,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
