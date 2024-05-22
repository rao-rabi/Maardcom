import { MeetTeamData } from "../Data/MeetTeamData";

const OurTeam = () => {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="mt-20">
        {/* headings */}
        <div className="p-2 bg-[#B479D926] w-fit mx-auto rounded-xl">
          <p className="text-[#B479D9] font-bold text-lg px-4">Join us Today</p>
        </div>
        <p className="text-[40px] font-bold text-center">Meet Our Team!</p>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center mx-5 lg:gap-10 gap-5">
        {MeetTeamData?.map((item, index) => (
          <div
            key={index}
            className="rounded-md p-5 hover:scale-105 transition-all ease-in-out duration-500"
          >
            <img
              src={item?.image}
              className="object-contain bg-[#F8F8F8]"
              alt="avatar"
            />
            <div className="text-center">
              <p className="font-bold text-lg pl-3 mb-0 pb-0 leading-0">
                {item?.name}
              </p>
              <p className="font-medium text-normal pt-0 mt-0 leading-0 text-[#878787] px-2">
                {item?.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* join button */}
      <div className="text-center">
        <button className="px-5 border py-1 my-5 font-semibold rounded-lg">
          Join Our Team
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
