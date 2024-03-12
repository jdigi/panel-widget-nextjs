import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import CourseWrapper from "../../../components/course/coursewrapper";

// export async function generateStaticParams() {
//   const path = process.cwd() + `/app/json/projects.json`;
//   const file = await fs.readFile(path, "utf8");
//   const projects = JSON.parse(file);

//   return projects.map((project: any) => [{ params: { slug: [project.slug] } }]);
// }

async function getCourseData(slug: string) {
  console.log("SLUG: ", slug);
  try {
    const res = await fetch(`https://crudcrud.com/api/${slug}/schedule/`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    console.log("DATA: ", data);
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
    title: `Jason DiGiacobbe | Senior Software Engineer | Frontend`,
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
