const formatGregorianDate = (gregorianDate) => {
  const day = gregorianDate.getDate();
  const fullMonth = gregorianDate.toLocaleString('default', { month: 'long' });
  const year = gregorianDate.getFullYear();

  const daySuffix = (day % 10 === 1 && day !== 11) ? 'st' :
                    (day % 10 === 2 && day !== 12) ? 'nd' :
                    (day % 10 === 3 && day !== 13) ? 'rd' : 'th';

  return `${day}${daySuffix} ${fullMonth} ${year}`;
}

export { formatGregorianDate };