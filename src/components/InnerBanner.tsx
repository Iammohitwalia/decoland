import Link from "next/link";

interface InnerBannerProps {
  title: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function InnerBanner({ title, breadcrumbs }: InnerBannerProps) {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Page Title */}
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>

        {/* Breadcrumb */}
        <nav className="mt-3 text-gray-300 text-sm">
          <ul className="flex justify-center space-x-2">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <Link href={breadcrumb.href} className="hover:text-blue-400">
                  {breadcrumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
