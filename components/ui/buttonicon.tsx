"use client";
import React from "react";
import { useState } from "react";
import IconBookmark from "../icons/bookmark";

export default function ButtonBookmark({
  text,
  handler,
}: {
  text: String;
  handler: any;
}) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    // toggle active state
    setActive(!active);
  };

  return (
    <button
      onClick={() => {
        toggleActive();
        handler();
      }}
      className="px-3 py-2 text-body-md font-semibold bg-white text-blue_50 rounded-lg transition-all flex justify-between gap-x-2 items-center hover:underline border border-2 border-[transparent] focus:border-blue_50"
    >
      <IconBookmark isActive={active} />
      {text}
    </button>
  );
}
