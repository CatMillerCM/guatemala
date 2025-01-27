const { DateTime } = require('luxon');

const getDaysElapsed = (inputDate) => {
  const gregorianDate = DateTime.fromISO(inputDate, { zone: 'UTC' }).startOf('day');
  const mayanCreationDate = DateTime.fromObject({ year: -3113, month: 8, day: 11 }, { zone: 'UTC' }).startOf('day');

  const diffInDays = gregorianDate.diff(mayanCreationDate, 'days').days;

  return Math.floor(diffInDays);
};

export { getDaysElapsed };