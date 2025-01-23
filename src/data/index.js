const haabData = {
  'Pop': {
      definition: 'Mat',
      info: 'Pop is the first month of the Haab\' calendar, symbolizing community and marriage. It marks the beginning of the year, a time for gift-giving and festivities. This period is associated with leadership and the establishment of new beginnings.'
  },
  'Wo': {
      definition: 'Black Conjunction',
      info: 'Wo is associated with the frog and is a time when physicians and shamans make offerings to Itzamna, the god of magic and patron of priests. Predictions for the year are made, and priests are assigned their festival obligations during this month.'
  },
  'Sip': {
      definition: 'Red Conjunction',
      info: 'Sip is dedicated to Ek Zip, the god of hunting. Hunters and fishermen bless their tools and perform bloodletting ceremonies during this time. It is a period for seeking success in hunting and fishing activities.'
  },
  'Sotz\'': {
      definition: 'Bat',
      info: 'Sotz\' is associated with bats and bees. Beekeepers prepare for upcoming activities by fasting during this month. It may also be linked to the beginning of the darker months of the year.'
  },
  'Sek': {
      definition: 'No known translation',
      info: 'Sek is the time for the beekeepers\' festival. Offerings are made to the four Chaaks (rain gods), and honey is shared within the community. It is a period for honoring deities associated with rain and fertility.'
  },
  'Xul': {
      definition: 'Dog',
      info: 'Xul is dedicated to Chicc-kaban and Kukulcan, the Feathered Serpent. Marked by processions to community temples and accompanied by troupes of comedians, it is a time for communal gatherings and celebrations.'
  },
  'Yaxk\'in': {
      definition: 'New Sun',
      info: 'Yaxk\'in signifies the "new sun" and is associated with renewal and the sun god. It is a period for seeking health and prosperity, marking a time of transition and new beginnings.'
  },
  'Mol': {
      definition: 'Water',
      info: 'Mol is associated with water and jade. It is a time for ceremonies related to rain and water, essential for agricultural fertility. Rituals during this month aim to ensure sufficient rainfall for crops.'
  },
  'Ch\'en': {
      definition: 'Black Storm',
      info: 'Ch\'en is linked to the "black storm" and is a period for nocturnal ceremonies. It is associated with the moon and darkness, emphasizing introspection and reflection.'
  },
  'Yax': {
      definition: 'Green Storm',
      info: 'Yax represents the "green storm" and is associated with Venus. It is a time for rituals seeking balance and harmony, focusing on growth and renewal.'
  },
  'Sak': {
      definition: 'White Storm',
      info: 'Sak\' signifies the "white storm" and is linked to purification. Ceremonies during this month aim to cleanse and renew both the community and the individual.'
  },
  'Keh': {
      definition: 'Red Storm',
      info: 'Keh is associated with the "red storm" and the deer. It is a time for rituals seeking balance in nature and society, emphasizing harmony and peace.'
  },
  'Mak': {
      definition: 'Enclosed',
      info: 'Mak means "to enclose" or "cover." It is a period of introspection and secrecy, often associated with the preparation for the upcoming Wayeb period.'
  },
  'K\'ank\'in': {
      definition: 'Yellow Sun',
      info: 'K\'ank\'in translates to "yellow sun" and is associated with the earth and sun. It is a time for honoring deities related to agriculture and fertility.'
  },
  'Muwan': {
      definition: 'Owl',
      info: 'Muwan is linked to the owl and is associated with fire and rain. Rituals during this month focus on weather patterns and seeking protection from natural disasters.'
  },
  'Pax': {
      definition: 'Planting Time',
      info: 'Pax signifies "planting time" and is associated with warfare and planting. It is a period for preparing the fields and seeking strength and protection for the community.'
  },
  'K\'ayab': {
      definition: 'Turtle',
      info: 'K\'ayab is linked to the turtle and is associated with the moon goddess. It is a time for rituals honoring femininity, fertility, and the lunar cycle.'
  },
  'Kumk\'u': {
      definition: 'Granary',
      info: 'Kumk\'u translates to "granary" and is associated with maize and abundance. It is a period for giving thanks for the harvest and ensuring the storage of food supplies.'
  },
  'Wayeb': {
      definition: 'Unlucky Days',
      info: 'Wayeb consists of five nameless days considered unpredictable and unlucky. During this time, the Maya believed that the boundaries between the mortal realm and the underworld dissolved, necessitating rituals to ward off evil spirits and avoid misfortune.'
  }
};

const tzolkinData = {
  'Imix\'': {
      definition: 'Crocodile',
      info: 'Imix\' symbolises the sea, rivers, and lakes and is associated with the nawal of the sea. It\'s a day to ask for rain and the calming of mental and spiritual struggles. Those born on this day are intuitive, creative, and good workers.'
  },
  'Ik\'': {
      definition: 'Wind',
      info: 'Ik\' represents wind, breath, and life, suggesting the "breath of life." It is associated with communication and inspiration. This glyph signifies the vital energy that animates all living beings.'
  },
  'Ak\'b\'al': {
      definition: 'Night',
      info: 'Ak\'b\'al symbolises darkness, the underworld, and the realm of the nocturnal jaguar-sun. It is associated with early dawn and morning. This glyph represents the mysteries of the unknown and the subconscious mind.'
  },
  'K\'an': {
      definition: 'Yellow Corn',
      info: 'K\'an represents maize and abundance. It is associated with fertility and the cycles of life. This glyph signifies potential, growth, and the development of opportunities.'
  },
  'Chikchan': {
      definition: 'Serpent',
      info: 'Chikchan symbolises the life force and vitality. It is associated with spiritual awakening and the energy of transformation. This glyph represents primal power and the shedding of old skin for renewal.'
  },
  'Kimi': {
      definition: 'Death',
      info: 'Kimi represents death and the Lords of the Underworld. It is associated with the concept of transformation and the cycle of life and death. This glyph signifies the end of one phase and the beginning of another.'
  },
  'Manik\'': {
      definition: 'Deer',
      info: 'Manik\' embodies the qualities of the deer, symbolizing grace and harmony. It is associated with the Lord of the Hunt. This glyph represents balance, peace, and the connection to nature.'
  },
  'Lamat': {
      definition: 'Venus',
      info: 'Lamat symbolises the planet Venus and is associated with fertility and abundance. It represents the cycles of the stars and the harmony of the cosmos. This glyph signifies beauty, elegance, and the creative forces of the universe.'
  },
  'Muluk': {
      definition: 'Water',
      info: 'Muluk represents water and is associated with emotions and purification. It signifies the sacredness of water as a life-giving element. This glyph encourages adaptability and reflection.'
  },
  'Ok': {
      definition: 'Dog',
      info: 'Ok symbolises loyalty, guidance, and companionship. It represents the journey of the soul and protection on spiritual paths. This glyph embodies faithfulness and unconditional love.'
  },
  'Chuwen': {
      definition: 'Monkey',
      info: 'Chuwen is the symbol of creativity, playfulness, and artistry. It represents the joy of creation and the ability to weave life\'s experiences into meaningful patterns. This glyph embodies curiosity and innovation.'
  },
  'Eb\'': {
      definition: 'Road',
      info: 'Eb\' represents the path of life and the journey of the soul. It symbolises destiny, choices, and the guidance provided by higher forces. This glyph encourages progress and understanding.'
  },
  'B\'en': {
      definition: 'Reed',
      info: 'B\'en embodies strength, flexibility, and connection to higher ideals. It represents the spiritual pillar that connects the Earth and the heavens. This glyph encourages spiritual growth and community leadership.'
  },
  'Ix': {
      definition: 'Jaguar',
      info: 'Ix symbolises power, mystery, and the feminine force. It represents the connection to the earth and ancient wisdom. This glyph embodies courage and the ability to navigate the unseen realms.'
  },
  'Men': {
      definition: 'Eagle',
      info: 'Men represents vision, higher perspective, and freedom. It symbolises the ability to see beyond the ordinary and achieve great heights. This glyph encourages ambition and spiritual insight.'
  },
  'K\'ib\'': {
      definition: 'Owl/Vulture',
      info: 'K\'ib\' is associated with wisdom, forgiveness, and ancestral knowledge. It represents the transformative power of understanding and letting go. This glyph embodies introspection and enlightenment.'
  },
  'Kab\'an': {
      definition: 'Earth',
      info: 'Kab\'an symbolises harmony, movement, and synchronization with nature. It represents the rhythms of the Earth and the importance of living in balance. This glyph encourages awareness and responsibility for the planet.'
  },
  'Etz\'nab\'': {
      definition: 'Flint',
      info: 'Etz\'nab\' symbolises clarity, reflection, and the power of discernment. It represents the sharp edge of truth and the ability to cut through illusion. This glyph encourages honesty and self-awareness.'
  },
  'Kawak': {
      definition: 'Storm',
      info: 'Kawak represents renewal, purification, and the energy of transformation. It symbolises the forces of nature and the cleansing power of rain. This glyph encourages embracing change and inner growth.'
  },
  'Ajaw': {
      definition: 'Sun',
      info: 'Ajaw symbolises enlightenment, life, and unity. It represents the light that guides and nourishes all living things. This glyph embodies fulfillment, wholeness, and spiritual illumination.'
  }
};

const calendarInfo = {
  "The Haab Calendar": 'The Haab is the Maya civil calendar, often referred to as the "vague year" due to its 365-day cycle. While it resembles the Gregorian calendar we use today, the Haab doesn’t account for leap years. This structure reflects the solar year and was crucial for organising agricultural and civic activities.<br></br>A year in the Haab is divided into 18 months, each containing 20 days. The months are named:<br></br>Pop, Wo, Sip, Sotz’, Sek, Xul, Yaxk’in, Mol, Ch’en, Yax, Sak’, Keh, Mak, K’ank’in, Muwan, Pax, K’ayab, and Kumk’u, followed by a short 5-day period called Wayeb.<br></br>These final 5 days were considered an ominous time when the boundaries between the mortal and spiritual worlds were more permeable, and people often avoided significant activities.<br></br>The Haab’s structure showcases the Maya’s advanced understanding of time. It not only marked practical events like planting seasons but also carried deep cultural and spiritual significance, reflecting their close relationship with the natural world. During Wayeb, rituals were often performed to protect individuals from misfortune, underscoring the spiritual weight of this calendar.',
  "The Tzolk'in Calendar": 'The Tzolk’in, or Sacred Calendar, was central to Maya culture and is still used in some Maya communities today. It consists of 260 days, derived from two interlocking cycles: a numerical cycle of 1–13 and a sequence of 20 named days. Each day was assigned a unique combination of number and name, with the full cycle repeating every 260 days. This structure can be thought of as two "weeks" running concurrently—one with numbers and one with names.<br></br>The 20 day names in the Tzolk’in are:<br></br>Imix, Ik’, Ak’bal, K’an, Chikchan, Kimi, Manik’, Lamat, Muluk, Ok, Chuwen, Eb, Ben, Hix, Men, Kib, Kaban, Etz’nab, Kawak, and Ajaw.<br></br>Each glyph is enclosed within a “cartouche,” a circular frame often adorned with curls, symbolising the sacred nature of the day. These glyphs were intricately designed, reflecting the spiritual and artistic depth of the Maya.<br></br>The Tzolk’in guided spiritual and ceremonial life, determining auspicious days for events such as rituals, agricultural activities, and naming children. Each day carried profound symbolic meaning, influencing decisions and reinforcing the Maya belief in the interconnectedness of time, the cosmos, and human life.',
  "The Long Count Calendar": 'The Long Count Calendar was a linear system that tracked time from a specific starting point, the “creation date” of the current world, equivalent to August 11, 3114 BCE in the Gregorian calendar. Unlike the cyclical Tzolk’in and Haab, the Long Count allowed the Maya to measure extensive spans of time, crucial for recording historical events and predicting cosmic cycles.<br></br>This calendar divided time into units:<br></br>the k’in (1 day), the winal (20 days), the tun (360 days), the k’atun (7,200 days or 20 tuns), and the bak’tun (144,000 days or 20 k’atuns).<br></br>Dates were written in a hierarchical format, such as "12.19.4.1.8," representing each unit from largest to smallest. This precise system highlights the Maya’s mathematical ingenuity and their profound understanding of time.<br></br>The Long Count Calendar also held spiritual importance. Each cycle of creation was believed to have cosmic significance, with the completion of a bak’tun often marked by elaborate ceremonies. The calendar’s end date in 2012 inspired widespread interpretations, reflecting its enduring fascination in modern times.',
  "The Calendar Round": 'The Calendar Round combined the 260-day Tzolk’in and the 365-day Haab, creating a 52-year cycle. This period, known as the Calendar Round, marked the time it took for a specific date combination to reappear. Each date in the Calendar Round was expressed with four elements: the Tzolk’in day number, Tzolk’in day name, Haab day number, and Haab month name.<br></br>This system linked sacred and civil time, integrating spiritual beliefs with practical needs. For example, it was used to track agricultural cycles, ensuring alignment with seasonal changes, as well as to schedule rituals and festivals. The completion of a Calendar Round was celebrated with grand ceremonies, signifying the renewal of cosmic harmony.<br></br>By synchronising these two calendars, the Maya achieved an intricate understanding of time’s cyclical nature. The Calendar Round exemplifies their belief in the interconnectedness of the celestial and earthly realms, reinforcing the deep spiritual significance of their calendrical systems.',
  "The Lords Of The Night": 'Maya nights were ruled by nine “Lords of the Night,” deities who governed in a repeating cycle of nine nights. Each god had a unique glyph, symbolising their influence and character. These glyphs include:<br></br>G1, G2, G3, G4, G5, G6, G7, G8, and G9.<br></br>The sequence was perpetual, creating a spiritual rhythm that mirrored the passage of time.<br></br>The Lords of the Night were believed to influence dreams, omens, and nocturnal rituals. Their presence imbued the night with spiritual depth, and ceremonies were often aligned with the ruling lord to ensure cosmic balance. Each deity’s traits and domains shaped how the Maya approached nighttime activities and spiritual practices.<br></br>This nightly cycle reflects the Maya’s broader worldview, where time, the cosmos, and divine forces were deeply intertwined. The Lords of the Night serve as a testament to the Maya’s intricate cosmology, highlighting their belief in the harmony between earthly life and the divine.'
}

export {
  calendarInfo,
  haabData,
  tzolkinData
}