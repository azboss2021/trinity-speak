export function getDaySuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function getTimeAgo(inputDate: Date): string {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  // Calculate time differences in milliseconds
  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;

  // Calculate time differences in appropriate units
  const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
  const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
  const daysAgo = Math.floor(timeDifference / millisecondsPerDay);

  // Return formatted string based on time difference
  if (timeDifference < millisecondsPerMinute) {
    return "Just now";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else {
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  }
}
