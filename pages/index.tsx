import type { NextPage } from "next";
import Description from "../components/Description";

const Home: NextPage = () => {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "url(https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/Content_auto_x2.webp)",
        }}
        className="h-screen relative bg-no-repeat bg-cover bg-center overflow-hidden"
      >
        <Description />
      </section>
    </>
  );
};

export default Home;
