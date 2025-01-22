import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <span className="bg-blue-600 text-6xl">Hello World</span>
        <div className="mt-5 space-x-5 flex justify-center">
          <Link href="/contact">
            <button className="border border-white px-4 py-2 rounded-xl cursor-pointer">
              Contact
            </button>
          </Link>
          <Link href="/games">
            <button className="border border-white px-4 py-2 rounded-xl cursor-pointer">
              Games
            </button>
          </Link>
          <Link href="/service">
            <button className="border border-white px-4 py-2 rounded-xl cursor-pointer">
              Service
            </button>
          </Link>
          </div>
        </div>
    </div>
  );
}
