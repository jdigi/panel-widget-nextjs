"use client";
import { useEffect, useState } from "react";
import HeadShot from "../../ui/headshot";

export default function CourseCard({ data }: { data: any }) {
  const [isTwoDays, setIsTwoDays] = useState(false);
  const [courseTimeStart, setCourseTimeStart] = useState("");
  const [courseTimeEnd, setCourseTimeEnd] = useState("");
  const [dayOneDay, setDayOneDay] = useState("");
  const [dayOneMonth, setDayOneMonth] = useState("");
  const [dayTwoDay, setDayTwoDay] = useState("");
  const [dayTwoDate, setDayTwoDate] = useState("");
  const [dayOneWithMonth, setDayOneWithMonth] = useState("");
  const [validUntilDate, setValidUntilDate] = useState("");

  // TODO: add better typing
  const convertTimestamp = (timestamp: number, option: any) => {
    // convert raw seconds based timestamp to Date string
    const convertedDateTime = new Date(timestamp * 1000);
    // return new formated date string with given option params
    return new Intl.DateTimeFormat("en-US", option).format(convertedDateTime);
  };

  const timezoneStringConversion = (timezone: string) => {
    // TODO: need to know all possible timezone values
    // TODO: need to know all possible conversion values
    // using default value from PRD and design spec for now
    if (timezone === "America/New_York") {
      return "New York City Time";
    }
  };

  const currencyConversion = (num: number, currency: string) => {
    let formatDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      notation: "standard",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      useGrouping: false,
    });
    return formatDollar.format(num);
  };

  useEffect(() => {
    const convertDates = (arr: number[]) => {
      const optionsWeekday = { weekday: "long" };
      const optionsDate = { day: "numeric" };
      const optionsMonthDate = { month: "long", day: "numeric" };
      const optionsTime = { hour: "2-digit", minute: "2-digit", hour12: true };
      const optionsDayMonthDate = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };

      // check dates array length for multiple days
      if (arr.length > 1) {
        // convert day one dates and time
        const dayOneArr: any = arr[0];
        const dayOneDay = convertTimestamp(dayOneArr[0], optionsWeekday);
        const dayOneMonth = convertTimestamp(dayOneArr[0], optionsMonthDate);
        const dayOneTimeStart = convertTimestamp(dayOneArr[0], optionsTime);
        // convert day two dates and time
        const dayTwoArr: any = arr[1];
        const dayTwoDay = convertTimestamp(dayTwoArr[0], optionsWeekday);
        const dayTwoDate = convertTimestamp(dayTwoArr[0], optionsDate);
        const dayTwoTimeEnd = convertTimestamp(dayTwoArr[1], optionsTime);
        // set state for multiple day course
        setCourseTimeStart(dayOneTimeStart);
        setCourseTimeEnd(dayTwoTimeEnd);
        setDayOneDay(dayOneDay);
        setDayOneMonth(dayOneMonth);
        setDayTwoDay(dayTwoDay);
        setDayTwoDate(dayTwoDate);
        setIsTwoDays(true);
      } else {
        // convert day one dates and time
        const dayOneArr: any = arr[0];
        const dayOneWithMonth = convertTimestamp(
          dayOneArr[0],
          optionsDayMonthDate
        );
        const dayOneTimeStart = convertTimestamp(dayOneArr[0], optionsTime);
        const dayOneTimeEnd = convertTimestamp(dayOneArr[1], optionsTime);
        // set state for single day course
        setDayOneWithMonth(dayOneWithMonth);
        setCourseTimeStart(dayOneTimeStart);
        setCourseTimeEnd(dayOneTimeEnd);
        setIsTwoDays(false);
      }

      // convert valid until date
      const validUntil = convertTimestamp(
        data?.pricing?.valid_until,
        optionsMonthDate
      );
      setValidUntilDate(validUntil);
    };

    convertDates(data?.dates);
  }, [data]);

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
          {isTwoDays
            ? `${dayOneDay} & ${dayTwoDay}, ${dayOneMonth} & ${dayTwoDate}`
            : `${dayOneWithMonth}`}
        </h2>
        <h3 className="text-title-sm font-normal">
          {courseTimeStart} - {courseTimeEnd}
        </h3>
        <p className="text-body-md mb-6">
          {timezoneStringConversion(data?.location?.timezone)}
        </p>
        <p className="text-body-md">
          <span className="font-bold">
            {currencyConversion(data?.pricing?.amount, data?.pricing?.currency)}{" "}
            {data?.pricing?.currency.toUpperCase()}
          </span>{" "}
          Until {validUntilDate}
        </p>
      </div>
      <div className="col-span-1">
        <HeadShot
          data={data?.instructors[0]}
          width={80}
          height={80}
          alt={"test"}
        />
      </div>
    </div>
  );
}
