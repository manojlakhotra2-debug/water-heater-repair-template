import type { Metadata } from 'next';
import { meta } from '@/content/clovis-ca';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-page py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Effective Date: [Date]
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-muted-foreground">
          <p>
            This Privacy Policy describes the types of information we may collect through this website (the <strong>"Site"</strong>), how that information is used, when it may be shared, and the choices available to you regarding your information.
          </p>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>

            <p>
              We collect information when you voluntarily submit it through a contact form, service request form, or other direct communication on the Site.
            </p>

            <p><strong>This information may include:</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Your full name</li>
              <li>Phone number</li>
              <li>Email address (if provided)</li>
              <li>Property address or service address</li>
              <li>Details regarding the water heater service you are requesting</li>
            </ul>

            <p>
              We may also use <strong>cookies and similar tracking technologies</strong> to understand how visitors use the Site and to improve its performance and content.
            </p>

            <p><strong>These technologies may include:</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Google Analytics</strong> – to measure Site traffic, user behavior, and page performance.</li>
              <li><strong>Google Tag Manager (GTM)</strong> – to manage and deploy tracking scripts on the Site.</li>
              <li><strong>Microsoft Clarity</strong> – to analyze user interactions such as clicks, scrolling, and session behavior through heatmaps and session recordings.</li>
            </ul>

            <p>
              These tools may collect information such as your <strong>IP address, device type, browser type, pages visited, time spent on the Site, and general interaction data.</strong> This information is used in aggregate to improve Site performance and user experience and is not used to personally identify you.
            </p>

            <p>
              <strong>We do not create marketing profiles based on user activity, and we do not sell personal information to third parties or data brokers.</strong>
            </p>

            <p>
              Like most websites, our servers or hosting providers may also automatically record limited technical information for security, fraud prevention, and system maintenance purposes.
            </p>

            <p><strong>This may include:</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Date and time of access</li>
              <li>Referring page or basic server log data</li>
            </ul>

            <p>
              This information is used for operational purposes only and is not used to personally identify visitors.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Information</h2>

            <p><strong>The information you provide may be used for the following purposes:</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li>To connect you with one or more independent third-party contractors or service providers ("Service Providers") who may be able to assist with your water heater repair, replacement, or installation request.</li>
              <li>To contact you regarding your request when necessary.</li>
              <li>To respond to questions or follow-up communications.</li>
              <li>To analyze and improve Site performance, content, and user experience.</li>
              <li>To comply with applicable laws, regulations, or legal obligations.</li>
            </ul>

            <p>
              We use submitted information only for legitimate business and service-related purposes tied to your inquiry.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">3. Information Sharing</h2>

            <p>
              When you submit a request through the Site, the information you provide may be shared with one or more <strong>Service Providers</strong> in your area so they can review your request and contact you directly.
            </p>

            <p>
              Once your information has been shared, the receiving Service Provider may independently store, use, or process that information under its own privacy practices. We do not control how third-party Service Providers handle your information after referral, and we encourage you to review their policies if you choose to work with them.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
  Third-Party Analytics Providers
</h3>

<p>
  We may share limited technical and behavioral data (not personally identifiable information) with third-party analytics providers such as <strong>Google (Analytics, Tag Manager)</strong> and <strong>Microsoft (Clarity)</strong> to help us understand Site usage.
</p>

<p>
  <strong>These providers may have access to this data under their own privacy policies:</strong>
</p>

<ul className="list-disc space-y-2 pl-6">
  <li>
    Google Privacy Policy:{' '}
    <a
      href="https://policies.google.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      policies.google.com/privacy
    </a>
  </li>
  <li>
    Microsoft Privacy Statement:{' '}
    <a
      href="https://privacy.microsoft.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      privacy.microsoft.com
    </a>
  </li>
</ul>

            <p><strong>We may also disclose information when necessary:</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li>To comply with legal requirements, court orders, subpoenas, or governmental requests.</li>
              <li>To enforce our Terms of Service or protect our legal rights.</li>
              <li>To prevent fraud, abuse, or unlawful activity.</li>
              <li>To protect the safety, property, or rights of the Site, users, or the public.</li>
            </ul>

            <p><strong>We do not sell personal information.</strong></p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">4. Cookies and Your Choices</h2>

            <p>
              You can control or disable cookies through your browser settings. Disabling cookies may affect certain features of the Site.
            </p>

            <p>
  <strong>Opt-Out Options:</strong>
</p>

<ul className="list-disc space-y-2 pl-6">
  <li>
    Google Analytics Opt-Out:{' '}
    <a
      href="https://tools.google.com/dlpage/gaoptout"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      tools.google.com/dlpage/gaoptout
    </a>
  </li>
  <li>
    Google Ads Settings (if applicable):{' '}
    <a
      href="https://adssettings.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      adssettings.google.com
    </a>
  </li>
</ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">5. Data Retention</h2>

            <p>
              We keep submitted information only for as long as reasonably necessary to operate the Site, process service requests, maintain business records, or comply with legal obligations.
            </p>

            <p>
              If you would like your information removed from our records, you may contact us using the contact information listed below.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">6. Your Privacy Rights and Choices</h2>

            <p>
              Depending on your state or country of residence, you may have rights regarding the personal information we maintain about you.
            </p>

            <p><strong>These rights may include:</strong></p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Requesting access to personal information we hold about you.</li>
              <li>Requesting correction of inaccurate information.</li>
              <li>Requesting deletion of your information.</li>
              <li>Opting out of future communications.</li>
              <li>Filing a complaint with an applicable privacy or data protection authority.</li>
            </ul>

            <p>
              Requests may be submitted through our contact page or by contacting us directly. <strong>We will respond within the timeframe required by applicable law.</strong>
            </p>

            <h3 className="text-xl font-semibold text-foreground">California Privacy Notice</h3>

            <p>
              If you are a California resident, you may have rights under the <strong>California Consumer Privacy Act (CCPA)</strong>, as amended by the <strong>California Privacy Rights Act (CPRA)</strong>, including:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>The right to know what personal information is collected.</li>
              <li>The right to request deletion.</li>
              <li>The right to request correction.</li>
              <li>The right to opt out of the sale or sharing of personal information.</li>
            </ul>

            <p><strong>We do not sell or share personal information as those terms are defined under California law.</strong></p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">7. Children's Privacy</h2>

            <p>
              This Site is intended for use by adults and is not directed to children under 13 years of age.
            </p>

            <p>
              We do not knowingly collect personal information from children under 13. If you believe a child has submitted personal information through the Site, please contact us and we will take reasonable steps to remove it.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">8. Security Measures</h2>

            <p>
              We use reasonable administrative, technical, and organizational measures to help protect information submitted through the Site.
            </p>

            <p>
              However, no method of transmitting information over the internet or storing electronic data can be guaranteed to be completely secure. For that reason, we cannot guarantee absolute security of any information transmitted to or through the Site.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Privacy Policy</h2>

            <p>
              We may revise or update this Privacy Policy from time to time.
            </p>

            <p>
              Any updates will be posted on this page along with an updated <strong>Effective Date</strong>. Continued use of the Site after any revised version is posted means you accept the updated Privacy Policy.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Information</h2>

            <p>
              If you have questions about this Privacy Policy, your personal information, or would like to make a privacy-related request, you may contact us at:
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