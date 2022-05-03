import Link from "next/link";

const Navbar = () => (
  <div>
    <nav className="border-2 border-lspdrz-pink">
      <Link href="/">
        <a className="p-3">home</a>
      </Link>
      <Link href="/web-projects">
        <a className="p-3">web projects</a>
      </Link>
    </nav>
  </div>
);

export default Navbar;
