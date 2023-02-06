const wovenPlanetSSWE: CareerEntry = {
  company: 'Woven Planet Holdings',
  department: 'Geo',
  team: 'Map Tooling',
  description: 'TBD',
  endYear: 2022,
  image: 'WovenPlanet',
  startYear: 2021,
  title: 'Senior Software Engineer',
};

const wovenPlanetEM: CareerEntry = {
  ...wovenPlanetSSWE,
  team: 'Map Services',
  description: 'TBD',
  endYear: 0,
  image: 'WovenPlanet',
  startYear: 2022,
  title: 'Software Engineering Manager',
};

const rakutenSWE: CareerEntry = {
  company: 'Rakuten Group',
  department: 'Big Data Department',
  team: 'Coupon Service Team',
  description: 'TBD',
  endYear: 2021,
  image: 'Rakuten',
  startYear: 2018,
  title: 'Full Stack Software Engineer',
};

const eatproCTO: CareerEntry = {
  company: 'Eat Pro Inc.',
  department: '',
  team: '',
  description: 'TBD',
  endYear: 0,
  image: 'Eatpro',
  startYear: 2017,
  title: 'Chief Technology Officer, Co-Founder',
};

const codecademy: CareerEntry = {
  company: 'Codecademy',
  department: 'Intensive Course Department',
  team: 'Mentoring Team',
  description: 'TBD',
  endYear: 2020,
  image: 'Codecademy',
  startYear: 2018,
  title: 'Software Engineering and Data Science Mentor',
};

const usmc: CareerEntry = {
  company: 'U.S. Department of Defense',
  department: 'Marine Corps',
  team: 'Military Police',
  description: 'TBD',
  endYear: 2016,
  image: 'USMC',
  startYear: 2011,
  title: 'Military Police Collision Investigator',
};

export const careerSummary: CareerEntry[] = [
  wovenPlanetEM,
  eatproCTO,
  wovenPlanetSSWE,
  rakutenSWE,
  codecademy,
  usmc,
];
