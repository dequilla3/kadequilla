export default function Navbar() {
  return (
    <div className="border">
      <nav className="flex py-4 px-72">
        <a href="#" className="font-black text-xl">
          <div className="flex">
            <div className="text-4xl mr-1 transition-all hover:animate-spin text-pink-500">
              {"<>"}
            </div>
            <div className="translate-y-2">kadequilla.dev</div>
          </div>
        </a>
        <ul className="flex justify-end w-full font-semibold text-neutral-700">
          <li>
            <div className="ml-5 cursor-pointer hover:text-pink-900"> Home</div>
          </li>
          <li>
            <div className="ml-5 cursor-pointer hover:text-pink-900">
              Projects
            </div>
          </li>
          <li>
            <div className="ml-5 cursor-pointer hover:text-pink-900">
              Contact
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
