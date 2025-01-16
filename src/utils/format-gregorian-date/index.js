const formatGregorianDate = (inputDate) => {
  const [year, month, day] = inputDate.split("-").map(Number);

  const gregorianDate = new Date(year, month - 1, day);

  const fullMonth = gregorianDate.toLocaleString('default', { month: 'long' });

  const daySuffix = (day % 10 === 1 && day !== 11) ? 'st' :
                    (day % 10 === 2 && day !== 12) ? 'nd' :
                    (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

  return `${day}${daySuffix} ${fullMonth} ${year}`;
}

export { formatGregorianDate };