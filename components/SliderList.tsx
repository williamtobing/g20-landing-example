import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import SliderItem from "./SliderItem";

type Cities = {
  id: number;
  name: string;
  imgUrl: string;
}[];

const cities: Cities = [
  {
    id: 1,
    name: "BALI",
    imgUrl:
      "https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/Desktop.jpg",
  },
  {
    id: 2,
    name: "SEMARANG",
    imgUrl:
      "https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/Content_auto_x2_colored_toned_light_ai.webp",
  },
];

const Slider = () => {
  return (
    <div className="flex flex-col justify-center h-full text-white">
      <div className="relative mb-4">
        <div className="flex overflow-hidden">
          {cities.map((city) => (
            <SliderItem key={city.id} name={city.name} imgUrl={city.imgUrl} />
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="border border-white hover:bg-white duration-300 hover:text-black rounded-md p-1 cursor-pointer mr-2">
          <ChevronLeftIcon className="h-5 w-5" />
        </div>
        <div className="border border-white hover:bg-white duration-300 hover:text-black rounded-md p-1 cursor-pointer">
          <ChevronRightIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
