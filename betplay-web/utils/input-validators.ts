export const testIfPositiveInteger = (value: string): boolean => {
  const regex = /^[0-9]+$/;
  const regexStartsWithZero = /^0.{1,}$/;

  return (
    (regex.test(value) && !regexStartsWithZero.test(value)) || value === ""
  );
};
