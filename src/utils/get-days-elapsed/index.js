const getDaysElapsed = (inputDate) => {
  const [year, month, day] = inputDate.split("-").map(Number);

  const gregorianDate = new Date(year, month - 1, day);
  const mayanCreationDate = new Date(-3113, 7, 11);

  const millisecondsElapsed = gregorianDate - mayanCreationDate;
  const daysElapsed = millisecondsElapsed/(1000 * 60 * 60 * 24);

  console.log(Math.floor(daysElapsed), "<<<Elapsed")

  return Math.floor(daysElapsed);
};

export { getDaysElapsed };