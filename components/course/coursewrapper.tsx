"use client";
import { Suspense, useEffect, useState } from "react";
import CourseCard from "../card/course";

export default function CourseWrapper({
  data,
  slug,
}: {
  data: any;
  slug: any;
}) {
  // useEffect(() => {
  //   console.log("DATA Yo: ", data);
  // }, [data]);

  return (
    <main className="relative max-w-screen-xl mx-auto grid grid-cols-7 py-24 gap-x-16">
      <section className="course-details col-span-4">
        <h1 className="text-title-lg text-primary_20 font-semibold mb-8">
          UX Basic Training
        </h1>
        <h2 className="text-heading-md mb-6">
          Foundational concepts that everyone should know
        </h2>
        <p className="text-body-md">
          User experience (UX) is a powerful philosophy that includes processes
          for delivering digital products that delight users while achieving a
          business or organization’s goals. However, UX can be a challenging and
          difficult topic to learn on your own.
        </p>
      </section>
      <section className="course-schedule col-span-3 flex flex-col gap-y-6">
        <h2 className="text-heading-sm font-base">Register for This Course</h2>
        <Suspense fallback={<div>Loading...</div>}>
          {data.map((item: any, index: number) => (
            <CourseCard key={index} data={item} />
          ))}
        </Suspense>
      </section>
    </main>
  );
}
