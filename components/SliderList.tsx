import { useState } from "react";
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
  {
    id: 3,
    name: "YOGYAKARTA",
    imgUrl:
      "https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/EOtDQfa6DmpNyMz43NCdWVvpo9Eg5BIARvdPKdEL.jpg",
  },
  {
    id: 4,
    name: "BALI",
    imgUrl:
      "https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/Desktop.jpg",
  },
  {
    id: 5,
    name: "SEMARANG",
    imgUrl:
      "https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/Content_auto_x2_colored_toned_light_ai.webp",
  },
  {
    id: 6,
    name: "YOGYAKARTA",
    imgUrl:
      "https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/EOtDQfa6DmpNyMz43NCdWVvpo9Eg5BIARvdPKdEL.jpg",
  },
];

const Slider = () => {
  const [idx, setIdx] = useState(0);

  const leftClickHandler = () => {
    if (idx - 1 >= 0) {
      setIdx(idx - 1);
    } else {
      setIdx(cities.length - 1);
    }
  };

  const rightClickHandler = () => {
    if (idx + 1 <= cities.length - 1) {
      setIdx(idx + 1);
    } else {
      setIdx(0);
    }
  };

  return (
    <div className="flex flex-col justify-center h-full text-white">
      <div className="mb-4">
        <div className="flex overflow-hidden">
          {cities.map((city) => (
            <SliderItem
              key={city.id}
              name={city.name}
              imgUrl={city.imgUrl}
              idx={idx}
            />
          ))}
        </div>
      </div>

      <div className="flex">
        <button
          type="button"
          onClick={leftClickHandler}
          className="border border-white hover:bg-white duration-300 hover:text-black rounded-md p-1 mr-2"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={rightClickHandler}
          className="border border-white hover:bg-white duration-300 hover:text-black rounded-md p-1"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
