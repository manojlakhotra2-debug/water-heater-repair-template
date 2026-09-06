import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { ServiceCloud } from '@/components/sections/ServiceCloud';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Coverage } from '@/components/sections/Coverage';
import { Maintenance } from '@/components/sections/Maintenance';
import { Process } from '@/components/sections/Process';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { Reviews } from '@/components/sections/Reviews';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <ServiceCloud />
      <WhyChooseUs />
      <Coverage />
      <Maintenance />
      <Process />
      <ServiceAreas />
      <FAQ />
      <Reviews />
      <Contact />
    </>
  );
}
