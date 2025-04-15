"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const { back } = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      back();
    }
  };

  return createPortal(
    <dialog
      onClick={handleClose}
      onClose={() => back()}
      ref={dialogRef}
      className={style.modal}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
