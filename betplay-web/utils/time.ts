export const getHoursAndMinutes = (date: string) => {
  const dateObject = new Date(date);

  const hours = String(dateObject.getUTCHours()).padStart(2, "0");
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, "0");

  const HHMM = `${hours}:${minutes}`;
  return HHMM;
};

export const getBettingSlipDate = (date: string) => {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getUTCHours()).padStart(2, "0");
  const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");

  const humanReadable = `${day}.${month}.${year} - ${hours}:${minutes}`;

  return humanReadable;
};
