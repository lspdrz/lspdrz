import Image from "next/image";
import Layout from "../components/Layout";
import luisPedrazaImage from "../public/assets/luis-pedraza.jpeg";
import { useState } from "react";

const IndexPage = () => {
  const [copyStatus, setCopyStatus] = useState("Copy email");
  return (
    <Layout title="Luis Pedraza">
      <div className="">
        <h1 className="text-5xl">Luis</h1>
        <h1 className="text-5xl">Pedraza</h1>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap-reverse 1.5xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap">
        <div className="border-2 border-lspdrz-pink 1.5xl:w-[600px]">
          <p className="p-3">
            Hey hey!
            <br />
            <br />
            Welcome to my personal site. You'll find all of the public projects
            I work on here. :)
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
            just want to say hi. :)
          </p>
          <div className="p-3">
            <p>
              Email:{" "}
              <button>
                <a href="mailto:luis@lspdrz.com">luis@lspdrz.com</a>
              </button>
            </p>
            <p>Phone/Whatsapp: +33 7 49 22 21 83</p>
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
        <div className="border-2 border-lspdrz-pink grow flex flex-col justify-center">
          <div className="p-3 self-center">
            <Image src={luisPedrazaImage} alt="luis-pedraza-image" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
