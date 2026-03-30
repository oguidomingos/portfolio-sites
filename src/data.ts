export interface Site {
  name: string;
  displayName: string;
  url: string;
  category: string;
  location: string;
}

export const categories = [
  { id: 'restaurants-br', label: 'Restaurantes (BR)', icon: '🍽️' },
  { id: 'handyman', label: 'Handyman Services', icon: '🔧' },
  { id: 'lawn', label: 'Lawn Care', icon: '🌿' },
  { id: 'painting', label: 'Painting', icon: '🎨' },
  { id: 'plumbing', label: 'Plumbing', icon: '🔩' },
  { id: 'pest', label: 'Pest Control', icon: '🐛' },
  { id: 'cleaning', label: 'Cleaning', icon: '✨' },
  { id: 'landscape', label: 'Landscaping', icon: '🌳' },
  { id: 'pressure', label: 'Pressure Washing', icon: '💧' },
  { id: 'other', label: 'Other Services', icon: '⚡' },
];

export const sites: Site[] = [
  // Restaurants (BR)
  { name: 'site-paulista', displayName: 'Restaurante Taguatinga do Paulista', url: 'https://oguidomingos.github.io/site-paulista/', category: 'restaurants-br', location: 'Taguatinga, DF' },
  { name: 'site-fogo-galpao', displayName: 'Churrascaria Fogo do Galpão', url: 'https://oguidomingos.github.io/site-fogo-galpao/', category: 'restaurants-br', location: 'Ceilândia, DF' },
  { name: 'site-paladar-goiano', displayName: 'Restaurante Paladar Goiano', url: 'https://oguidomingos.github.io/site-paladar-goiano/', category: 'restaurants-br', location: 'Taguatinga, DF' },
  { name: 'site-feijaozinho', displayName: 'Feijãozinho Restaurante', url: 'https://oguidomingos.github.io/site-feijaozinho/', category: 'restaurants-br', location: 'Taguatinga, DF' },
  { name: 'site-sabor-sertoes', displayName: 'Sabor dos Sertões', url: 'https://oguidomingos.github.io/site-sabor-sertoes/', category: 'restaurants-br', location: 'Ceilândia, DF' },
  { name: 'site-dona-isolina', displayName: 'Cantina Dona Isolina', url: 'https://oguidomingos.github.io/site-dona-isolina/', category: 'restaurants-br', location: 'Taguatinga, DF' },
  { name: 'site-zezinho', displayName: 'Zezinho Restaurante Carne de Sol', url: 'https://oguidomingos.github.io/site-zezinho/', category: 'restaurants-br', location: 'Taguatinga, DF' },

  // Handyman (US)
  { name: 'site-abners-handyman', displayName: "Abner's Handyman", url: 'https://oguidomingos.github.io/site-abners-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-bayview-handyman', displayName: 'Bayview Handyman', url: 'https://oguidomingos.github.io/site-bayview-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-bb-handyman', displayName: 'B&B Handyman', url: 'https://oguidomingos.github.io/site-bb-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-chris-gray-handyman', displayName: 'Chris Gray Handyman', url: 'https://oguidomingos.github.io/site-chris-gray-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-done-by-noon', displayName: 'Done By Noon', url: 'https://oguidomingos.github.io/site-done-by-noon/', category: 'handyman', location: 'US' },
  { name: 'site-dtl-handyman', displayName: 'DTL Handyman', url: 'https://oguidomingos.github.io/site-dtl-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-finishing-touches', displayName: 'Finishing Touches', url: 'https://oguidomingos.github.io/site-finishing-touches/', category: 'handyman', location: 'US' },
  { name: 'site-gary-depalma', displayName: 'Gary DePalma', url: 'https://oguidomingos.github.io/site-gary-depalma/', category: 'handyman', location: 'US' },
  { name: 'site-gaume-handyman', displayName: 'Gaume Handyman', url: 'https://oguidomingos.github.io/site-gaume-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-handy-howies', displayName: "Handy Howie's", url: 'https://oguidomingos.github.io/site-handy-howies/', category: 'handyman', location: 'US' },
  { name: 'site-handyman-danny', displayName: 'Handyman Danny', url: 'https://oguidomingos.github.io/site-handyman-danny/', category: 'handyman', location: 'US' },
  { name: 'site-handyman-hans', displayName: 'Handyman Hans', url: 'https://oguidomingos.github.io/site-handyman-hans/', category: 'handyman', location: 'Raleigh, NC' },
  { name: 'site-handyman-nextdoor', displayName: 'Handyman Nextdoor', url: 'https://oguidomingos.github.io/site-handyman-nextdoor/', category: 'handyman', location: 'US' },
  { name: 'site-handyman-pocket', displayName: 'Handyman in Your Pocket', url: 'https://oguidomingos.github.io/site-handyman-pocket/', category: 'handyman', location: 'US' },
  { name: 'site-harpers-handyman', displayName: "Harper's Handyman", url: 'https://oguidomingos.github.io/site-harpers-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-helping-hand-handyman', displayName: 'Helping Hand Handyman', url: 'https://oguidomingos.github.io/site-helping-hand-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-holgate-handyman', displayName: 'Holgate Handyman', url: 'https://oguidomingos.github.io/site-holgate-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-honey-do', displayName: 'Honey Do', url: 'https://oguidomingos.github.io/site-honey-do/', category: 'handyman', location: 'US' },
  { name: 'site-jemmzzoo-handyman', displayName: 'Jemmzzoo Handyman', url: 'https://oguidomingos.github.io/site-jemmzzoo-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-jones-handyman', displayName: 'Jones Handyman', url: 'https://oguidomingos.github.io/site-jones-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-leo-flores', displayName: 'Leo Flores Handyman', url: 'https://oguidomingos.github.io/site-leo-flores/', category: 'handyman', location: 'US' },
  { name: 'site-medinas-handyman', displayName: "Medina's Handyman", url: 'https://oguidomingos.github.io/site-medinas-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-nbf-handyman', displayName: 'No Better Friend Handyman', url: 'https://oguidomingos.github.io/site-nbf-handyman/', category: 'handyman', location: 'Denver, CO' },
  { name: 'site-neighborhood-handyman', displayName: 'Neighborhood Handyman', url: 'https://oguidomingos.github.io/site-neighborhood-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-nicely-dunn', displayName: 'Nicely Dunn', url: 'https://oguidomingos.github.io/site-nicely-dunn/', category: 'handyman', location: 'US' },
  { name: 'site-onestop-handyman', displayName: 'OneStop Handyman', url: 'https://oguidomingos.github.io/site-onestop-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-pdx-handyman', displayName: 'PDX Handyman', url: 'https://oguidomingos.github.io/site-pdx-handyman/', category: 'handyman', location: 'Portland, OR' },
  { name: 'site-pjp-handyman', displayName: 'PJP Handyman', url: 'https://oguidomingos.github.io/site-pjp-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-prime-skills', displayName: 'Prime Skills', url: 'https://oguidomingos.github.io/site-prime-skills/', category: 'handyman', location: 'US' },
  { name: 'site-quickfix-handyman', displayName: 'QuickFix Handyman', url: 'https://oguidomingos.github.io/site-quickfix-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-sa-handyman', displayName: 'SA Handyman', url: 'https://oguidomingos.github.io/site-sa-handyman/', category: 'handyman', location: 'San Antonio, TX' },
  { name: 'site-scotts-handyman', displayName: "Scott's Handyman", url: 'https://oguidomingos.github.io/site-scotts-handyman/', category: 'handyman', location: 'US' },
  { name: 'site-yourhandyman-atl', displayName: 'Your Handyman ATL', url: 'https://oguidomingos.github.io/site-yourhandyman-atl/', category: 'handyman', location: 'Atlanta, GA' },

  // Lawn Care (US)
  { name: 'site-absolute-lawn', displayName: 'Absolute Lawn Care', url: 'https://oguidomingos.github.io/site-absolute-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-affordable-lawn-stl', displayName: 'Affordable Lawn STL', url: 'https://oguidomingos.github.io/site-affordable-lawn-stl/', category: 'lawn', location: 'St. Louis, MO' },
  { name: 'site-avid-lawn', displayName: 'Avid Lawn Care', url: 'https://oguidomingos.github.io/site-avid-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-basic-folks-lawn', displayName: 'Basic Folks Lawn Care', url: 'https://oguidomingos.github.io/site-basic-folks-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-biggs-lawncare', displayName: 'Biggs Lawncare', url: 'https://oguidomingos.github.io/site-biggs-lawncare/', category: 'lawn', location: 'US' },
  { name: 'site-campbell-lawn', displayName: 'Campbell & Co Lawn Care', url: 'https://oguidomingos.github.io/site-campbell-lawn/', category: 'lawn', location: 'Memphis, TN' },
  { name: 'site-cutter-lawn', displayName: 'Cutter Lawn Care', url: 'https://oguidomingos.github.io/site-cutter-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-first-green-lawn', displayName: 'First Green Lawn', url: 'https://oguidomingos.github.io/site-first-green-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-funderburk-lawn', displayName: 'Funderburk Lawn', url: 'https://oguidomingos.github.io/site-funderburk-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-grass-wolverine', displayName: 'Grass Wolverine', url: 'https://oguidomingos.github.io/site-grass-wolverine/', category: 'lawn', location: 'US' },
  { name: 'site-lawnsavers', displayName: 'Lawnsavers', url: 'https://oguidomingos.github.io/site-lawnsavers/', category: 'lawn', location: 'Memphis, TN' },
  { name: 'site-reliable-lawn', displayName: 'Reliable Lawn Care', url: 'https://oguidomingos.github.io/site-reliable-lawn/', category: 'lawn', location: 'US' },
  { name: 'site-ventura-landscape', displayName: 'Ventura Landscape', url: 'https://oguidomingos.github.io/site-ventura-landscape/', category: 'landscape', location: 'US' },

  // Painting (US)
  { name: 'site-craigs-painting', displayName: "Craig's Painting", url: 'https://oguidomingos.github.io/site-craigs-painting/', category: 'painting', location: 'US' },
  { name: 'site-custom-painting-sd', displayName: 'Custom Painting SD', url: 'https://oguidomingos.github.io/site-custom-painting-sd/', category: 'painting', location: 'San Diego, CA' },
  { name: 'site-mikes-painting', displayName: "Mike's Painting", url: 'https://oguidomingos.github.io/site-mikes-painting/', category: 'painting', location: 'US' },
  { name: 'site-paisley-painting', displayName: 'Paisley Painting', url: 'https://oguidomingos.github.io/site-paisley-painting/', category: 'painting', location: 'US' },

  // Plumbing (US)
  { name: 'site-city-plumbers', displayName: 'City Plumbers', url: 'https://oguidomingos.github.io/site-city-plumbers/', category: 'plumbing', location: 'US' },
  { name: 'site-damirs-plumbing', displayName: "Damir's Plumbing", url: 'https://oguidomingos.github.io/site-damirs-plumbing/', category: 'plumbing', location: 'US' },
  { name: 'site-mgk-plumbing', displayName: 'MGK Plumbing', url: 'https://oguidomingos.github.io/site-mgk-plumbing/', category: 'plumbing', location: 'US' },

  // Pest Control
  { name: 'site-ipest-solutions', displayName: 'iPest Solutions', url: 'https://oguidomingos.github.io/site-ipest-solutions/', category: 'pest', location: 'Waco, TX' },

  // Cleaning
  { name: 'site-dallas-maids', displayName: 'Dallas Maids', url: 'https://oguidomingos.github.io/site-dallas-maids/', category: 'cleaning', location: 'Dallas, TX' },

  // Pressure Washing
  { name: 'site-grants-pressure', displayName: "Grant's Pressure Washing", url: 'https://oguidomingos.github.io/site-grants-pressure/', category: 'pressure', location: 'US' },
];
