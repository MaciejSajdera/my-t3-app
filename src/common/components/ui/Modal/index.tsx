import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
import { OVERLAY_ROOT_ID } from "../../../lib/data/constans";
import { CSSTransition } from "react-transition-group";

type TModal = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  onClose?: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal = forwardRef<HTMLDivElement | null, TModal>((props, ref) => {
  const { isOpen, setIsOpen, maxWidth = `sm`, children } = props;

  return (
    <CSSTransition
      nodeRef={ref}
      in={isOpen}
      timeout={100}
      classNames="modal-box"
      unmountOnExit
    >
      <>
        {isOpen
          ? createPortal(
              <div
                className="fixed top-0 left-0 flex h-screen w-full items-center justify-center backdrop-blur-sm"
                style={{
                  background: "rgba(0,0,0,0.7)",
                }}
              >
                <div
                  ref={ref}
                  onClick={(e) => e.stopPropagation()}
                  className={`modal-box relative flex w-full max-w-${maxWidth} flex-col items-start rounded bg-white p-5 text-lg text-gray-800 shadow-lg`}
                >
                  <button
                    className="btn-circle btn absolute right-2 top-2 border-none bg-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {children}
                </div>
              </div>,
              document.querySelector(`#${OVERLAY_ROOT_ID}`)!
            )
          : null}
      </>
    </CSSTransition>
  );
});

Modal.displayName = "Modal";

export default Modal;
