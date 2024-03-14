"use client";
import { useModal } from "../../hooks/useModal";

export default function MessageModal({
  message,
  header,
}: {
  message: string;
  header: any;
}) {
  const { closeModal } = useModal();
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="modal-box p-4 pt-12 md:p-24 flex flex-col bg-[#fff] h-[auto] self-center justify-center items-center md:rounded-lg md:border-2 md:border-black relative w-[98%] md:w-auto">
      <button
        className="close-btn absolute top-4 right-8 text-primary_50 font-bold text-heading-sm hover:text-blue_50 transition-all"
        onClick={handleCloseModal}
      >
        X
      </button>
      <h1 className="text-[0.95rem] md:text-heading-md text-primary_30">
        <strong>{header}</strong>
      </h1>
      <h2 className="text-[0.85rem]">{message}</h2>
    </div>
  );
}
