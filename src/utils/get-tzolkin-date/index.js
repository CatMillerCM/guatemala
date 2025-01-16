import { tzolkinData } from "@/data";

const INITIAL_TZOLKIN_START_DAY_NUMBER = 4;
const TZOLKIN_DAYS_PER_CYCLE = 13;
const TZOLKIN_GLYPHS_TOTAL = 20;

const getTzolkinDate = (daysElapsed) => {
  const tzolkinGlyphs = Object.keys(tzolkinData);

  const tzolkinDayNumber = (daysElapsed % TZOLKIN_DAYS_PER_CYCLE) + INITIAL_TZOLKIN_START_DAY_NUMBER;
  const tzolkinGlyph = tzolkinGlyphs[(daysElapsed % TZOLKIN_GLYPHS_TOTAL) - 1];

  return `${tzolkinDayNumber} ${tzolkinGlyph}`;
};

export { getTzolkinDate };
