const haabMonths = {
  'Pop': {
      definition: 'Mat',
      info: 'Pop is the first month of the Haab\' calendar, symbolizing community and marriage. It marks the beginning of the year, a time for gift-giving and festivities. This period is associated with leadership and the establishment of new beginnings.'
  },
  'Wo': {
      definition: 'Black Conjunction',
      info: 'Wo’ is associated with the frog and is a time when physicians and shamans make offerings to Itzamna, the god of magic and patron of priests. Predictions for the year are made, and priests are assigned their festival obligations during this month.'
  },
  'Sip': {
      definition: 'Red Conjunction',
      info: 'Sip is dedicated to Ek Zip, the god of hunting. Hunters and fishermen bless their tools and perform bloodletting ceremonies during this time. It is a period for seeking success in hunting and fishing activities.'
  },
  'Sotz\'': {
      definition: 'Bat',
      info: 'Sotz’ is associated with bats and bees. Beekeepers prepare for upcoming activities by fasting during this month. It may also be linked to the beginning of the darker months of the year.'
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
      info: 'Yaxk’in signifies the "new sun" and is associated with renewal and the sun god. It is a period for seeking health and prosperity, marking a time of transition and new beginnings.'
  },
  'Mol': {
      definition: 'Water',
      info: 'Mol is associated with water and jade. It is a time for ceremonies related to rain and water, essential for agricultural fertility. Rituals during this month aim to ensure sufficient rainfall for crops.'
  },
  'Ch\'en': {
      definition: 'Black Storm',
      info: 'Ch’en is linked to the "black storm" and is a period for nocturnal ceremonies. It is associated with the moon and darkness, emphasizing introspection and reflection.'
  },
  'Yax': {
      definition: 'Green Storm',
      info: 'Yax represents the "green storm" and is associated with Venus. It is a time for rituals seeking balance and harmony, focusing on growth and renewal.'
  },
  'Sak': {
      definition: 'White Storm',
      info: 'Sak’ signifies the "white storm" and is linked to purification. Ceremonies during this month aim to cleanse and renew both the community and the individual.'
  },
  'Keh': {
      definition: 'Red Storm',
      info: 'Keh is associated with the "red storm" and the deer. It is a time for rituals seeking balance in nature and society, emphasizing harmony and peace.'
  },
  'Mak': {
      definition: 'Enclosed',
      info: 'Mak means "to enclose" or "cover." It is a period of introspection and secrecy, often associated with the preparation for the upcoming Wayeb’ period.'
  },
  'K\'ank\'in': {
      definition: 'Yellow Sun',
      info: 'K’ank’in translates to "yellow sun" and is associated with the earth and sun. It is a time for honoring deities related to agriculture and fertility.'
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
      info: 'K’ayab’ is linked to the turtle and is associated with the moon goddess. It is a time for rituals honoring femininity, fertility, and the lunar cycle.'
  },
  'Kumk\'u': {
      definition: 'Granary',
      info: 'Kumk’u translates to "granary" and is associated with maize and abundance. It is a period for giving thanks for the harvest and ensuring the storage of food supplies.'
  },
  'Wayeb': {
      definition: 'Unlucky Days',
      info: 'Wayeb’ consists of five nameless days considered unpredictable and unlucky. During this time, the Maya believed that the boundaries between the mortal realm and the underworld dissolved, necessitating rituals to ward off evil spirits and avoid misfortune.'
  }
};

const tzolkinGlyphs = {
  'Imix\'': {
      definition: 'Crocodile',
      info: 'Imix symbolizes the sea, rivers, and lakes. It is associated with the nawal of the sea and is a day to ask for rain and the calming of mental and spiritual disorders. Those born on this day are intuitive, creative, and good workers.'
  },
  'Ik\'': {
      definition: 'Wind',
      info: 'Ik represents wind, breath, and life, suggesting the "breath of life." It is associated with communication and inspiration. This glyph signifies the vital energy that animates all living beings.'
  },
  'Ak\'b\'al': {
      definition: 'Night',
      info: 'Akbal symbolizes darkness, the underworld, and the realm of the nocturnal jaguar-sun. It is associated with early dawn and morning. This glyph represents the mysteries of the unknown and the subconscious mind.'
  },
  'K\'an': {
      definition: 'Seed',
      info: 'Kan represents maize and abundance. It is associated with fertility and the cycles of life. This glyph signifies potential, growth, and the development of opportunities.'
  },
  'Chikchan': {
      definition: 'Serpent',
      info: 'Chicchan symbolizes the life force and vitality. It is associated with spiritual awakening and the energy of transformation. This glyph represents primal power and the shedding of old skin for renewal.'
  },
  'Kimi': {
      definition: 'Death',
      info: 'Cimi represents death and the Lords of the Underworld. It is associated with the concept of transformation and the cycle of life and death. This glyph signifies the end of one phase and the beginning of another.'
  },
  'Manik\'': {
      definition: 'Deer',
      info: 'Manik embodies the qualities of the deer, symbolizing grace and harmony. It is associated with the Lord of the Hunt. This glyph represents balance, peace, and the connection to nature.'
  },
  'Lamat': {
      definition: 'Star',
      info: 'Lamat symbolizes the planet Venus and is associated with fertility and abundance. It represents the cycles of the stars and the harmony of the cosmos. This glyph signifies beauty, elegance, and the creative forces of the universe.'
  },
  'Muluk': {
      definition: 'Water',
      info: 'Muluk represents water and is associated with emotions and purification. It signifies the sacredness of water as a life-giving element. This glyph encourages adaptability and reflection.'
  },
  'Ok': {
      definition: 'Dog',
      info: 'Ok symbolizes loyalty, guidance, and companionship. It represents the journey of the soul and protection on spiritual paths. This glyph embodies faithfulness and unconditional love.'
  },
  'Chuwen': {
      definition: 'Monkey',
      info: 'Chuen is the symbol of creativity, playfulness, and artistry. It represents the joy of creation and the ability to weave life’s experiences into meaningful patterns. This glyph embodies curiosity and innovation.'
  },
  'Eb\'': {
      definition: 'Road',
      info: 'Eb represents the path of life and the journey of the soul. It symbolizes destiny, choices, and the guidance provided by higher forces. This glyph encourages progress and understanding.'
  },
  'B\'en': {
      definition: 'Reed',
      info: 'Ben embodies strength, flexibility, and connection to higher ideals. It represents the spiritual pillar that connects the Earth and the heavens. This glyph encourages spiritual growth and community leadership.'
  },
  'Ix': {
      definition: 'Jaguar',
      info: 'Ix symbolizes power, mystery, and the feminine force. It represents the connection to the earth and ancient wisdom. This glyph embodies courage and the ability to navigate the unseen realms.'
  },
  'Men': {
      definition: 'Eagle',
      info: 'Men represents vision, higher perspective, and freedom. It symbolizes the ability to see beyond the ordinary and achieve great heights. This glyph encourages ambition and spiritual insight.'
  },
  'K\'ib\'': {
      definition: 'Owl/Vulture',
      info: 'Cib is associated with wisdom, forgiveness, and ancestral knowledge. It represents the transformative power of understanding and letting go. This glyph embodies introspection and enlightenment.'
  },
  'Kab\'an': {
      definition: 'Earth',
      info: 'Caban symbolizes harmony, movement, and synchronization with nature. It represents the rhythms of the Earth and the importance of living in balance. This glyph encourages awareness and responsibility for the planet.'
  },
  'Etz\'nab\'': {
      definition: 'Flint',
      info: 'Etznab symbolizes clarity, reflection, and the power of discernment. It represents the sharp edge of truth and the ability to cut through illusion. This glyph encourages honesty and self-awareness.'
  },
  'Kawak': {
      definition: 'Storm',
      info: 'Kawak represents renewal, purification, and the energy of transformation. It symbolizes the forces of nature and the cleansing power of rain. This glyph encourages embracing change and inner growth.'
  },
  'Ajaw': {
      definition: 'Sun',
      info: 'Ajaw symbolizes enlightenment, life, and unity. It represents the light that guides and nourishes all living things. This glyph embodies fulfillment, wholeness, and spiritual illumination.'
  }
};

export {
  haabMonths,
  tzolkinGlyphs
}