import type {
  MetaContent,
  HeroContent,
  AboutContent,
  ServiceItem,
  ServicePillItem,
  TrustBarContent,
  WhyChooseUsContent,
  CoverageContent,
  MaintenanceContent,
  ProcessStep,
  ServiceAreaContent,
  FAQItemContent,
  ReviewsContent,
  ContactContent,
} from '@/lib/types';

export const meta: MetaContent = {
  businessName: 'Clovis Water Heater Pros',
  phone: '(559) 555-0142',
  emergencyPhone: '(559) 555-0142',
  textPhone: '(559) 555-0142',
  email: 'info@waterheaterrepairclovis.com',
  city: 'Clovis',
  state: 'CA',
  serviceAreaLabel: 'Serving Clovis & Nearby Areas',
  hours: 'Mon–Sat 7am–7pm',
  logoPath: '/logo/logo.svg',
  domain: 'waterheaterrepairclovis.com',
};

export const hero: HeroContent = {
  title: 'Water Heater Repair Clovis',
  subtitle: 'Emergency Hot Water Heater Repair Clovis CA',
  description:
    'No hot water before work, a leaking tank, or a water heater that suddenly stops heating? Our Clovis water heater technicians diagnose and repair tank, tankless, gas, and electric systems, restoring hot water quickly with clear recommendations and upfront pricing.',
 image: {
  src: '/images/water heater repair clovis hero.webp',
  alt: 'Clovis Water Heater Pros technician repairing a residential gas water heater in Clovis, California',
},
  trustIcons: [
    { icon: 'Clock', label: '24/7 Emergency' },
    { icon: 'Zap', label: 'Same-Day Response' },
    { icon: 'DollarSign', label: 'Upfront Pricing' },
    { icon: 'Wrench', label: 'Major Brands Serviced' },
  ],
  emergencyCard: {
    title: 'No Hot Water Right Now?',
    description: 'Call our emergency line - a technician is standing by.',
    buttonText: 'Call Now',
  },
};

export const trustBar: TrustBarContent = {
  items: [
    { icon: 'ShieldCheck', label: 'Licensed & Insured' },
    { icon: 'Clock', label: 'Same-Day Appointments' },
    { icon: 'DollarSign', label: 'Upfront, Flat-Rate Pricing' },
    { icon: 'Award', label: '15+ Years in the Central Valley' },
  ],
};

export const about: AboutContent = {
  title: 'Clovis Water Heater Specialists Across Clovis & the Central Valley',

  description:
    'We are Clovis, California\'s dedicated water heater repair and replacement specialists, serving homeowners, multi-family properties, and commercial buildings across the Central Valley. From an older gas tank in a Clovis garage to a high-efficiency tankless system in a newer Fresno home, our technicians understand the full range of water heater systems found throughout the area and the common failure points that shorten equipment life.',

  bullets: [
    'We carry the most common Clovis water heater parts Rheem, Bradford White, AO Smith, Rinnai, and Navien on every service vehicle, so most Clovis repairs are completed in a single visit.',
    'Every Clovis repair includes a full gas connection and pressure relief check before we leave, as recommended under California gas appliance safety guidelines.',
    'We give Clovis homeowners the repair cost upfront, with no inflated emergency surcharge hidden in the invoice after the work is done.',
  ],

  stats: [
    { value: '24/7', label: 'Emergency Line' },
    { value: '15+', label: 'Communities' },
    { value: 'Free', label: 'Diagnostic' },
  ],
  image: {
  src: '/images/clovis-water-heater-specialists.webp',
  alt: 'Clovis Water Heater Pros technician servicing a residential water heater with copper piping inside a Clovis California home.',
},
};

export const services: ServiceItem[] = [
  {
    icon: 'Siren',
    title: 'Emergency Hot Water Restoration',
    description:
      'A failed water heater rarely gives warning. One morning the shower runs cold, or you find a puddle spreading across the garage floor. In Clovis\'s Central Valley climate, hard groundwater accelerates sediment buildup, which means tanks here often fail faster and with less warning than in other regions. Our emergency response is built around getting a technician to your door fast not just scheduling you into next week.',
    symptoms: [
      'Complete loss of hot water',
      'Water pooling around the tank base',
      'Burning smell or scorch marks near the unit',
      'Loud popping or rumbling from the tank',
    ],
    causes: [
      'Heating element or burner failure',
      'Gas control valve malfunction',
      'Tank leak from internal corrosion',
      'Tripped breaker or blown fuse',
    ],
    inspection: [
      'Gas supply and pilot assembly',
      'Electrical connections and breaker',
      'Tank integrity and relief valve',
      'Thermostat and high-limit switch',
    ],
    image: {
  src: '/images/emergency-hot-water-restoration-clovis.webp',
  alt: 'Clovis Water Heater Pros technician repairing a leaking residential tank water heater in a laundry room with a bucket and towel during an emergency service call.',
},
  },
  {
    icon: 'Flame',
    title: 'Tank Water Heater Repair',
    description:
      'Tank-style heaters are the most common unit in Clovis homes, from older ranch-style properties near Old Town to newer builds in the north Clovis subdivisions. They are reliable, but after 8-12 years sediment builds up, components wear out, and efficiency drops and Clovis\'s hard water speeds that timeline up considerably. Most tank problems are repairable the key is catching them before the tank itself fails.',
    symptoms: [
      'Lukewarm or inconsistent water temperature',
      'Rumbling or popping noises during heating cycles',
      'Discolored or rusty water from hot taps',
      'Water taking noticeably longer to reheat',
    ],
    causes: [
      'Sediment buildup in the tank bottom',
      'Worn anode rod allowing corrosion',
      'Faulty thermostat or heating element',
      'Deteriorating dip tube',
    ],
    inspection: [
      'Anode rod condition and replacement',
      'Thermostat calibration',
      'Heating element continuity',
      'Tank drain valve and flush',
    ],
    image: {
  src: '/images/tank-water-heater-repair-clovis.webp',
  alt: 'Technician inspecting the gas control valve and copper water connections on a traditional tank water heater inside a basement-style utility room in Clovis.',
},
  },
  {
    icon: 'Zap',
    title: 'Tankless Water Heater Repair',
    description:
      'Tankless units save energy and space, but they need regular descaling especially important given the mineral content in Central Valley water supplies, which scales heat exchangers faster than in soft-water regions. Tankless units also have more complex electronics than a tank. When a unit throws an error code, it takes a technician who knows the specific model to read it correctly and fix the root cause.',
    symptoms: [
      'Error code on the display panel',
      'Water fluctuates between hot and cold',
      'Unit fires up but shuts down mid-shower',
      'Reduced flow rate or pressure',
    ],
    causes: [
      'Mineral scale in the heat exchanger',
      'Flow sensor or inlet filter clog',
      'Igniter or flame rod failure',
      'Circuit board or sensor fault',
    ],
    inspection: [
      'Error code diagnostic readout',
      'Heat exchanger descaling',
      'Flow sensor and inlet screen',
      'Gas pressure and venting',
    ],
    image: {
  src: '/images/tankless-water-heater-repair-clovis.webp',
  alt: 'Clovis Water Heater Pros technician servicing a wall-mounted tankless water heater with the front panel open on the exterior of a California home.',
},
  },
  {
    icon: 'Flame',
    title: 'Gas Water Heater Service',
    description:
      'Gas water heater repair in Clovis, CA means fixing a properly burning pilot, a clean burner assembly, and a thermocouple that shuts gas off reliably. When any of those wear out, you get no hot water or worse, a safety hazard. We service the full gas train from the control valve to the flue, and every gas water heater we install or repair meets current California and local Clovis building code requirements, including proper venting and combustion air clearance.',
    symptoms: [
      'Pilot light keeps going out',
      'Burner flame is yellow instead of blue',
      'Smell of gas near the unit',
      'No hot water but tank is full',
    ],
    causes: [
      'Thermocouple or flame sensor failure',
      'Dirty or clogged burner orifice',
      'Gas control valve malfunction',
      'Draft inducer or venting issue',
    ],
    inspection: [
      'Pilot assembly and thermocouple',
      'Burner flame pattern and orifice',
      'Gas supply pressure',
      'Vent pipe and draft hood',
    ],
    image: {
  src: '/images/gas-water-heater-service-clovis.webp',
  alt: 'Technician performing gas water heater service by inspecting the burner compartment, vent pipe, and gas control valve inside a Clovis laundry room.',
},
  },
  {
    icon: 'Zap',
    title: 'Electric Water Heater Service',
    description:
      'Electric heaters have no burner or venting, but they rely on two heating elements, thermostats, and a high-limit switch. When one element fails during electric water heater repair in Clovis, you get warm water that runs out fast. We test each component individually and replace only what is actually broken.',
    symptoms: [
      'Water runs out after a few minutes',
      'No hot water at all',
      'Circuit breaker trips repeatedly',
      'Ticking or sizzling from the unit',
    ],
    causes: [
      'Lower or upper heating element burnout',
      'Thermostat stuck or mis-calibrated',
      'High-limit switch tripping',
      'Wiring corrosion or loose connection',
    ],
    inspection: [
      'Both heating elements with ohmmeter',
      'Upper and lower thermostat operation',
      'High-limit switch reset and test',
      'Electrical connections and breaker',
    ],
    image: {
  src: '/images/electric-water-heater-repair-clovis.webp',
  alt: 'Clovis Water Heater Pros technician replacing an electric water heater thermostat through the open access panel using a multimeter and insulated tools.',
},
  },
  {
    icon: 'Replace',
    title: 'Water Heater Replacement',
    description:
      'When a tank is leaking from the bottom or a unit is past its service life, repair is no longer safe or cost-effective. Every replacement we install includes proper seismic strapping required under California law to keep the unit secure and prevent gas line rupture during an earthquake. We help you choose the right replacement, sized correctly for your household, energy-efficient, and installed to code, and haul away the old unit.',
    symptoms: [
      'Tank is more than 10–12 years old',
      'Visible rust or corrosion on the shell',
      'Water leaking from the tank itself',
      'Repair estimates approaching replacement cost',
    ],
    causes: [
      'Internal tank corrosion from a depleted anode rod',
      'Cracked or rusted weld seams',
      'Scale damage beyond descaling',
      'Obsolete or unsupported model',
    ],
    inspection: [
      'Tank age and serial number decode',
      'Leak source - fitting vs tank body',
      'Household demand and sizing calculation',
      'Gas line or electrical capacity for new unit',
    ],
    image: {
  src: '/images/water-heater-replacement-clovis.webp',
  alt: 'Clovis Water Heater Pros technician installing a new gas tank water heater while an old disconnected water heater sits on a hand truck nearby.',
},
  },
  {
    icon: 'Building2',
    title: 'Commercial Water Heater Service',
    description:
      'Restaurants, laundries, apartment complexes, and office buildings across Clovis and the greater Fresno area depend on high-recovery commercial heaters and recirculation systems. A downtime event means lost revenue and unhappy tenants. We carry commercial-grade parts and work around your schedule to minimize disruption.',
    symptoms: [
      'Insufficient hot water during peak demand',
      'Recirculation pump running but no flow',
      'Multiple units out of sync',
      'High gas or electric bills from an inefficient unit',
    ],
    causes: [
      'Undersized or failing commercial heater',
      'Recirculation pump or check valve failure',
      'Scale buildup in high-recovery heat exchangers',
      'Staging or sequencing control malfunction',
    ],
    inspection: [
      'Demand load calculation vs unit capacity',
      'Recirculation loop and pump',
      'Commercial gas train and venting',
      'Staging controls and sensors',
    ],
    image: {
  src: '/images/commercial-water-heater-service-clovis.webp',
  alt: 'Technician servicing multiple commercial water heaters with industrial piping, gauges, and expansion tanks inside a mechanical room in Clovis California.',
},
  },
];

export const serviceCloud: ServicePillItem[] = [
  { label: 'Emergency Water Heater Repair' },
  { label: 'Tank Water Heater Service' },
  { label: 'Tankless Water Heater Repair' },
  { label: 'Gas Water Heater Service' },
  { label: 'Electric Water Heater Repair' },
  { label: 'Water Heater Replacement' },
  { label: 'Commercial Water Heaters' },
  { label: 'Pilot Light Repair' },
  { label: 'Thermocouple Replacement' },
  { label: 'Heating Element Replacement' },
  { label: 'Thermostat Repair' },
  { label: 'Pressure Relief Valve' },
  { label: 'Expansion Tank Installation' },
  { label: 'Anode Rod Replacement' },
  { label: 'Tank Descaling' },
  { label: 'Sediment Flush' },
  { label: 'Leaking Tank Repair' },
  { label: 'No Hot Water Diagnosis' },
  { label: 'Rusty Water Fix' },
  { label: 'Rheem Repair' },
  { label: 'Bradford White Repair' },
  { label: 'AO Smith Repair' },
  { label: 'Rinnai Tankless Service' },
  { label: 'Navien Tankless Repair' },
  { label: 'Takagi Service' },
  { label: 'Recirculation Pump Repair' },
];

export const whyChooseUs: WhyChooseUsContent = {
  title: 'Best Water Heater Repair Company in Colvis',
  description:
    'A water heater failure rarely waits for a convenient time. It means no hot water, potential flooding, and mounting damage the longer it goes unaddressed. Here is what homeowners and property managers across Clovis and the Central Valley get when they call us.',
  trustPoints: [
    '24/7 emergency response. No hot water is an emergency, day or night, and we dispatch fast across Clovis so you\'re never left waiting.',
    'Diagnosis-first, parts-second. We inspect the tank, element, and connections before quoting repairs, so you get the real reason it failed, not a guess.',
    'Upfront repair pricing. Full cost, parts and labor, shown before we start, with no emergency markups hidden in the final bill.',
    'All major brands serviced. Rheem, Bradford White, A.O. Smith, Rinnai, Navien, Takagi and more; tank or tankless, we carry the parts and expertise for your unit.',
    'Licensed & code-compliant work. All repairs are done by licensed technicians following state and local safety codes, so the job\'s done right and stays compliant.',
  ],
  emergencyCard: {
    title: 'Emergency Hot Water Line',
    description: 'Call now - a technician is ready to dispatch to your address.',
    buttonText: 'Call Now',
  },
};

export const coverage: CoverageContent = {
  title: 'What We Cover: Water Heater Repair in Colvis ',
  description:
    'Water heater problems aren\'t all the same size. Sometimes it\'s a bad thermostat or heating element, done in one visit. Other times it\'s a leaking tank or the unit needs full replacement. Either way, we check the system first, tell you plainly what\'s going on, and lock in your quote before starting. Below are the repairs and services we offer throughout Clovis.',
  checklist: [
    {
      title: 'Components We Service',
      items: [
        'Thermostats',
        'Heating elements',
        'Gas control valves',
        'Burner assemblies',
        'Pilot lights',
        'Thermocouples',
        'Pressure relief valves',
        'Expansion tanks',
        'Drain valves',
        'Anode rods',
        'Dip tubes',
        'Tankless flow sensors',
      ],
    },
    {
      title: 'Problems We Fix',
      items: [
        'Leaking tanks',
        'No hot water',
        'Not enough hot water',
        'Water pressure problems',
        'Rusty or discolored water',
        'Temperature too hot or too cold',
        'Pilot light keeps going out',
        'Loud rumbling or popping',
        'Error codes on tankless units',
        'Circuit breaker tripping',
        'Smell of gas near the unit',
        'Slow recovery time',
      ],
    },
  ],
  comparisonTitle: 'Repair or Replace Your Water Heater?',
  comparison: {
    repair: {
      title: 'Repair Makes Sense When',
      items: [
        'The tank is under 8–10 years old',
        'The leak is from a fitting, not the tank body',
        'A single component failed (thermostat, element, thermocouple)',
        'Sediment can be flushed and performance restored',
        'Repair cost is well under half the replacement cost',
      ],
    },
    replace: {
      title: 'Replacement Is Recommended When',
      items: [
        'The tank is over 10–12 years old',
        'The tank itself is leaking from the bottom',
        'Multiple components are failing at once',
        'Rust and corrosion are visible on the shell',
        'Your household has outgrown the current unit size',
        'Repair estimates approach replacement cost',
      ],
    },
    recommendation:
      'We will always give you an honest assessment. If a repair will safely extend the life of your unit, we will tell you. If replacement is the better investment, we will explain why - with the numbers - and never push a replacement you do not need.',
  },
};

export const maintenance: MaintenanceContent = {
  title: 'Prevent Costly Breakdowns Before They Happen',
  description:
    'A water heater that gets a yearly checkup lasts longer, runs more efficiently, and rarely fails without warning. Our maintenance plan is designed to catch the small problems - a weakening anode rod, a building sediment layer, a drifting thermostat - before they become an emergency.',
  preventiveTitle: 'Preventive Maintenance',
  preventiveItems: [
    'Sediment flushing to restore heating efficiency',
    'Anode rod inspection and replacement',
    'Pressure testing on the relief valve and expansion tank',
    'Annual full-system inspection with a written report',
    'Seasonal care - checking venting before winter and scaling before summer',
  ],
  benefits: [
    {
      icon: 'Gauge',
      title: 'Restored Efficiency',
      description:
        'A flushed tank heats water faster and uses less gas or electricity - lowering your utility bill.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Extended Lifespan',
      description:
        'Replacing the anode rod and catching corrosion early can add years to a tank that would otherwise fail.',
    },
    {
      icon: 'BellRing',
      title: 'Fewer Surprises',
      description:
        'Regular inspections catch worn components before they fail - so you are not surprised by a cold shower.',
    },
    {
      icon: 'FileText',
      title: 'Documented History',
      description:
        'Every visit comes with a written condition report, so you have a record when it is time to decide repair vs replace.',
    },
  ],
};

export const process: ProcessStep[] = [
  {
    step: 1,
    title: 'Call',
    description:
      'Tell us what is happening - no hot water, leaking tank, error code. We schedule same-day when possible.',
  },
  {
    step: 2,
    title: 'Diagnose',
    description:
      'The technician inspects the unit, tests each component, and identifies the root cause - not just the symptom.',
  },
  {
    step: 3,
    title: 'Explain Options',
    description:
      'You get a clear explanation of what is wrong, what it takes to fix it, and what it costs - before any work starts.',
  },
  {
    step: 4,
    title: 'Repair or Replace',
    description:
      'With your approval, we complete the repair or replacement using the right parts for your specific unit.',
  },
  {
    step: 5,
    title: 'Safety Testing',
    description:
      'We test gas connections, venting, electrical, pressure relief, and temperature to confirm everything is safe.',
  },
  {
    step: 6,
    title: 'Final Walkthrough',
    description:
      'We walk you through the work done, answer questions, and leave the area clean - no surprise charges.',
  },
];

export const serviceArea: ServiceAreaContent = {
  title: 'Water Heater Repair & Replacement Across Clovis & Nearby Areas',
  description:
    'We are based in Clovis (93611, 93612, 93613, 93619) and serve the surrounding Central Valley communities, including bordering Fresno neighborhoods (93720, 93730). If you are within these areas and your water heater has stopped working, we can usually have a technician at your door the same day.',
  nearbyAreas: [
    { name: 'Clovis (93611, 93612, 93613, 93619)' },
    { name: 'Fresno (93720, 93730)' },
    { name: 'Sanger' },
    { name: 'Selma' },
    { name: 'Kingsburg' },
    { name: 'Fowler' },
    { name: 'Madera' },
    { name: 'Parlier' },
    { name: 'Reedley' },
    { name: 'Orange Cove' },
    { name: 'Friant' },
    { name: 'Auberry' },
    { name: 'Prather' },
    { name: 'Shaver Lake' },
    { name: 'Tollhouse' },
  ],
  image: {
  src: '/images/clovis-service-area.webp',
  alt: 'Clovis California suburban neighborhood with palm trees and residential homes representing the Central Valley water heater service area.',
},
};

export const faqs: FAQItemContent[] = [
  {
    question: 'How fast can you get to my house in Clovis?',
    answer:
      'Most calls received before noon get a technician out the same day, whether you are in central Clovis (93611, 93612, 93613) or out toward the northeast (93619). Emergency calls are dispatched as quickly as possible - often within an hour or two depending on your location and the time of day.',
  },
  {
    question: 'How much does water heater repair cost?',
    answer:
      'Every repair starts with a diagnostic visit. Once the technician identifies the problem, you get a flat-rate price upfront - approved by you before any work begins. There are no hourly charges or surprise fees.',
  },
  {
    question: 'Should I repair or replace my water heater?',
    answer:
      'If your tank is under 10 years old and the problem is a single component (thermostat, element, thermocouple), repair is usually the right call. If the tank is leaking from the bottom, over 12 years old, or multiple parts are failing, replacement is typically the better investment. We will give you an honest assessment either way.',
  },
  {
    question: 'Do you work on tankless water heaters?',
    answer:
      'Yes. We service and repair all major tankless brands including Rinnai, Navien, Takagi, Rheem, and AO Smith. Tankless units need periodic descaling and have more complex electronics, so it is important to use a technician who knows the specific model.',
  },
  {
    question: 'What brands do you service?',
    answer:
      'We repair and replace Rheem, Bradford White, AO Smith, Rinnai, Navien, Takagi, State, Reliance, Kenmore, and most other brands sold in the Central Valley. Our trucks carry common parts for these manufacturers.',
  },
  {
    question: 'Do you offer same-day water heater replacement?',
    answer:
      'In many cases, yes. If your unit needs replacement, we can often remove the old heater and install a new one the same day - provided the new unit is available from our local supply. We will confirm timing when you call.',
  },
  {
    question: 'How long does a water heater last in Clovis?',
    answer:
      'A standard tank water heater typically lasts 10–12 years in the Central Valley. Tankless units can last 20 years or more with regular maintenance. Hard water and lack of maintenance are the biggest factors that shorten lifespan.',
  },
  {
    question: 'Do you handle commercial water heaters?',
    answer:
      'Yes. We service commercial water heaters and recirculation systems for restaurants, apartment complexes, laundries, and office buildings. We carry commercial-grade parts and can schedule work around your business hours.',
  },
  {
    question: 'How much does water heater repair cost in Clovis?',
    answer:
      'Most water heater repairs in Clovis run between $150 and $600, depending on the issue. A simple thermocouple or pilot assembly fix is usually on the lower end, while a heating element or gas valve replacement runs higher. After the diagnostic visit, we give you a firm, upfront price before any work begins, no hourly charges or hidden fees.',
  },
  {
    question: 'Why is my water heater not heating?',
    answer:
      'A few common culprits cause a water heater to stop producing hot water. On gas units, it\'s often a bad pilot light, faulty thermocouple, or failed gas valve. On electric units, a burnt-out heating element or tripped high-limit switch is usually to blame. Sediment buildup can also insulate the burner or element, cutting heating efficiency. Our technicians run a full diagnostic to pinpoint the exact cause before recommending a fix.',
  },
];

export const reviews: ReviewsContent = {
  title: 'What Clovis Homeowners Say',
  description:
    'We have been serving the Clovis community for over 15 years. Here is a sample of what our customers tell us after we get their hot water running again.',
  averageRating: 4.9,
  totalReviews: 312,
  reviews: [
    {
      name: 'Maria G.',
      rating: 5,
      date: 'February 2026',
      text: 'Our water heater died on a Sunday morning. Called the emergency line and a technician was at our house in under two hours. Diagnosed a bad thermocouple, had the part on the truck, and we had hot water back by noon. Fair price and no upselling.',
      service: 'Emergency Thermocouple Replacement',
    },
    {
      name: 'James T.',
      rating: 5,
      date: 'January 2026',
      text: 'I was told by another company I needed a whole new tank. These guys came out, found it was just a heating element, and saved me over a thousand dollars. Honest and straightforward - I will not call anyone else.',
      service: 'Heating Element Replacement',
    },
    {
      name: 'Patricia L.',
      rating: 5,
      date: 'December 2025',
      text: 'Our Rinnai tankless kept throwing an error code. Two other companies could not figure it out. This team knew exactly what it was - a scaled-up heat exchanger - descaled it, and it has been perfect since. Highly recommend for tankless.',
      service: 'Tankless Descaling & Repair',
    },
  ],
};

export const contact: ContactContent = {
  title: 'Contact Our Colvis Water Heater Repair Team',
  description:
    'No hot water, a leaking tank, a pressure issue, or just overdue for a tune-up? Reach out and our Clovis water heater technicians will get to you, covering residential and commercial properties across Clovis and the greater Central Valley.',
  phone: '(559) 555-0142',
  email: 'info@waterheaterrepairclovis.com',
  hours: 'Mon–Sat 7am–7pm',
  emergencyPhone: '(559) 555-0142',
  serviceArea: 'Clovis, CA (93611, 93612, 93613, 93619) and the surrounding Central Valley',
  image: {
  src: '/images/clovis-water-heater-team.webp',
  alt: 'Clovis Water Heater Pros service team with two male technicians and one female technician standing beside professional plumbing equipment and a branded service van.',
},
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101800.2!2d-119.75!3d36.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80914e5b5d5b5b5b%3A0x0!2sClovis%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000',
};
