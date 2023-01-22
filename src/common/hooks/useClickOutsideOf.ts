import React, { useCallback } from "react";
import { assertIsNode } from "../utils/helpers";

/**
 * Hook that handles clicks outside of the passed ref
 */
export default function useOutsideAlerter(callback: () => void) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      assertIsNode(e.target);
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [callback]
  );

  React.useEffect(() => {
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, handleClick]);

  return ref;
}
