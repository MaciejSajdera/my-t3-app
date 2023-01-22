import { useEffect } from "react";
import React from "react";

export const useKeyDown = (
  handler: (e: KeyboardEvent) => void,
  deps: unknown[] = []
) => {
  const callback = React.useCallback(handler, [handler]);

  useEffect(() => {
    document.addEventListener("keydown", callback);
    // clean up
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [...deps, callback]); // eslint-disable-line react-hooks/exhaustive-deps
};
