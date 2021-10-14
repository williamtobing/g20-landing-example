type sliderProps = {
  name: string;
  imgUrl: string;
  idx: number;
};

const SliderItem = ({ name, imgUrl, idx }: sliderProps) => {
  const styleHandler = () => {
    return { transform: `translateX(${-idx * 336}px)` };
  };

  return (
    <>
      <div
        style={styleHandler()}
        className="relative mt-8 mr-4 flex-none duration-300 transform ease-in-out"
      >
        <img
          src={imgUrl}
          alt="city_img"
          className="rounded-md w-80 h-96 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded px-2 py-1">
          <p className="text-black font-bold">{name}</p>
        </div>
      </div>
    </>
  );
};

export default SliderItem;
