import { tzolkinData } from "@/data";

const INITIAL_TZOLKIN_START_DAY_NUMBER = 4;
const TZOLKIN_DAYS_PER_CYCLE = 13;
const TZOLKIN_GLYPHS_TOTAL = 20;

const getTzolkinDate = (daysElapsed) => {
  const tzolkinGlyphs = Object.keys(tzolkinData);

  const tzolkinDayNumber = ((daysElapsed + (INITIAL_TZOLKIN_START_DAY_NUMBER - 1)) % TZOLKIN_DAYS_PER_CYCLE) + 1;
  const tzolkinGlyphIndex = (daysElapsed % TZOLKIN_GLYPHS_TOTAL) - 1;

  const tzolkinGlyph = tzolkinGlyphs[tzolkinGlyphIndex === -1 ? 19 : tzolkinGlyphIndex];

  return `${tzolkinDayNumber} ${tzolkinGlyph}`;
};

export { getTzolkinDate };
