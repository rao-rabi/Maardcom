import { BlogCar1, BlogCar2, BlogCar3, DateDiv } from "./Images";
const Blogs = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 text-center my-20">
      <div>
        {/* headings */}
        <div className="p-2 bg-[#B479D926] w-fit mx-auto rounded-xl">
          <p className="text-[#B479D9] font-bold text-lg px-4 italic">
            Latest News
          </p>
        </div>
        <p className="text-[40px] font-bold text-center">
          Check out our blog posts
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-12 gap-5 place-items-start">
        {/* card 1 */}
        <div className="lg:col-span-6 col-span-12 rounded-md">
          <img
            src={BlogCar1}
            alt="AirMax Pro"
            className="rounded-md object-contain"
          />
        </div>
        {/* card 2 */}
        <div className="lg:col-span-3 sm:col-span-6 col-span-12">
          <img
            src={BlogCar2}
            alt="Laptop"
            className="w-full h-[250px] rounded-md object-fill"
          />

          <div className="relative">
            <img src={DateDiv} className="absolute left-0 lg:top-[-60%] top-[-90%]" alt="" />
            <div className="mt-14 text-start">
              <span className="me-3">Md Sohag</span>
              <span>25 April, 2023</span>
            </div>
            <h1 className="text-2xl font-semibold text-start mt-5 ">
              Saudi Arabian automotive industry news.
            </h1>
            <button
              type="button"
              className="mt-4 rounded-sm py-2  font-semibold  flex justify-center items-center"
            >
              Continue Reading <span className="text-lg">&#8594;</span>
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="lg:col-span-3 sm:col-span-6 col-span-12">
          <img
            src={BlogCar3}
            alt="Laptop"
            className="w-full h-[250px] rounded-md object-fill"
          />

          <div className="relative">
            <img src={DateDiv} className="absolute left-0 lg:top-[-73%] top-[-90%]" alt="" />
            <div className="mt-14 text-start">
              <span className="me-3">Md Sohag</span>
              <span>25 April, 2023</span>
            </div>
            <h1 className="text-2xl font-semibold text-start mt-5 ">
            Car maintenance and buying guides.
            </h1>
            <button
              type="button"
              className="mt-4 rounded-sm py-2  font-semibold  flex justify-center items-center"
            >
              Continue Reading <span className="text-lg">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
