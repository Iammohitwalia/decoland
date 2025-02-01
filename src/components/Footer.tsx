import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">Cryptoverse</h2>
            <p className="mt-2 text-sm">
              Your trusted platform for buying, selling, and exchanging crypto securely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <Link href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook text-xl hover:text-blue-400"></i>
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram text-xl hover:text-blue-400"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Cryptoverse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
