const getDaysElapsed = (gregorianDate) => {
  const mayanCreationDate = new Date(-3113, 7, 11);

  const millisecondsElapsed = gregorianDate - mayanCreationDate;
  const daysElapsed = millisecondsElapsed/(1000 * 60 * 60 * 24);

  return Math.floor(daysElapsed);
};

export { getDaysElapsed };