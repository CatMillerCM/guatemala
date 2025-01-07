import { tzolkinGlyphs } from "@/data";

const getTzolkinDate = (daysElapsed) => {
  const tzolkinDayNumber = ((daysElapsed % 13) + 1);
  const tzolkinGlyph = tzolkinGlyphs[daysElapsed % 20];

  // return `${tzolkinDayNumber} ${tzolkinGlyph}`;
  return 'tzolkin';
};

export { getTzolkinDate };