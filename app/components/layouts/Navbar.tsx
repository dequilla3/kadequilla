export default function Navbar() {
  return (
    <div className="border fixed w-full bg-white">
      <nav className="flex py-4 md:px-32">
        <a
          href="/"
          className="font-black sm:w-full  sm:text-center md:w-auto md:text-left"
        >
          kadequilla.dev
        </a>
        <ul className="sm:hidden md:flex justify-end w-full font-semibold text-neutral-700">
          <li>
            <div className="ml-5 cursor-pointer">📞+63 918 389 3886</div>
          </li>
          <li>
            <div className="ml-5 cursor-pointer">📧 deqkim4@gmail.com</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
