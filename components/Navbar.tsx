import Link from "next/link";
import { useRouter } from "next/router";
import { Popover } from "@headlessui/react";

const Navbar = () => {
  const path = useRouter().asPath;
  // Finds the current page we're on using the context from next router
  const currentPage =
    path === "/"
      ? "/"
      : path.substring(
          path.indexOf("/") + 1,
          path.lastIndexOf("/") || path.length
        );

  // If we're on a certain page, turn that page's item in the nav to white
  const getNavItemColor = (navItem: string) => {
    return navItem === currentPage ? "text-white" : "";
  };

  const navItems: { [id: string]: string } = {
    "/": "home",
    "web-projects": "web projects",
    photography: "photography",
  };

  // TODO: is there a way to abstract the links in the navbar into a loop? Should i do that?
  return (
    <div className="pt-1 sm:pt-0">
      <nav>
        <div className="hidden sm:block flex justify-around border-2 border-lspdrz-pink">
          <Link href="/">
            <a className="p-2">{navItems["/"]}</a>
          </Link>
          <Link href="/web-projects">
            <a className={`p-2 ${getNavItemColor("web-projects")}`}>
              {navItems["web-projects"]}
            </a>
          </Link>
          <Link href="/photography">
            <a className={`p-2 ${getNavItemColor("photography")}`}>
              {navItems["photography"]}
            </a>
          </Link>
        </div>
        <Popover className="relative sm:hidden">
          <div className="flex justify-end">
            <Popover.Button className="px-2 py-1 text-center inline-flex items-center border-2 border-lspdrz-pink cursor-pointer">
              {navItems[currentPage]}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </Popover.Button>
          </div>

          <div className="w-32">
            <Popover.Panel className="mt-2 absolute z-10 flex flex-col w-full border-2 border-lspdrz-pink cursor-pointer bg-lspdrz-gray">
              <Link href="/">
                <a className="p-2">{navItems["/"]}</a>
              </Link>
              <Link href="/web-projects">
                <a className={`p-2 ${getNavItemColor("web-projects")}`}>
                  {navItems["web-projects"]}
                </a>
              </Link>
              <Link href="/photography">
                <a className={`p-2 ${getNavItemColor("photography")}`}>
                  {navItems["photography"]}
                </a>
              </Link>
            </Popover.Panel>
          </div>
        </Popover>
      </nav>
    </div>
  );
};

export default Navbar;
