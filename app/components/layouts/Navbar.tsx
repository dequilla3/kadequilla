export default function Navbar() {
  return (
    <div className="border fixed w-full bg-white">
      <nav className="flex py-4 px-32">
        <a href="/" className="font-black">
          <div className="flex">
            <div className="">kadequilla.dev</div>
          </div>
        </a>
        <ul className="flex justify-end w-full font-semibold text-neutral-700 text-sm">
          <li>
            <div className="ml-5 cursor-pointer"> Home</div>
          </li>
          <li>
            <div className="ml-5 cursor-pointer">Projects</div>
          </li>
          <li>
            <div className="ml-5 cursor-pointer">Contact</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
