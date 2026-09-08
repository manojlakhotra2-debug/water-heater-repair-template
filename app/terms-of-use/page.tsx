import type { Metadata } from 'next';
import Link from 'next/link';
import { meta } from '@/content/clovis-ca';

export const metadata: Metadata = {
  title: 'Terms of Service',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="container-page py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Effective Date: [Date]
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-muted-foreground">
          <p>
            By visiting, browsing, or using this website (the <strong>"Site"</strong>), you agree to comply with these <strong>Terms of Service ("Terms")</strong>. If you do not accept these Terms, please do not access or use the Site.
          </p>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">1. Our Service</h2>

            <p>
              This Site operates as a <strong>lead generation and referral service</strong> designed to connect homeowners, residents, and property owners with independent third-party contractors and service professionals ("Service Providers"). Services may include water heater repair, replacement, installation, and other related residential plumbing and heating services.
            </p>

            <p>
              We do not directly provide repair, replacement, installation, or contractor services. Any service requested through this Site is fulfilled by an independent third-party provider, and we are not a party to any service agreement made between you and that provider.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">2. Eligibility Requirements</h2>

            <p>
              To use this Site, you must be at least <strong>18 years of age</strong> and legally capable of entering into a binding agreement.
            </p>

            <p>
              By using the Site, you confirm that you meet these eligibility requirements.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">3. Service Requests and Submitted Information</h2>

            <p>
              By submitting a request through the Site, you acknowledge and agree that:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The information you provide is truthful, accurate, and up to date.</li>
              <li>You own the property involved or have authority to request service on behalf of the owner.</li>
              <li>Your request and contact information may be shared with one or more Service Providers serving your area.</li>
              <li>You authorize those Service Providers to contact you by phone call, text message, or email regarding your request, including at any phone number you submit, even if it appears on a federal or state Do-Not-Call registry.</li>
              <li>Standard carrier message and data rates may apply.</li>
              <li>Your consent to receive communications is not required as a condition of purchasing services.</li>
            </ul>

            <p>
              You may opt out of future communications at any time by replying <strong>STOP</strong> to text messages, asking the caller to remove your information from their list, or contacting us through our{' '}
<Link href="/contact" className="text-accent hover:underline">
  Contact page
</Link>.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">4. Independent Contractors; No Endorsement</h2>

            <p>
              All Service Providers referred through this Site operate independently.
            </p>

            <p>
              They are not employees, representatives, affiliates, agents, or partners of this Site. We do not control or supervise their work and do not guarantee:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Licensing or certifications.</li>
              <li>Insurance coverage.</li>
              <li>Pricing or estimates.</li>
              <li>Scheduling or availability.</li>
              <li>Workmanship or service quality.</li>
            </ul>

            <p>
              Any agreement for services is strictly between you and the Service Provider you choose. We are not responsible for disputes, damages, delays, or issues that arise from your dealings with any Service Provider.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">5. Acceptable Use Policy</h2>

            <p>You agree not to use the Site in a way that:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Violates any law or regulation.</li>
              <li>Includes false, misleading, or fraudulent submissions.</li>
              <li>Attempts to gain unauthorized access to the Site, its servers, or related systems.</li>
              <li>Interferes with the Site's functionality or security.</li>
              <li>Uses bots, crawlers, scrapers, or automated tools to collect information from the Site.</li>
              <li>Harms, harasses, abuses, or defrauds us, Service Providers, or any other person.</li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">6. Ownership of Content</h2>

            <p>
              All content available on the Site-including but not limited to text, graphics, logos, branding, layouts, and design elements is owned by the Site or its licensors and is protected under applicable copyright, trademark, and intellectual property laws.
            </p>

            <p>
              You may not reproduce, copy, republish, distribute, modify, or create derivative works from Site content without prior written authorization.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">7. Disclaimer of Warranties</h2>

            <p>
              The Site is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis without warranties of any kind.
            </p>

            <p>
              To the fullest extent permitted by law, we disclaim all express or implied warranties, including but not limited to:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Merchantability.</li>
              <li>Fitness for a particular purpose.</li>
              <li>Accuracy or reliability of information.</li>
              <li>Non-infringement.</li>
              <li>Uninterrupted availability.</li>
              <li>Security or error-free operation.</li>
            </ul>

            <p>
              We do not guarantee that the Site will always be available, free of errors, or free from harmful components.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>

            <p>
              To the maximum extent permitted by law, the Site, its owners, operators, affiliates, employees, licensors, and representatives will not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <p>This includes, without limitation, damages relating to:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Lost profits.</li>
              <li>Lost data.</li>
              <li>Loss of business opportunities.</li>
              <li>Goodwill.</li>
              <li>Property damage.</li>
              <li>Service disputes with Service Providers.</li>
            </ul>

            <p>
              Arising from or connected with your use of the Site or your interactions with any Service Provider.
            </p>

            <p>
              If liability cannot legally be excluded, our total liability to you for all claims shall not exceed <strong>$100 USD</strong>.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">9. Indemnification</h2>

            <p>
              You agree to indemnify, defend, and hold harmless the Site and its owners, affiliates, employees, and representatives from and against any claims, damages, liabilities, losses, costs, and expenses including reasonable attorneys' fees arising from:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Your use of the Site.</li>
              <li>Your breach of these Terms.</li>
              <li>Information you submit through the Site.</li>
              <li>Disputes between you and any Service Provider.</li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">10. Changes to the Site or These Terms</h2>

            <p>
              We reserve the right to modify, suspend, restrict, or discontinue any part of the Site at any time without prior notice.
            </p>

            <p>
              We may also update or revise these Terms periodically. Updated Terms become effective immediately upon being posted to the Site.
            </p>

            <p>
              Your continued use of the Site after changes are posted constitutes your acceptance of those changes.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">11. Governing Law</h2>

            <p>
              These Terms shall be governed by and interpreted under the laws of the <strong>State of California</strong>, without regard to conflict-of-law principles.
            </p>

            <p>
              Any legal dispute related to these Terms or your use of the Site must be brought exclusively in the appropriate state or federal courts located in <strong>Fresno County, California</strong>, and you consent to the jurisdiction and venue of those courts.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">12. Severability</h2>

            <p>
              If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, that provision shall be enforced to the fullest extent permitted by law, and the remainder of these Terms will remain fully valid and enforceable.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">13. Contact Information</h2>

            <p>
              If you have questions about these Terms, you may contact us at:
            </p>

            <ul className="list-none space-y-2 pl-0">
              <li><strong>{meta.businessName}</strong></li>
              <li>{meta.email}</li>
              <li>{meta.phone}</li>
            </ul>

            <p className="pt-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} {meta.businessName}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}