import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-50 to-white">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Your Reliable Virtual Assistant
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Helping entrepreneurs, business owners, and busy professionals save time,
          stay organized, and scale faster.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-medium transition"
        >
          Hire Me Today
        </a>
      </section>

      <Footer />
    </>
  );
}
