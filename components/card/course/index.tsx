"use client";
import { Suspense, useEffect, useState } from "react";
import HeadShot from "../../ui/headshot";

export default function CourseCard({ data }: { data: any }) {
  return (
    <div className="grid grid-cols-4 py-8 px-6 rounded-lg border border-neutral_80 border-2 max-w-[29.5rem]">
      <header className="col-span-4">
        <label className="form-control">
          <input type="radio" name="radio" />
          Virtual Course
        </label>
      </header>
      <div className="col-span-3 pl-6">
        <h2 className="text-title-sm leading-[38px] font-bold">
          Monday & Tuesday, March 25 & 26
        </h2>
        <h3 className="text-title-sm font-normal">11 am - 2:30 pm</h3>
        <p className="text-body-md mb-6">New York City Time</p>
        <p className="text-body-md">
          <span className="font-bold">$1044 USD</span> Until February 29
        </p>
      </div>
      <div className="col-span-1">
        <HeadShot
          data={data?.instructors[0]}
          width={80}
          height={80}
          alt="test"
        />
      </div>
    </div>
  );
}
