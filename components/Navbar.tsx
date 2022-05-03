import Link from "next/link";

const Navbar = () => (
  <div className="pt-1 sm:pt-0">
    <nav>
      <div className="flex justify-around border-2 border-lspdrz-pink">
        <Link href="/">
          <a className="p-2">home</a>
        </Link>
        <Link href="/web-projects">
          <a className="p-2">web projects</a>
        </Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
