export const getHoursAndMinutes = (date: string) => {
  const dateObject = new Date(date);

  const hours = String(dateObject.getUTCHours()).padStart(2, "0");
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, "0");

  const HHMM = `${hours}:${minutes}`;
  return HHMM;
};
