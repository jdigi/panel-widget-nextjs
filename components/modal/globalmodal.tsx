"use client";
import { useModal } from "../../hooks/useModal";

export default function GlobalModal({
  defaultCloseBtn = false,
}: {
  defaultCloseBtn?: boolean;
}) {
  const { isOpen, content, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="global-modal fixed left-0 z-[100] h-full w-full bg-[rgba(13,13,13,0.76)] backdrop-blur">
      <div className="global-modal__content align-center flex h-full w-full justify-center">
        {content}
        <button
          className={defaultCloseBtn ? "block" : "hidden"}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}
