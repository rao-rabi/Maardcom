import { useState } from "react";
import { AlJouf, Tabuk, NorthernBorders, Hail } from "./Images";
const SearchByRegion = () => {
  const [state, setState] = useState(false);
  const handleMore = () => {
    if (state === false) {
      setState(true);
    } else if (state === true) {
      setState(false);
    }
  };
  const cards = [
    {
      backgroundImage: AlJouf,
      text: "Al-JOUF",
    },
    {
      backgroundImage: Tabuk,
      text: "TABUK",
    },
    {
      backgroundImage: NorthernBorders,
      text: "NOTHERN BORDERS",
    },
    {
      backgroundImage: Hail,
      text: "HAIL",
    },
  ];
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-5">
        <h1 className="text-3xl font-semibold text-center">Search By Region</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-[80%]  md:w-full md:h-60 mx-auto h-64 bg-cover bg-center border-0 rounded-xl"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100"></div>
              <div className="absolute bottom-0 left-0 text-2xl font-bold bg-opacity-50  p-4">
                {card.text}
              </div>
            </div>
          ))}
        </div>

        {state ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-[80%]  md:w-full md:h-60 mx-auto h-64 bg-cover bg-center border-0 rounded-xl"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100"></div>
                <div className="absolute bottom-0 left-0 text-2xl font-bold bg-opacity-50  p-4">
                  {card.text}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {state ? (
          <div className=" text-center">
            <button
              onClick={handleMore}
              className="px-5 py-1 border font-semibold rounded-lg"
            >
              View less
            </button>
          </div>
        ) : null}

        {state ? null : (
          <div className=" text-center">
            <button
              onClick={handleMore}
              className="px-5 py-1 border font-semibold rounded-lg"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchByRegion;
