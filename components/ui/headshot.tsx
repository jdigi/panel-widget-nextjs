"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";

// TODO: properly TYPE all the props

export default function HeadShot({
  data,
  alt,
  width,
  height,
  className,
}: {
  data: any;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [reveal, setReveal] = useState(false);
  const visibility = reveal ? "visible" : "hidden";
  const loader = reveal ? "none" : "inline-block";

  return (
    <div
      className={`overflow-hidden flex flex-col items-center justify-center`}
      style={{
        width: `${width}px`,
        // height: `${height}px`,
        position: "relative",
      }}
    >
      <Image
        src={data?.portrait_image}
        alt={alt}
        width={width}
        height={height}
        style={{ visibility: visibility }}
        onError={() => setReveal(true)}
        onLoad={() => setReveal(true)}
        className="rounded-full mb-2"
      />
      <div className="text-body-md">Instructor:</div>
      <div className="text-body-md">{data?.first_name}</div>
      <span
        className="skeleton animate w-full h-full"
        style={{
          display: loader,
          position: "absolute",
          top: 0,
        }}
      ></span>
    </div>
  );
}
