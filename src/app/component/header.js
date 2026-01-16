export default function Header() {
  return (
    <header className="bg-[#facc15] text-black p-8 shadow-md border-b-4 border-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Title */}
        <h1 className="text-5xl font-black uppercase italic tracking-tighter">
          The World of Mr. Bean
        </h1>

        {/* Navigation Links */}
        <nav className="w-full border-t border-black pt-4">
          <ul className="flex justify-around font-bold uppercase text-sm">
            <li className="hover:bg-black hover:text-white px-2 py-1 cursor-pointer transition-colors">
              Moments
            </li>
            <li className="hover:bg-black hover:text-white px-2 py-1 cursor-pointer transition-colors">
              Teddy & Mini
            </li>
            <li className="hover:bg-black hover:text-white px-2 py-1 cursor-pointer transition-colors">
              Resources
            </li>
          </ul>
        </nav>

        {/* Intro Text */}
        <p className="mt-2 text-lg font-medium max-w-xl">
          "A child in a grown man's body" — Explore the physical comedy and
          silent genius of Rowan Atkinson.
        </p>
      </div>
    </header>
  );
}
