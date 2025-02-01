import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/vercel.svg"; // Update path if needed

export default function Homehero() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Buy, Sell & Trade <span className="text-blue-500">Crypto</span> Securely
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Join **Cryptoverse**, the most trusted platform for crypto transactions. 
            Connect your wallet and start trading in seconds!
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/get-started" className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
              Get Started
            </Link>
            <Link href="/learn-more" className="bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image src={heroImage} alt="Crypto Trading" width={500} height={500} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
