import { haabData } from "@/data";

const INITIAL_HAAB_START_DAY_NUMBER = 8;
const INITIAL_HAAB_START_MONTH = 'Kumk\'u';
const HAAB_DAYS_PER_MONTH = 20;

const getHaabDate = (daysElapsed) => {
    const haabMonths = Object.keys(haabData);

    const indexOfInitialHaabStartMonth = haabMonths.indexOf(INITIAL_HAAB_START_MONTH);
    const numberOfDaysPassedInYear = (indexOfInitialHaabStartMonth * HAAB_DAYS_PER_MONTH) + INITIAL_HAAB_START_DAY_NUMBER;

    const haabDayNumber = ((daysElapsed + numberOfDaysPassedInYear) % 365) % HAAB_DAYS_PER_MONTH;

    const haabMonthIndex = Math.floor(((daysElapsed + numberOfDaysPassedInYear) % 365) / HAAB_DAYS_PER_MONTH);
    const haabMonth = haabMonths[haabMonthIndex];

    return `${haabDayNumber} ${haabMonth}`;
};

export { getHaabDate };