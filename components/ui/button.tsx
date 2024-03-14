"use client";

export default function ButtonBasic({
  text,
  handler,
  optionalClasses,
}: {
  text: String;
  handler: any;
  optionalClasses?: string;
}) {
  return (
    <button
      onClick={handler}
      className={`px-4 py-2 text-heading-md font-bold bg-primary_60 text-[#fff] rounded-lg hover:bg-primary_40 focus:bg-primary_40 focus:shadow-[0_0_0_2px_#4D0001] transition-all ${optionalClasses}`}
    >
      {text}
    </button>
  );
}
