export interface MetaContent {
  phone: string;
  emergencyPhone: string;
  textPhone: string;
  email: string;
  city: string;
  state: string;
  serviceAreaLabel: string;
  hours: string;
  logoPath: string;
  domain: string;
  businessName: string;
}

export interface ImageContent {
  src: string;
  alt: string;
  prompt?: string; // ← Optional kar diya
}

export interface TrustIconItem {
  icon: string;
  label: string;
}

export interface EmergencyCardContent {
  title: string;
  description: string;
  buttonText: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  image: ImageContent;
  trustIcons: TrustIconItem[];
  emergencyCard: EmergencyCardContent;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutContent {
  title: string;
  description: string;
  bullets: string[];
  stats: StatItem[];
  image: ImageContent;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  symptoms: string[];
  causes: string[];
  inspection: string[];
  image: ImageContent;
}

export interface ServicePillItem {
  label: string;
}

export interface ChecklistGroup {
  title: string;
  items: string[];
}

export interface ComparisonColumn {
  title: string;
  items: string[];
}

export interface ComparisonContent {
  repair: ComparisonColumn;
  replace: ComparisonColumn;
  recommendation: string;
}

export interface CoverageContent {
  title: string;
  description: string;
  checklist: ChecklistGroup[];
  comparisonTitle: string;
  comparison: ComparisonContent;
}

export interface FeatureCardItem {
  icon: string;
  title: string;
  description: string;
}

export interface MaintenanceContent {
  title: string;
  description: string;
  preventiveTitle: string;
  preventiveItems: string[];
  benefits: FeatureCardItem[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface NearbyArea {
  name: string;
}

export interface FAQItemContent {
  question: string;
  answer: string;
}

export interface ReviewItem {
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export interface ReviewsContent {
  title: string;
  description: string;
  averageRating: number;
  totalReviews: number;
  reviews: ReviewItem[];
}

export interface ContactContent {
  title: string;
  description: string;
  phone: string;
  email: string;
  hours: string;
  emergencyPhone: string;
  serviceArea: string;
  image: ImageContent;
  mapEmbedUrl: string;
}

export interface WhyChooseUsContent {
  title: string;
  description: string;
  trustPoints: string[];
  emergencyCard: EmergencyCardContent;
}

export interface TrustBarContent {
  items: TrustIconItem[];
}

export interface ServiceAreaContent {
  title: string;
  description: string;
  nearbyAreas: NearbyArea[];
  image: ImageContent;
}