import React, { ReactNode, useRef } from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const constrain = 20;

function transforms(x: number, y: number, el: HTMLDivElement): string {
  const box: DOMRect = el.getBoundingClientRect();

  if (box) {
    const calcX = -(y - box.y - box.height / 2) / constrain;
    const calcY = (x - box.x - box.width / 2) / constrain;
    return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  } else {
    return "";
  }
}

function transformElement(el: HTMLDivElement, x: number, y: number) {
  el.style.transform = transforms(x, y, el);
}

export default function MouseResponsiveLayer({ children, ...rest }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    el: HTMLDivElement
  ) => {
    const x = e.clientX;
    const y = e.clientY;

    window.requestAnimationFrame(function () {
      if (el) {
        transformElement(el, x, y);
      }
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        if (layerRef.current) {
          handleMouseOver(e, layerRef.current);
        }
      }}
    >
      <div {...rest} ref={layerRef}>
        {children}
      </div>
    </div>
  );
}
