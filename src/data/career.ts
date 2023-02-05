const wovenPlanetSSWE: CareerEntry = {
  company: 'Woven Planet Holdings',
  department: 'Geo Department',
  team: 'Map Tooling',
  description: 'TBD',
  end_year: 2022,
  image: '',
  start_year: 2021,
  title: 'Senior Software Engineer',
};

const wovenPlanetEM: CareerEntry = {
  ...wovenPlanetSSWE,
  team: 'Map Services',
  description: 'TBD',
  end_year: 0,
  image: '',
  start_year: 2022,
  title: 'Software Engineering Manager',
};

const rakutenSWE: CareerEntry = {
  company: 'Rakuten Group',
  department: 'Big Data Department',
  team: 'Coupon Service Team',
  description: 'TBD',
  end_year: 2021,
  image: '',
  start_year: 2018,
  title: 'Full Stack Software Engineer',
};

const eatproCTO: CareerEntry = {
  company: 'Eat Pro Inc.',
  department: '',
  team: '',
  description: 'TBD',
  end_year: 0,
  image: '',
  start_year: 2017,
  title: 'Chief Technology Officer, Co-Founder',
};

const codecademy: CareerEntry = {
  company: 'Codecademy',
  department: 'Intensive Course Department',
  team: 'Mentoring Team',
  description: 'TBD',
  end_year: 2020,
  image: '',
  start_year: 2018,
  title: 'Software Engineering and Data Science Mentor (Part-time)',
};

const usmc: CareerEntry = {
  company: 'U.S. Department of Defense',
  department: 'Marine Corps',
  team: 'Military Police',
  description: 'TBD',
  end_year: 2016,
  image: '',
  start_year: 2011,
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
