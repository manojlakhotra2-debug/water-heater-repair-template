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
  email: 'dispatch@cloviswaterheaterpros.com',
  city: 'Clovis',
  state: 'CA',
  serviceAreaLabel: 'Serving Clovis & Nearby Areas',
  hours: 'Mon–Sat 7am–7pm · 24/7 Emergency',
  logoPath: '/logo/logo.svg',
  domain: 'cloviswaterheaterpros.com',
};

export const hero: HeroContent = {
  title: 'Water Heater Repair & Replacement in Clovis',
  subtitle: 'Same-day service when your hot water stops',
  description:
    'When your water heater fails, you need a technician who can diagnose the problem, explain your options clearly, and get your hot water running again — without surprise charges. That is exactly what we do for homeowners across Clovis every day.',
  image: {
    src: 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Water heater technician repairing a tank water heater in Clovis.',
    prompt:
      'Realistic local plumbing technician repairing a residential water heater in a home garage, natural lighting, documentary style, no text overlays.',
  },
  trustIcons: [
    { icon: 'Clock', label: '24/7 Emergency' },
    { icon: 'Zap', label: 'Same-Day Response' },
    { icon: 'DollarSign', label: 'Upfront Pricing' },
    { icon: 'Wrench', label: 'Major Brands Serviced' },
  ],
  emergencyCard: {
    title: 'No Hot Water Right Now?',
    description: 'Call our emergency line — a technician is standing by.',
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
  title: 'Clovis Water Heater Specialists',
  description:
    'We are a local team focused exclusively on water heater repair and replacement — not general plumbing. That means we carry the right parts on the truck, we know the common failure points for every major brand, and we can usually restore hot water the same day you call. From a single residential tank in a Clovis garage to multi-family and commercial systems, we handle the full range.',
  bullets: [
    'Residential tank and tankless water heaters — gas and electric',
    'Multi-family and apartment recirculation systems',
    'Commercial water heaters for restaurants, laundries, and offices',
  ],
  stats: [
    { value: '15+', label: 'Years in the Central Valley' },
    { value: '4,200+', label: 'Repairs Completed' },
    { value: '98%', label: 'Same-Day First Visit' },
  ],
  image: {
    src: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Clovis water heater technician installing pipes on a residential system.',
    prompt:
      'Close-up of a plumber hands installing steel pipes indoors, skilled manual work, natural lighting, documentary style.',
  },
};

export const services: ServiceItem[] = [
  {
    icon: 'Siren',
    title: 'Emergency Hot Water Restoration',
    description:
      'A failed water heater rarely gives warning. One morning the shower runs cold, or you find a puddle spreading across the garage floor. Our emergency response is built around getting a technician to your door fast — not just scheduling you into next week.',
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
      src: 'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Emergency water heater repair technician working on pipes.',
      prompt:
        'Worker fixing pipes with tools in an indoor environment, urgent repair atmosphere, documentary style.',
    },
  },
  {
    icon: 'Flame',
    title: 'Tank Water Heater Repair',
    description:
      'Tank-style heaters are the most common unit in Clovis homes. They are reliable, but after 8–12 years sediment builds up, components wear out, and efficiency drops. Most tank problems are repairable — the key is catching them before the tank itself fails.',
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
      src: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tank water heater in a residential utility area.',
      prompt:
        'Residential water heater tank in a home utility closet, natural lighting, documentary style.',
    },
  },
  {
    icon: 'Zap',
    title: 'Tankless Water Heater Repair',
    description:
      'Tankless units save energy and space, but they need regular descaling and have more complex electronics than a tank. When a tankless unit throws an error code, it takes a technician who knows the specific model to read it correctly and fix the root cause.',
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
      src: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Technician servicing a tankless water heater system.',
      prompt:
        'Technician installing or repairing a heating system in an indoor workshop setting, documentary style.',
    },
  },
  {
    icon: 'Flame',
    title: 'Gas Water Heater Service',
    description:
      'Gas water heaters need a properly burning pilot, a clean burner assembly, and a thermocouple that shuts gas off reliably. When any of those wear out, you get no hot water — or worse, a safety hazard. We service the full gas train from the control valve to the flue.',
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
      src: 'https://images.pexels.com/photos/38730229/pexels-photo-38730229.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gas piping and meters for a residential water heater system.',
      prompt:
        'Row of gas meters and piping mounted on a wall, illustrating utility connections, documentary style.',
    },
  },
  {
    icon: 'Zap',
    title: 'Electric Water Heater Service',
    description:
      'Electric heaters have no burner or venting, but they rely on two heating elements, thermostats, and a high-limit switch. When one element fails, you get warm water that runs out fast. We test each component individually and replace only what is actually broken.',
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
      src: 'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Electric water heater pressure gauges and piping.',
      prompt:
        'Close-up view of an industrial manifold with pressure gauges and connected steel pipes, documentary style.',
    },
  },
  {
    icon: 'Replace',
    title: 'Water Heater Replacement',
    description:
      'When a tank is leaking from the bottom or a unit is past its service life, repair is no longer safe or cost-effective. We help you choose the right replacement — sized correctly for your household, energy-efficient, and installed to code — and haul away the old unit.',
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
      'Leak source — fitting vs tank body',
      'Household demand and sizing calculation',
      'Gas line or electrical capacity for new unit',
    ],
    image: {
      src: 'https://images.pexels.com/photos/8142971/pexels-photo-8142971.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Water heater replacement in a residential utility room.',
      prompt:
        'Bright minimalist utility room featuring modern fixtures and appliances, documentary style.',
    },
  },
  {
    icon: 'Building2',
    title: 'Commercial Water Heater Service',
    description:
      'Restaurants, laundries, apartment complexes, and office buildings depend on high-recovery commercial heaters and recirculation systems. A downtime event means lost revenue and unhappy tenants. We carry commercial-grade parts and work around your schedule.',
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
      src: 'https://images.pexels.com/photos/12779977/pexels-photo-12779977.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Commercial building mechanical room with piping.',
      prompt:
        'Industrial building facade with large machinery components and pipes visible, documentary style.',
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
  title: 'Why Clovis Homeowners Call Us First',
  description:
    'We are not a national chain or a referral service. We are a local team that has been repairing and replacing water heaters in Clovis and the surrounding Central Valley for over 15 years. When you call, you talk to a real person who dispatches a technician — not a call center reading a script.',
  trustPoints: [
    'Same-day appointments — most calls get a technician out the same day',
    'Upfront, flat-rate pricing approved before any work starts',
    'We repair and replace all major brands: Rheem, Bradford White, AO Smith, Rinnai, Navien, Takagi',
    'Workmanship guaranteed — if a repair fails, we come back at no charge',
    'Technicians arrive in stocked trucks — most parts are on board',
  ],
  emergencyCard: {
    title: 'Emergency Hot Water Line',
    description: 'Call now — a technician is ready to dispatch to your address.',
    buttonText: 'Call Now',
  },
};

export const coverage: CoverageContent = {
  title: 'What We Repair & Replace',
  description:
    'From a single faulty thermostat to a full tank replacement, here is a breakdown of the components and problems we handle every week in Clovis homes.',
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
      'We will always give you an honest assessment. If a repair will safely extend the life of your unit, we will tell you. If replacement is the better investment, we will explain why — with the numbers — and never push a replacement you do not need.',
  },
};

export const maintenance: MaintenanceContent = {
  title: 'Prevent Costly Breakdowns Before They Happen',
  description:
    'A water heater that gets a yearly checkup lasts longer, runs more efficiently, and rarely fails without warning. Our maintenance plan is designed to catch the small problems — a weakening anode rod, a building sediment layer, a drifting thermostat — before they become an emergency.',
  preventiveTitle: 'Preventive Maintenance',
  preventiveItems: [
    'Sediment flushing to restore heating efficiency',
    'Anode rod inspection and replacement',
    'Pressure testing on the relief valve and expansion tank',
    'Annual full-system inspection with a written report',
    'Seasonal care — checking venting before winter and scaling before summer',
  ],
  benefits: [
    {
      icon: 'Gauge',
      title: 'Restored Efficiency',
      description:
        'A flushed tank heats water faster and uses less gas or electricity — lowering your utility bill.',
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
        'Regular inspections catch worn components before they fail — so you are not surprised by a cold shower.',
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
      'Tell us what is happening — no hot water, leaking tank, error code. We schedule same-day when possible.',
  },
  {
    step: 2,
    title: 'Diagnose',
    description:
      'The technician inspects the unit, tests each component, and identifies the root cause — not just the symptom.',
  },
  {
    step: 3,
    title: 'Explain Options',
    description:
      'You get a clear explanation of what is wrong, what it takes to fix it, and what it costs — before any work starts.',
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
      'We walk you through the work done, answer questions, and leave the area clean — no surprise charges.',
  },
];

export const serviceArea: ServiceAreaContent = {
  title: 'Water Heater Repair & Replacement Across Clovis & Nearby Areas',
  description:
    'We are based in Clovis and serve the surrounding Central Valley communities. If you are within these areas and your water heater has stopped working, we can usually have a technician at your door the same day.',
  nearbyAreas: [
    { name: 'Clovis' },
    { name: 'Fresno' },
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
    src: 'https://images.pexels.com/photos/13278726/pexels-photo-13278726.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Residential street in Clovis, California lined with palm trees.',
    prompt:
      'Quaint residential street in California lined with palm trees and picturesque houses, natural lighting, documentary style.',
  },
};

export const faqs: FAQItemContent[] = [
  {
    question: 'How fast can you get to my house in Clovis?',
    answer:
      'Most calls received before noon get a technician out the same day. Emergency calls are dispatched as quickly as possible — often within an hour or two depending on your location and the time of day.',
  },
  {
    question: 'How much does water heater repair cost?',
    answer:
      'Every repair starts with a diagnostic visit. Once the technician identifies the problem, you get a flat-rate price upfront — approved by you before any work begins. There are no hourly charges or surprise fees.',
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
      'In many cases, yes. If your unit needs replacement, we can often remove the old heater and install a new one the same day — provided the new unit is available from our local supply. We will confirm timing when you call.',
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
      text: 'I was told by another company I needed a whole new tank. These guys came out, found it was just a heating element, and saved me over a thousand dollars. Honest and straightforward — I will not call anyone else.',
      service: 'Heating Element Replacement',
    },
    {
      name: 'Patricia L.',
      rating: 5,
      date: 'December 2025',
      text: 'Our Rinnai tankless kept throwing an error code. Two other companies could not figure it out. This team knew exactly what it was — a scaled-up heat exchanger — descaled it, and it has been perfect since. Highly recommend for tankless.',
      service: 'Tankless Descaling & Repair',
    },
  ],
};

export const contact: ContactContent = {
  title: 'Get Your Hot Water Running Again',
  description:
    'Call us now or send a message — we will get back to you fast. Whether it is an emergency or you just have questions about a replacement, we are here to help.',
  phone: '(559) 555-0142',
  email: 'dispatch@cloviswaterheaterpros.com',
  hours: 'Mon–Sat 7am–7pm · 24/7 Emergency',
  emergencyPhone: '(559) 555-0142',
  serviceArea: 'Clovis, CA and the surrounding Central Valley',
  image: {
    src: 'https://images.pexels.com/photos/5853941/pexels-photo-5853941.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Clovis water heater repair team tools and equipment.',
    prompt:
      'Close-up of metal wrenches on a rustic wooden table in a workshop setting, documentary style.',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101800.2!2d-119.75!3d36.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80914e5b5d5b5b5b%3A0x0!2sClovis%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000',
};
