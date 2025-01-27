const { DateTime } = require('luxon');

const getDaysElapsed = (gregorianDate) => {
  const gregorianDateLuxon = DateTime.fromISO(gregorianDate, { zone: 'America/Chicago' });
  const mayanCreationDateLuxon = DateTime.fromObject({ year: -3113, month: 8, day: 11 }, { zone: 'UTC' });
  
  const diffInDays = gregorianDateLuxon.diff(mayanCreationDateLuxon, 'days').days;

  return Math.floor(diffInDays);
};

export { getDaysElapsed };