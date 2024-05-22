import { Toyota, Honda, KIA, Ford, AUDI } from "./Images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// custom right arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full focus:outline-none"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  );
};

// custom left arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 p-3 rounded-full focus:outline-none"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
  );
};

const SearchByBrand = () => {
  const cards = [
    {
      imageUrl: Toyota,
    },
    {
      imageUrl: Honda,
    },
    {
      imageUrl: Ford,
    },
    {
      imageUrl: AUDI,
    },
    {
      imageUrl: KIA,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="max-w-[1320px] mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center mt-20">
        Search By Brands
      </h1>
      <h1 className="text-md text-center text-slate-500 mb-10">
        With thousands of cars, we have just the right one for you
      </h1>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        containerClass="carousel-container"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-full md:w-52 md:h-52 mx-auto overflow-hidden rounded-lg flex justify-center items-center border"
          >
            <img
              src={card.imageUrl}
              alt={`Card ${index + 1}`}
              className="object-contain py-2"
            />
          </div>
        ))}
      </Carousel>
      <div className="text-center">
        <button className="my-5 font-semibold">
          View more<span className="text-lg">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default SearchByBrand;
