export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInNew_York(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to New York's time
  const offsetNew_York = -5; // New York is (UTC-5), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetNew_York);

  return now;
}

export function formatTimeForNew_York(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/New_York",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "STD", but do remember that New York switches between EST/STD and DST.
  formattedTime += " EST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
