import { SearchCarImg } from "./Images";
import Input from "./../Constants/Input";
import { useState } from "react";
import { years, makers, movedDistance, engine, modal, status } from "../Data/CarSearchData";
const FindCar = () => {
  const [searchData, setSearchData] = useState({
    years: "",
    developers: "",
    moved:"",
    engine:"",
    model:"",
    status:"",
    amount_from :"",
    amount_to :""
  });

  console.log(searchData);
  // set change value for select input
  const handleChangeInput = (e, type) => {
    setSearchData((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  };

  // handle submit function
  const handleSubmit = () => {
    console.log(searchData);
    console.log("function handleSubmit");
  }

  return (
    <div className="max-w-7xl mx-auto my-20 px-5 gap-10 flex lg:flex-nowrap flex-wrap items-center justify-between">
      {/* form to search car */}
      <div className="bg-[#f9f7f7] rounded-md mx-auto py-5 px-4">
        <form action="">
          <div className="flex sm:flex-nowrap flex-wrap justify-center gap-5">
            <Input
              label={"Year of manufacture"}
              name={"year"}
              options={years}
              setState={handleChangeInput}
              id={"years"}
              />
            <Input
              label={"Select make"}
              name={"maker"}
              options={makers}
              setState={handleChangeInput}
              id={"developers"}
            />
          </div>
          <div className="flex sm:flex-nowrap flex-wrap justify-center gap-5 mt-10">
            <Input
              label={"Moved (km)"}
              name={"moved"}
              options={movedDistance}
              setState={handleChangeInput}
              id={"moved"}
            />
            <Input
              label={"Select engine"}
              name={"engine"}
              options={engine}
              setState={handleChangeInput}
              id={"engine"}
            />
          </div>
          <div className="flex sm:flex-nowrap flex-wrap justify-center gap-5 mt-10">
            <Input
              label={"Select model"}
              name={"model"}
              options={modal}
              setState={handleChangeInput}
              id={"model"}
            />
            <Input
              label={"Car Status"}
              name={"car-status"}
              options={status}
              setState={handleChangeInput}
              id={"status"}
            />
          </div>

          <div className="mt-10">
            <p className="font-bold text-[16px] mb-2">Pricing (USD)</p>
            <div className="flex sm:flex-nowrap flex-wrap justify-center gap-5">
              <div className="">
                <label htmlFor="amount_for">From</label>
                <br />
                <input
                  type="number"
                  name="amount_from"
                  value={searchData.amount_from}
                  onChange={(e) => {
                    setSearchData((prevState) => ({
                      ...prevState,
                      amount_from: e.target.value,
                    }));
                    }}
                  className="w-52 p-1.5 outline-none rounded-md border"
                />
              </div>
              <div className="">
                <label htmlFor="amount_to">To</label>
                <br />
                <input
                  type="number"
                  name="amount_to"
                  value={searchData.amount_to}
                  onChange={(e) => {
                    setSearchData((prevState) => ({
                      ...prevState,
                      amount_to: e.target.value,
                    }));
                    }}
                  className="w-52 p-1.5 outline-none rounded-md border"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="bg-[#880ED3] mt-5 w-full rounded-lg text-[16px] font-bold px-5 py-2 text-white"
            >
              Search Car
            </button>
          </div>
        </form>
      </div>
      {/* display car */}
      <div className="mx-auto">
        <p className="text-[35px] font-semibold mb-7">Know Your Buying Power</p>
        <p className="text-[15px] font-normal mb-7 leading-5">
          How much car can you afford? Find out, then see vehicles that <br />
          match your budget.
        </p>
        <img src={SearchCarImg} alt="carimg" className="object-contain" />
      </div>
    </div>
  );
};

export default FindCar;
