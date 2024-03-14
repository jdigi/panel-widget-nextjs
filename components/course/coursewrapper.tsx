"use client";
import PanelWidget from "./panel";
import Link from "next/link";

export default function CourseWrapper({
  data,
  slug,
}: {
  data: any;
  slug: string;
}) {
  return (
    <main className="px-4 py-12 relative max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-7 md:py-24 gap-x-16 gap-y-6">
      <section className="course-details md:col-span-4">
        <h1 className="text-title-lg text-primary_20 font-semibold mb-4">
          Course Title Goes Here
        </h1>
        <h2 className="text-heading-md mb-3">
          Subheading about course goes here
        </h2>
        <p className="text-body-md mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Link
          href="/"
          className="text-base text-blue_50 hover:underline transition-all"
        >
          Go to Home Page
        </Link>
      </section>
      <PanelWidget data={data} courseId={slug} />
    </main>
  );
}
