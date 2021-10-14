import type { NextPage } from "next";
import Description from "../components/Description";
import SliderList from "../components/SliderList";

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
        <div className="max-w-screen-xl mx-auto px-4 h-full">
          <div className="flex justify-between h-full">
            <div className="w-5/12">
              <Description />
            </div>
            <div className="w-6/12 2xl:w-5/12">
              <SliderList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
