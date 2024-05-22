import { TestimonialsData } from "../Data/TestimonalsData";
const Testimonials = () => {
  console.log(TestimonialsData);
  return (
    <div className="">
      <div className="max-w-7xl mx-auto my-20">
        {/* headings */}
        <div className="p-2 bg-[#B479D926] w-fit mx-auto rounded-xl">
          <p className="text-[#B479D9] font-bold text-lg px-4">Testimonials</p>
        </div>
        <p className="text-[40px] font-bold text-center">
          What People Are Saying
        </p>

        {/* cards */}
        <div className="flex justify-between md:flex-nowrap flex-wrap lg:gap-10 gap-5 mx-5 mt-10">
          {TestimonialsData?.map((item, index) => (
            <div
              key={index}
              className="shadow-md rounded-md p-5 hover:scale-105 transition-all ease-in-out duration-500"
            >
              <div className="flex lg:items-start md:items-center items-start">
                <img
                  src={item?.image}
                  className="object-contain"
                  alt="avatar"
                />
                <div className="flex lg:flex-nowrap md:flex-wrap sm:flex-nowrap">
                  <p className="font-bold text-lg pl-3 mb-0 pb-0 leading-0">
                    {item?.name}
                  </p>
                  <p className="font-medium text-normal pt-0 mt-0 leading-0 text-[#880ED3] px-2">
                    {item?.designation}
                  </p>
                </div>
              </div>
              <p className="pt-5 text-[19px] font-normal">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
