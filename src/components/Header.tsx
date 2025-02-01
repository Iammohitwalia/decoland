import Image from "next/image";
import Link from "next/link";
import logo from '../../public/next.svg';

export default function Header() {
  return (
  <>
 <section className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">

           <Link href='/'> <Image src={logo} alt="logo" width={100}/></Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-500">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call to Action */}
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
