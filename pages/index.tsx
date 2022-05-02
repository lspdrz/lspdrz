import Layout from "../components/Layout";

const IndexPage = () => (
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
          Welcome to my personal site. You'll find all of the public projects I
          work on here. :)
          <br />
          <br />I grew up in Corpus Christi, Texas and went to school in Austin,
          where I studied philosophy and computer science. I love to travel and
          experience different areas and cultures. I've spent most of my time
          abroad in Barcelona, Istanbul, and Beirut. I'm currently based in
          Paris.
          <br />
          <br />
          As a software engineer, I've been working at various startups over the
          last five years as well as doing freelance/pro bono work in the
          nonprofit space.
          <br />
          <br />
          You can reach me by email if you want to work together, or if you just
          want to say hi. :)
          <br />
          <br />
          Email: luis@lspdrz.com
          <br />
          Phone/Whatsapp: +33 7 49 22 21 83
          <br />
          Github: lspdrz
        </p>
      </div>
      <div className="border-2 border-lspdrz-pink grow flex flex-col justify-center">
        <img
          className="p-3 self-center"
          src="https://drive.google.com/uc?export=view&id=1Crc_Xa0t5dFSl4eiCjbzLxre0HQE-Ap5"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
