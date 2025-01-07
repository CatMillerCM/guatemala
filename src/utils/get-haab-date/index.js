import { haabMonths } from "@/data";

const getHaabDate = (daysElapsed) => {
    const haabDayNumber = daysElapsed % 365;
    const haabMonthIndex = Math.floor(haabDayNumber / 20);

    const haabDay = haabDayNumber % 20;
    const haabMonth = haabMonths[haabMonthIndex];

    // return `${haabDay} ${haabMonth}`;
    return 'haab';
};

export { getHaabDate };