"use client";
import { Suspense, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "../../hooks/useModal";
import { fetchPublic } from "../../utils/fetch";
import MessageModal from "../modal/message";
import CourseCard from "../card/course";
import ButtonBasic from "../ui/button";
import ButtonBookmark from "../ui/buttonicon";

export default function PanelWidget({
  data,
  courseId,
}: {
  data: any;
  courseId: string;
}) {
  const [classId, setClassId] = useState(0);
  const [savedCourses, setSavedCourses] = useState<number[]>([]); // [courseId1, courseId2, ...]
  const router = useRouter();
  const { openModal } = useModal();

  // function that pulls state from child component
  const handleState = (newValue: any) => {
    setClassId(newValue);
  };

  // route to enroll page with course and class IDs
  const enrollHandler = () => {
    // pass course (class) id to route to enroll page
    // pass course ID as URL param to enroll page
    // url = `/course/${classId}/enroll?selected_course=${courseId}`
    // router.push(`/course/${classId}/enroll?selected_course=${courseId}`);
    // ! pattern follows NN/g site when selecting a class for a course
    const msg = `"router.push(/course/${classId}/enroll?selected_course=${courseId})"`;
    const genericMsg = `You are being routed to Course/Class ID: ${classId} `;
    openModal(<MessageModal message={msg} header={genericMsg} />);
    // * would route user vs showing modal
  };

  const fpoBookmarkHandler = () => {
    // temp logic to show modal until API is ready
    const msg = `Fetch logic found in: bookmarkHandler(), getSavedCourses(), saveCourseHandler() deleteCourseHandler()`;
    const genericMsg = `You are Saving/Unsaving Course/Class ID: ${classId} `;
    openModal(<MessageModal message={msg} header={genericMsg} />);
  };

  const bookmarkHandler = () => {
    // TODO: implement this function once API is ready
    // check if course is saved
    // if saved, delete course
    // if not saved, save course
    if (savedCourses.includes(classId)) {
      deleteCourseHandler();
    } else {
      saveCourseHandler();
    }
  };

  const getSavedCourses = async () => {
    try {
      const savedCourses = await fetchPublic(
        "/api/profile/saved/courses",
        "GET",
        null,
        false
      );
      setSavedCourses(savedCourses);
    } catch (error) {
      console.log("failed to get saved courses: ", error);
    }
  };

  const saveCourseHandler = async () => {
    // assumes "course" means the ID from the course data provided
    try {
      const saveCourse = await fetchPublic(
        `/api/profile/saved/courses/${classId}`,
        "POST",
        null,
        false
      );
    } catch (error) {
      console.log("failed to save course: ", error);
    }
  };

  const deleteCourseHandler = async () => {
    // assumes "course" means the ID from the course data provided
    try {
      const saveCourse = await fetchPublic(
        `/api/profile/saved/courses/${classId}`,
        "DELETE",
        null,
        false
      );
    } catch (error) {
      console.log("failed to delte course: ", error);
    }
  };

  useEffect(() => {
    getSavedCourses();
  }, []);

  return (
    <section className="course-schedule md:col-span-3 flex flex-col gap-y-6">
      <h2 className="text-title-sm md:text-title-lg font-semibold">
        Course Dates
      </h2>
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((item: any, index: number) => (
          <CourseCard key={index} data={item} change={handleState} />
        ))}
      </Suspense>
      <div className="flex flex-col gap-y-6 items-center">
        <ButtonBasic
          optionalClasses="block w-full"
          text="Enroll in Course"
          handler={() => {
            enrollHandler();
          }}
        />
        <ButtonBookmark
          text="Save Course"
          handler={() => {
            fpoBookmarkHandler();
          }}
        />
      </div>
    </section>
  );
}
