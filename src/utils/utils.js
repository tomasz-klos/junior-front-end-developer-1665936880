import dayjs from "dayjs";
import { TASK_STATUS, BUSINESSCONTEXT_STATUS } from "../helpers/constants";
import ActiveIcon from "../components/Icons/ActiveIcon";
import CompletedIcon from "../components/Icons/CompletedIcon";
import BlockedIcon from "../components/Icons/BlockedIcon";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const suffixes = [
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "st",
];

export const calculateTimeDifference = (created_at) => {
  let formatDate;
  const now = dayjs();
  const date = dayjs(created_at);
  const result = now.diff(date, "month");
  if (result > 0) {
    formatDate = `${result} months ago`;
    return formatDate;
  }

  const days = now.diff(date, "day");
  if (result === 0 && days !== 0) {
    formatDate = `${days} days ago`;
    return formatDate;
  }

  const hours = now.diff(date, "hour");
  if (days === 0 && hours !== 0) {
    formatDate = `${hours} hours ago`;
    return formatDate;
  }

  if (hours === 0) {
    const minutes = now.diff(date, "minute");
    formatDate = `${minutes} minutes ago`;
    return formatDate;
  }
};

export const getTimeFromDate = (createdDate) => {
  const hours = dayjs(createdDate).get("hour");
  const minutes = dayjs(createdDate).get("minute");
  const time = `${hours}:${minutes}`;
  return time;
};

export const formatDateToLong = (createdDate) => {
  const date = dayjs(createdDate);
  const indexOfMonth = dayjs(date).get("month");
  const day = dayjs(date).get("date");
  const difference = calculateTimeDifference(createdDate);
  const shortDate = `${difference}, ${day}${suffixes[day]} ${months[indexOfMonth]}`;
  return shortDate;
};

export const formatDateToShort = (createdDate) => {
  const date = dayjs(createdDate);
  const indexOfMonth = dayjs(date).get("month");
  const day = dayjs(date).get("date");
  const shortDate = `${months[indexOfMonth].slice(0, 3)} ${day}`;
  return shortDate;
};

export const formatTitle = (title) => {
  let formatedTitle = title.replaceAll("-", " ");
  return formatedTitle.charAt(0).toUpperCase() + formatedTitle.slice(1);
};

export const formatTitleAsPath = (title) => {
  let formatedTitle = title.replaceAll(" ", "-").toLowerCase();
  return formatedTitle;
};

export const selectIconToDisplay = (status) => {
  switch (status) {
    case TASK_STATUS.active:
      return <ActiveIcon />;
    case TASK_STATUS.completed:
      return <CompletedIcon />;
    case TASK_STATUS.blocked:
      return <BlockedIcon />;
    default:
      return <BlockedIcon />;
  }
};

const changeStatusToActive = (
  businessContexts,
  setBusinessContexts,
  businessContext
) => {
  const array = [...businessContexts];
  array.map((context) =>
    context === businessContext
      ? (context.status = BUSINESSCONTEXT_STATUS.active)
      : null
  );
  setBusinessContexts(array);
};

const changeStatusToDone = (
  businessContexts,
  setBusinessContexts,
  businessContext
) => {
  const array = [...businessContexts];
  array.map((context) =>
    context.status === BUSINESSCONTEXT_STATUS.active
      ? (context.status = BUSINESSCONTEXT_STATUS.done)
      : null
  );
  array.map((context) =>
    context === businessContext
      ? (context.status = BUSINESSCONTEXT_STATUS.active)
      : null
  );
  setBusinessContexts(array);
};

export const businessContextHandle = (
  businessContexts,
  setBusinessContexts,
  businessContext
) => {
  const { status } = businessContext;
  switch (status) {
    case BUSINESSCONTEXT_STATUS.new:
      return changeStatusToActive(
        businessContexts,
        setBusinessContexts,
        businessContext
      );
    case BUSINESSCONTEXT_STATUS.active:
      return;
    case BUSINESSCONTEXT_STATUS.done:
      return changeStatusToDone(
        businessContexts,
        setBusinessContexts,
        businessContext
      );
    default:
  }
};

export const setDoneContextToActive = (
  businessContexts,
  setBusinessContexts
) => {
  const array = [...businessContexts];
  if(array.length === 1) return;
  array.map((context) =>
    context.status === BUSINESSCONTEXT_STATUS.done
      ? (context.status = BUSINESSCONTEXT_STATUS.active)
      : null
  );
  setBusinessContexts(array);
};
