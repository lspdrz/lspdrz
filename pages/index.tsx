import Image from "next/image";
import Layout from "../components/Layout";
import luisPedrazaImage from "../public/images/luis-pedraza.jpeg";
import { useCookies } from "react-cookie";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const IndexPage = () => {
  const [cookies, setCookie] = useCookies(["lspdrzDarkMode"]);
  const darkMode = useContext(DarkModeContext);
  const borderColor = darkMode ? "border-lspdrz-pink" : "border-black";

  return (
    <Layout homePage={true}>
      <div className="mt-2 flex gap-2 flex-wrap-reverse 1.5xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap">
        <div className={`border-2 ${borderColor} 1.5xl:w-[600px]`}>
          <p className="p-3">
            Hey hey!
            <br />
            Too bright? Click{" "}
            <span
              className="underline cursor-pointer"
              onClick={() =>
                setCookie("lspdrzDarkMode", !cookies.lspdrzDarkMode)
              }
            >
              here for dark mode.
            </span>
            <br />
            Welcome to my personal site. You'll find all of the public projects
            I work on here.
            <br />
            <br />I grew up in Corpus Christi, Texas and went to school in
            Austin, where I studied philosophy and computer science. I love to
            travel and experience different areas and cultures. I've spent most
            of my time abroad in Barcelona, Istanbul, and Beirut. I'm currently
            based in Paris.
            <br />
            <br />
            As a software engineer, I've been working at various startups over
            the last five years as well as doing freelance/pro bono work in the
            nonprofit space.
            <br />
            <br />
            You can reach me by email if you want to work together, or if you
            just want to say hi.
          </p>
          <div className="p-3">
            <p>
              Email:{" "}
              <button>
                <a href="mailto:luis@luispedraza.org">luis@luispedraza.org</a>
              </button>
            </p>
            Github:{" "}
            <a
              target="_blank"
              href="https://github.com/lspdrz"
              rel="noopener noreferrer"
            >
              @lspdrz
            </a>
          </div>
        </div>
        <div
          className={`border-2 ${borderColor} grow flex flex-col justify-center`}
        >
          <div className="p-3 pb-1.5 self-center">
            <Image src={luisPedrazaImage} alt="luis-pedraza-image" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
