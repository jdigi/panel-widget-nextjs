import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import CourseWrapper from "../../../components/course/coursewrapper";

async function getCourseData(slug: string) {
  // console.log("SLUG: ", slug);
  try {
    const res = await fetch(`https://crudcrud.com/api/${slug}/schedule/`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    notFound();
  }
}

type Props = {
  params: { slug: any };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  return {
    title: `Prototype | Panel Widget | Jason DiGiacobbe`,
  };
}

export default async function CoursePage({ params }: { params: any }) {
  const { slug } = params;
  const course = await getCourseData(slug);
  if (!course) {
    notFound();
  }
  return <CourseWrapper data={course} slug={slug}></CourseWrapper>;
}
