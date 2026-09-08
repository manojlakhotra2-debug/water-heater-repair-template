import type { Metadata } from 'next';
import Link from 'next/link';
import { meta } from '@/content/clovis-ca';

export const metadata: Metadata = {
  title: 'Sitemap',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SitemapPage() {
  const baseUrl = `https://${meta.domain}`;

  const pages = [
    { name: 'Home', url: `${baseUrl}/` },
    { name: 'Contact', url: `${baseUrl}/contact` },
    { name: 'Privacy Policy', url: `${baseUrl}/privacy-policy` },
    { name: 'Terms of Use', url: `${baseUrl}/terms-of-use` },
    { name: 'Sitemap', url: `${baseUrl}/sitemap` },
  ];

  return (
    <main className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Sitemap</h1>

        <p className="mt-4 text-muted-foreground">
          Browse the pages available on {meta.businessName}.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <ul className="space-y-5">
            {pages.map((page) => (
              <li key={page.url}>
                <Link
                  href={page.url}
                  className="text-accent hover:underline break-all"
                >
                  {page.url}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}