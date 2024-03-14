import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-24">
      <div className="mt-[-5rem] flex flex-col items-center gap-y-4">
        <h1 className="text-title-sm lg:text-title-lg font-semibold text-primary_50">
          Panel Widget Prototype
        </h1>
        <Link
          href="/course/cb65ce7201234760b7e8a820ada5e61d"
          className="text-heading-sm text-blue_50 hover:underline transition-all"
        >
          Go to Course Page
        </Link>
      </div>
    </main>
  );
}
